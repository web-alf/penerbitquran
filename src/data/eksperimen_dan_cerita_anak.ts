import type { Book } from './books';

const CAT = "Eksperimen dan cerita anak";
const EKS_SERI = "30 Pertanyaan dan Eksperimen";

const eksperimenSyn = "Buku edukatif, activity book, sekaligus buku interaksi orang tua dan anak berukuran A4 untuk anak usia 5–14 tahun (TK, SD, SMP dan sederajat). Total 70 halaman: 2 halaman cover, 30 halaman isi, 30 halaman notebook, dan 8 halaman pendukung. Buku ini menjadi salah satu media untuk belajar melalui praktik, dilengkapi catatan di tiap halaman eksperimen agar anak dapat menuliskan pengalamannya serta evaluasi untuk orang tua. Isinya berupa eksperimen yang menjawab pertanyaan acak anak di fase penasarannya, sehingga menjadi bahan komunikasi dan interaksi orang tua dan anak sekaligus quality time bagi keluarga. Dilengkapi ilustrasi sederhana, buku ini menjadi bahan stimulasi pemikiran, praktikal, serta teori untuk anak.";

const eksperimenJilid = [1, 2, 3, 4].map((jilid, i): Book => ({
  id: 15 + i,
  t: `30 Pertanyaan dan Eksperimen Untuk Orang Tua dan Anak Jilid ${jilid}`,
  slug: `30-pertanyaan-dan-eksperimen-jilid-${jilid}`,
  a: "Penerbit Quran",
  cat: CAT,
  y: 2026,
  p: 70,
  badge: "",
  bg: "#1a4a5c",
  ic: "\u{1F52C}",
  age: "5–14 tahun",
  seri: EKS_SERI,
  variant: { label: `Jilid ${jilid}`, detail: "1 buku" },
  price: 145000,
  priceOld: 199000,
  cover: `/covers/Eksperimen_dan_cerita_anak/EKS_JILID_${jilid}.webp`,
  syn: eksperimenSyn,
}));

const MENGENAL_HEWAN_DIR = "/covers/Eksperimen_dan_cerita_anak";

const mengenalHewanSyn = "Buku edukasi dan cerita ringan berukuran 20x20 cm untuk orang tua dan anak usia 3–10 tahun. Total 32 halaman: 26 halaman isi dan 6 halaman pendukung. Merupakan buku pengenalan hewan dengan bacaan ringan, berkonsep 2 arah seakan-akan buku mengajak pembaca sebagai lawan bicara. Dilengkapi ilustrasi full color dengan artstyle yang soft, serta dwibahasa: bahasa Indonesia dan Inggris.";

// [file cover, judul] — urutan sesuai nomor cover Seri Mengenal Hewan
const mengenalHewanList: [string, string][] = [
  ["01_Mio_si_Kucing", "Mio si Kucing"],
  ["02_Dagi_si_Anjing", "Dagi si Anjing"],
  ["03_Ello_si_Gajah", "Ello si Gajah"],
  ["04_Gani_si_Jerapah", "Gani si Jerapah"],
  ["05_Kobo_si_Kerbau", "Kobo si Kerbau"],
  ["06_Toni_si_Harimau", "Toni si Harimau"],
  ["07_Ben_si_Beruang", "Ben si Beruang"],
  ["08_Panpan_si_Panda", "Panpan si Panda"],
  ["09_Koko_si_Koala", "Koko si Koala"],
  ["10_Kiki_si_Kanguru", "Kiki si Kanguru"],
  ["11_Lomi_si_Lumba-Lumba", "Lomi si Lumba-Lumba"],
  ["12_Pao_si_Paus_Biru", "Pao si Paus Biru"],
  ["13_Arka_si_Hiu", "Arka si Hiu"],
  ["14_Okta_si_Gurita", "Okta si Gurita"],
  ["15_Hani_si_Burung_Hantu", "Hani si Burung Hantu"],
  ["16_Kura_si_Kura_Kura", "Kura si Kura-Kura"],
  ["17_Erlangga_si_Elang", "Erlangga si Elang"],
  ["18_Pingu_si_Penguin", "Pingu si Penguin"],
  ["19_Bibi_si_Lebah", "Bibi si Lebah"],
  ["20_Sammy_si_Semut", "Sammy si Semut"],
  ["21_Pipi_si_Kupu-Kupu", "Pipi si Kupu-Kupu"],
  ["22_Frogi_si_Katak", "Frogi si Katak"],
  ["23_Boni_si_Bunglon", "Boni si Bunglon"],
  ["24_Sisi_si_Ular", "Sisi si Ular"],
  ["25_Baya_si_Buaya", "Baya si Buaya"],
  ["26_Cleo_si_Kelinci", "Cleo si Kelinci"],
  ["27_Tupi_si_Tupai", "Tupi si Tupai"],
  ["28_Chiko_si_Ayam", "Chiko si Ayam"],
  ["29_Sani_si_Sapi", "Sani si Sapi"],
  ["30_Debi_si_Kuda", "Debi si Kuda"],
];

// Arka si Hiu sudah ada sejak awal (id 19); buku lain mulai id 23
let nextHewanId = 23;
const mengenalHewan = mengenalHewanList.map(([file, t]): Book => ({
  id: t === "Arka si Hiu" ? 19 : nextHewanId++,
  t,
  a: "Muhammad Avicena Wicaksana & Raden Muhammad Syaiful Asyam Ramadhan",
  cat: CAT,
  y: 2026,
  p: 32,
  badge: "",
  bg: "#1a3a5a",
  ic: "\u{1F43E}",
  age: "3–10 tahun",
  seri: "Seri Mengenal Hewan",
  price: 99000,
  priceOld: 129000,
  cover: `${MENGENAL_HEWAN_DIR}/${file}.webp`,
  syn: mengenalHewanSyn,
}));

export const eksperimenDanCeritaAnak: Book[] = [
  ...eksperimenJilid,
  {
    id: 22,
    t: "Paket Cerdas Lengkap: 30 Pertanyaan dan Eksperimen Untuk Orang Tua dan Anak Jilid 1–4",
    slug: "30-pertanyaan-dan-eksperimen-paket-cerdas-lengkap",
    a: "Penerbit Quran",
    cat: CAT,
    y: 2026,
    p: 280,
    badge: "",
    bg: "#1a4a5c",
    ic: "\u{1F52C}",
    age: "5–14 tahun",
    seri: EKS_SERI,
    variant: { label: "Paket Cerdas Lengkap", detail: "4 buku · Jilid 1, 2, 3 & 4" },
    price: 390000,
    priceOld: 796000,
    cover: "/covers/Eksperimen_dan_cerita_anak/paket_cerdas_lengkap.webp",
    syn: `Paket lengkap berisi 4 buku: Jilid 1, 2, 3, dan 4. ${eksperimenSyn}`,
  },
  ...mengenalHewan,
];
