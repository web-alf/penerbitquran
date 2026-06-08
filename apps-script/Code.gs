/**
 * Penerbit Quran — Formulir Pengajuan Naskah → Google Spreadsheet
 *
 * Cara pakai: lihat README.md di folder ini.
 * Ringkas:
 *  1. Buka Google Sheet baru.
 *  2. Extensions ▸ Apps Script, paste seluruh file ini.
 *  3. Jalankan fungsi `setupSheet` sekali (otorisasi saat diminta).
 *  4. Deploy ▸ New deployment ▸ Web app
 *       - Execute as: Me
 *       - Who has access: Anyone
 *  5. Salin URL /exec → masukkan ke .env sebagai PUBLIC_SHEET_ENDPOINT.
 */

// ───────────────────────────── KONFIGURASI ─────────────────────────────
var CONFIG = {
  SHEET_NAME: 'Pengajuan Naskah',
  DRIVE_FOLDER_NAME: 'Naskah Pengajuan - Penerbit Quran',
  HONEYPOT_FIELD: 'website',     // field tersembunyi; kalau keisi = bot
  NOTIFY_EMAIL: false,           // true untuk kirim email notifikasi tiap pengajuan
  ADMIN_EMAIL: 'penerbitquranindonesia@gmail.com',
  MAX_FILE_BYTES: 8 * 1024 * 1024 // 8 MB (sebelum base64)
};

var HEADERS = [
  'Timestamp', 'Nama', 'Email', 'WhatsApp', 'Kota',
  'Judul', 'Kategori', 'Est. Halaman', 'Sinopsis', 'Link Naskah', 'Status'
];

var STATUS_OPTIONS = ['Baru', 'Direview', 'Diterima', 'Ditolak'];

// Warna tema (selaras website)
var COLOR = {
  emerald: '#0b5233',
  emeraldPale: '#e3f2ea',
  gold: '#C8922A',
  white: '#ffffff'
};

// ───────────────────────────── ENDPOINT ─────────────────────────────

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return json({ ok: false, error: 'No data' });
    }

    var data = JSON.parse(e.postData.contents);

    // Honeypot: kalau field tersembunyi terisi, anggap bot.
    // Balas ok:true biar bot tidak tahu, tapi jangan tulis baris.
    if (data[CONFIG.HONEYPOT_FIELD]) {
      return json({ ok: true });
    }

    // Validasi minimal (endpoint publik — jangan percaya validasi sisi klien)
    var err = validate(data);
    if (err) {
      return json({ ok: false, error: err });
    }

    // Serialize penulisan agar penambahan baris + styling tidak balapan
    var lock = LockService.getScriptLock();
    lock.waitLock(20000);
    try {
      var sheet = getSheet();

      // Upload file ke Drive (opsional). Batas ukuran ditegakkan di saveToDrive.
      var fileLink = '';
      if (data.fileData && data.fileName) {
        fileLink = saveToDrive(data.fileData, data.fileName, data.fileMime);
      }

      var row = [
        new Date(),
        cap(data.nama, 200),
        cap(data.email, 200),
        cap(data.whatsapp, 60),
        cap(data.kota, 120),
        cap(data.judul, 300),
        cap(data.kategori, 120),
        cap(data.halaman, 20),
        cap(data.sinopsis, 8000),
        fileLink,
        STATUS_OPTIONS[0] // "Baru"
      ];

      var rowIndex = sheet.getLastRow() + 1;
      sheet.getRange(rowIndex, 1, 1, row.length).setValues([row]);
      styleRow(sheet, rowIndex);

      if (CONFIG.NOTIFY_EMAIL) {
        notifyAdmin(data, fileLink);
      }
    } finally {
      lock.releaseLock();
    }

    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  }
}

function doGet() {
  return json({ ok: true, service: 'Penerbit Quran — Pengajuan Naskah', status: 'live' });
}

// ───────────────────────────── HELPERS ─────────────────────────────

function json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function str(v) {
  return v == null ? '' : String(v);
}

// Potong string ke panjang maksimum (hindari sel raksasa dari payload jahat)
function cap(v, max) {
  var s = str(v).trim();
  return s.length > max ? s.substring(0, max) : s;
}

// Validasi minimal field wajib. Return pesan error, atau '' kalau valid.
function validate(data) {
  var nama = str(data.nama).trim();
  var email = str(data.email).trim();
  var judul = str(data.judul).trim();
  if (!nama || !email || !judul) {
    return 'Nama, email, dan judul wajib diisi.';
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return 'Format email tidak valid.';
  }
  return '';
}

function getSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(CONFIG.SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(CONFIG.SHEET_NAME);
    setupSheet();
    sheet = ss.getSheetByName(CONFIG.SHEET_NAME);
  }
  return sheet;
}

/**
 * Simpan file base64 ke folder Drive, kembalikan link yang bisa dibagikan.
 * data: "data:<mime>;base64,xxxx" ATAU "xxxx" (base64 murni).
 */
