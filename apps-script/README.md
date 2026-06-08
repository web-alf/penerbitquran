# Apps Script — Formulir Pengajuan Naskah → Google Sheet

Form di `/penulis` mengirim data langsung ke Google Apps Script Web App, yang menyimpan
ke spreadsheet (dan opsional upload file ke Drive). Karena situs ini statis (Cloudflare,
tanpa server), tidak ada backend kita sendiri — Apps Script-lah backend-nya.

## Langkah Deploy

1. **Buat Google Sheet baru** (di akun `penerbitquranindonesia@gmail.com` agar email
   notifikasi & Drive konsisten).

2. **Buka editor script:** menu **Extensions ▸ Apps Script**.

3. **Paste kode:** hapus isi `Code.gs` bawaan, paste seluruh isi file `Code.gs` di folder
   ini. Klik **Save** (ikon disket).

4. **Inisialisasi sheet:** di dropdown fungsi (atas), pilih **`setupSheet`** lalu klik
   **Run**. Saat pertama kali, Google minta otorisasi → **Review permissions** → pilih akun
   → **Advanced ▸ Go to (unsafe)** → **Allow**. (Wajar untuk script milik sendiri.)
   Setelah selesai, tab "Pengajuan Naskah" akan rapi: header hijau, dropdown Status, dll.

5. **Deploy sebagai Web App:**
   - Klik **Deploy ▸ New deployment**.
   - Ikon gerigi ▸ pilih **Web app**.
   - **Description:** `Pengajuan Naskah v1` (bebas).
   - **Execute as:** **Me**.
   - **Who has access:** **Anyone**. ← penting, biar form publik bisa kirim.
   - Klik **Deploy** → salin **Web app URL** (berakhiran `/exec`).

6. **Masukkan URL ke website:**
   - Di root proyek, buat file `.env` (lihat `.env.example`):
     ```
     PUBLIC_SHEET_ENDPOINT="https://script.google.com/macros/s/XXXXXXXX/exec"
     ```
   - Build ulang: `bun run build`. (Variabel `PUBLIC_*` di-inline saat build.)

7. **Tes:** buka `/penulis`, isi form, submit. Baris baru muncul di sheet. Kalau lampirkan
   file ≤ 8 MB, ada link Drive di kolom "Link Naskah".

## Cek cepat

Buka URL `/exec` langsung di browser → harus muncul JSON:
`{"ok":true,"service":"Penerbit Quran — Pengajuan Naskah","status":"live"}`.

## Update kode nanti

Kalau `Code.gs` diubah, **Deploy ▸ Manage deployments ▸ (edit/pensil) ▸ Version: New ▸
Deploy**. URL `/exec` tetap sama, tidak perlu ganti `.env`.

## Konfigurasi (atas file `Code.gs`)

- `NOTIFY_EMAIL` — set `true` untuk kirim email ke admin tiap pengajuan masuk.
- `ADMIN_EMAIL` — tujuan email notifikasi.
- `DRIVE_FOLDER_NAME` — nama folder Drive tempat naskah disimpan.
- `MAX_FILE_BYTES` — batas ukuran file (default 8 MB). Selaras dengan batas di sisi form.

## Catatan

- File > 8 MB tidak diupload; pengaju diarahkan kirim via email (catatan sudah ada di form).
- Honeypot: field tersembunyi `website`. Jika terisi (bot), baris tidak ditulis.
