import type { Book } from './books';

const CAT = "Eksperimen dan cerita anak";

const eksperimenSyn = "Buku edukatif, activity book, sekaligus buku interaksi orang tua dan anak berukuran A4 untuk anak usia 5–14 tahun (TK, SD, SMP dan sederajat). Total 70 halaman: 2 halaman cover, 30 halaman isi, 30 halaman notebook, dan 8 halaman pendukung. Buku ini menjadi salah satu media untuk belajar melalui praktik, dilengkapi catatan di tiap halaman eksperimen agar anak dapat menuliskan pengalamannya serta evaluasi untuk orang tua. Isinya berupa eksperimen yang menjawab pertanyaan acak anak di fase penasarannya, sehingga menjadi bahan komunikasi dan interaksi orang tua dan anak sekaligus quality time bagi keluarga. Dilengkapi ilustrasi sederhana, buku ini menjadi bahan stimulasi pemikiran, praktikal, serta teori untuk anak.";

const eksperimenJilid = [1, 2, 3, 4].map((jilid, i): Book => ({
  id: 15 + i,
  t: `30 Pertanyaan dan Eksperimen Untuk Orang Tua dan Anak Jilid ${jilid}`,
  a: "Penerbit Quran",
  cat: CAT,
  y: 2026,
  p: 70,
  badge: "",
  bg: "#1a4a5c",
  ic: "\u{1F52C}",
  age: "5–14 tahun",
  cover: `/covers/Eksperimen_dan_cerita_anak/EKS_JILID_${jilid}.webp`,
  syn: eksperimenSyn,
}));

export const eksperimenDanCeritaAnak: Book[] = [
  ...eksperimenJilid,
  {
    id: 19,
    t: "Arka si Hiu",
    a: "Penerbit Quran",
    cat: CAT,
    y: 2026,
    p: 32,
    badge: "",
    bg: "#1a3a5a",
    ic: "\u{1F988}",
    age: "3–10 tahun",
    cover: "/covers/Eksperimen_dan_cerita_anak/CA_ARKA_SI_HIU.webp",
    syn: "Buku edukasi dan cerita ringan berukuran 20x20 cm untuk orang tua dan anak usia 3–10 tahun. Total 32 halaman: 26 halaman isi dan 6 halaman pendukung. Merupakan buku pengenalan hewan dengan bacaan ringan, berkonsep 2 arah seakan-akan buku mengajak pembaca sebagai lawan bicara. Dilengkapi ilustrasi full color dengan artstyle yang soft, serta dwibahasa: bahasa Indonesia dan Inggris.",
  },
];