function saveToDrive(dataUrl, fileName, mime) {
  var base64 = dataUrl;
  var detectedMime = mime || 'application/octet-stream';

  var comma = String(dataUrl).indexOf(',');
  if (String(dataUrl).indexOf('base64,') !== -1 && comma !== -1) {
    var header = dataUrl.substring(0, comma);
    base64 = dataUrl.substring(comma + 1);
    var m = header.match(/data:([^;]+);/);
    if (m) detectedMime = m[1];
  }

  var bytes = Utilities.base64Decode(base64);
  if (bytes.length > CONFIG.MAX_FILE_BYTES) {
    throw new Error('File terlalu besar (maks ' + Math.round(CONFIG.MAX_FILE_BYTES / 1048576) + 'MB). Kirim via email.');
  }

  var blob = Utilities.newBlob(bytes, detectedMime, fileName);

  var folder = getFolder();
  var file = folder.createFile(blob);
  // Tidak di-share publik: file dimiliki akun admin (Execute as: Me).
  // Naskah belum terbit = rahasia, jangan ANYONE_WITH_LINK.
  return file.getUrl();
}

function getFolder() {
  var it = DriveApp.getFoldersByName(CONFIG.DRIVE_FOLDER_NAME);
  if (it.hasNext()) return it.next();
  return DriveApp.createFolder(CONFIG.DRIVE_FOLDER_NAME);
}

function notifyAdmin(data, fileLink) {
  var subject = 'Pengajuan Naskah Baru: ' + str(data.judul);
  var body =
    'Pengajuan naskah baru telah masuk:\n\n' +
    'Nama     : ' + str(data.nama) + '\n' +
    'Email    : ' + str(data.email) + '\n' +
    'WhatsApp : ' + str(data.whatsapp) + '\n' +
    'Kota     : ' + str(data.kota) + '\n' +
    'Judul    : ' + str(data.judul) + '\n' +
    'Kategori : ' + str(data.kategori) + '\n' +
    'Halaman  : ' + str(data.halaman) + '\n' +
    'Sinopsis :\n' + str(data.sinopsis) + '\n\n' +
    'Link Naskah: ' + (fileLink || '(via email)') + '\n';
  MailApp.sendEmail(CONFIG.ADMIN_EMAIL, subject, body);
}

// ───────────────────────── STYLING SPREADSHEET ─────────────────────────

/**
 * Jalankan sekali untuk membuat & merapikan sheet (header bertema, frozen,
 * dropdown status, lebar kolom). Aman dijalankan ulang (idempotent).
 */
function setupSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(CONFIG.SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(CONFIG.SHEET_NAME);

  // Header
  var headerRange = sheet.getRange(1, 1, 1, HEADERS.length);
  headerRange.setValues([HEADERS]);
  headerRange
    .setBackground(COLOR.emerald)
    .setFontColor(COLOR.white)
    .setFontWeight('bold')
    .setFontSize(11)
    .setVerticalAlignment('middle')
    .setHorizontalAlignment('left');
  sheet.setRowHeight(1, 38);
  sheet.setFrozenRows(1);

  // Lebar kolom
  var widths = [150, 150, 200, 130, 120, 220, 160, 110, 320, 220, 110];
  for (var i = 0; i < widths.length; i++) {
    sheet.setColumnWidth(i + 1, widths[i]);
  }

  // Dropdown Status (kolom 11) untuk 1000 baris
  var statusCol = HEADERS.indexOf('Status') + 1;
  var rule = SpreadsheetApp.newDataValidation()
    .requireValueInList(STATUS_OPTIONS, true)
    .setAllowInvalid(false)
    .build();
  sheet.getRange(2, statusCol, 1000, 1).setDataValidation(rule);

  // Banding (zebra) tema emerald
  var dataRange = sheet.getRange(1, 1, Math.max(sheet.getMaxRows(), 2), HEADERS.length);
  var existing = sheet.getBandings();
  for (var b = 0; b < existing.length; b++) existing[b].remove();
  dataRange.applyRowBanding(SpreadsheetApp.BandingTheme.GREEN, true, false);

  // Sinopsis wrap
  var sinopsisCol = HEADERS.indexOf('Sinopsis') + 1;
  sheet.getRange(2, sinopsisCol, 1000, 1).setWrap(true);

  SpreadsheetApp.flush();
}

/**
 * Rapikan baris tertentu yang baru ditambah: alignment, wrap, dropdown status, warna.
 * Menerima rowIndex eksplisit agar aman terhadap submit bersamaan (tidak pakai getLastRow).
 */
function styleRow(sheet, rowIndex) {
  if (rowIndex < 2) return;

  sheet.getRange(rowIndex, 1, 1, HEADERS.length)
    .setVerticalAlignment('top')
    .setFontSize(10);

  // Format timestamp
  sheet.getRange(rowIndex, 1).setNumberFormat('dd/mm/yyyy hh:mm');

  // Wrap sinopsis
  var sinopsisCol = HEADERS.indexOf('Sinopsis') + 1;
  sheet.getRange(rowIndex, sinopsisCol).setWrap(true);

  // Status: pasang dropdown + warna (per baris, agar tetap berlaku di luar 1000 baris awal)
  var statusCol = HEADERS.indexOf('Status') + 1;
  var statusCell = sheet.getRange(rowIndex, statusCol);
  var rule = SpreadsheetApp.newDataValidation()
    .requireValueInList(STATUS_OPTIONS, true)
    .setAllowInvalid(false)
    .build();
  statusCell.setDataValidation(rule);
  statusCell
    .setBackground(COLOR.gold)
    .setFontColor(COLOR.white)
    .setHorizontalAlignment('center')
    .setFontWeight('bold');
}
