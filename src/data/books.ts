export interface Book {
  id: number;
  t: string;
  a: string;
  cat: string;
  y: number;
  p: number;
  badge: string;
  bg: string;
  ic: string;
  syn: string;
  nk?: boolean;
  age?: string;
  seri?: string;
  al?: string;
  cover?: string;
  bio?: string;
}

export const books: Book[] = [
  { id: 1, t: "Game Off, Qur'an On: Rahasia Menghafal Al-Qur'an untuk Anak Kecanduan Gadget", a: "Sono Prabowo, S.Kep., M.M., M.H., M.Pd", cat: "Tahfidz", y: 2025, p: 107, badge: "Best Seller", bg: "#232343", ic: "\u{1F31F}", cover: "/covers/game-off-quran-on.webp", bio: "Sono Prabowo, S.Kep., M.M., M.H., M.Pd. merupakan pendiri Rumah Tahfidz Al-Fatihah yang berfokus pada pengembangan pendidikan Al-Qur'an dengan konsep \"Tahfidz yang Menyenangkan\". Beliau menyelesaikan pendidikan S1 Ilmu Keperawatan, tiga program magister (Manajemen, Hukum, dan Pendidikan Agama Islam), serta saat ini menempuh program doktor (S3) Ilmu Hukum di UNISSULA. Berawal dari perjuangan merintis dengan segala keterbatasan, beliau berhasil mengembangkan Yayasan Alfatihah beserta berbagai unit sosial, pendidikan, dan bisnis digital yang hingga kini terus memberikan manfaat bagi masyarakat.", syn: "Game Off, Quran On: Rahasia Menghafal Al-Qur'an untuk Anak Kecanduan Gadget membahas tantangan menghafal Al-Qur'an pada era digital, khususnya bagi anak yang mengalami ketergantungan terhadap gadget dan game online. Buku ini mengulas berbagai problematika internal dan eksternal penghafal Al-Qur'an serta menawarkan solusi melalui metode Al-Jawarih yang diterapkan di Rumah Tahfidz Al-Fatihah. Pembahasan meliputi persiapan menghafal, proses menghafal, strategi murajaah, sistem reward, pemanfaatan teknologi sebagai media pembelajaran, hingga manajemen santri dan wali santri. Dengan memadukan pengalaman praktik, pendekatan pendidikan, dan nilai-nilai Islam, buku ini menjadi referensi bagi orang tua, pendidik, pengelola rumah tahfidz, dan masyarakat dalam membimbing anak agar mencintai Al-Qur'an tanpa harus terjebak dalam dampak negatif perkembangan teknologi." },
  { id: 2, t: "Belajar Tajwid itu Mudah", a: "Ustadzah Maryam Sholihah", cat: "Al-Quran", y: 2024, p: 156, badge: "Terbaru", bg: "#1a3a5c", ic: "\u{1F4D6}", syn: "Metode belajar tajwid sistematis yang mudah dipahami anak dan pemula." },
  { id: 3, t: "Parenting Islami Era Digital", a: "Ustadzah Nurul Hidayah, M.Psi", cat: "Parenting", y: 2024, p: 228, badge: "Best Seller", bg: "#5a2d82", ic: "\u{1F468}‍\u{1F469}‍\u{1F467}‍\u{1F466}", syn: "Panduan mendidik anak di era digital sesuai nilai-nilai Islam dan membangun karakter muslim kuat." },
  { id: 4, t: "Sirah Nabawiyah Populer", a: "Dr. Hasan Al-Ayyubi, Ph.D", cat: "Sirah", y: 2024, p: 260, badge: "", bg: "#8b3a0f", ic: "☪️", syn: "Kisah perjalanan Nabi Muhammad ﷺ ditulis dengan pendekatan modern, mudah dipahami semua kalangan." },
  { id: 5, t: "Bangkit dengan Kekuatan Iman", a: "KH. Mahmud Zuhri, Lc.", cat: "Motivasi", y: 2024, p: 198, badge: "", bg: "#1a6b6b", ic: "\u{1F4AA}", syn: "Buku motivasi Islami mengajak pembaca menemukan semangat hidup melalui keimanan yang kuat." },
  { id: 6, t: "Fiqih Praktis Keluarga Muslim", a: "Ust. Ridwan Hakim, M.H.I", cat: "Fiqih", y: 2024, p: 218, badge: "", bg: "#2c3e50", ic: "\u{1F4FF}", syn: "Panduan praktis hukum fiqih kehidupan sehari-hari dengan bahasa mudah dipahami." },
  { id: 7, t: "Aku Cinta Nabi Muhammad ﷺ", a: "Tim NUURKIDS", cat: "NUURKIDS", y: 2025, p: 75, badge: "✦ Baru Terbit", bg: "#4A3520", ic: "☀️", syn: "Kenalkan si kecil dengan Nabi kesayangan kita. Buku premium full color 75 halaman, dirancang khusus untuk anak usia 3–6 tahun dengan ilustrasi berkualitas internasional dan narasi penuh kasih sayang.", nk: true, age: "3–6 tahun", seri: "Seri Kisah Para Nabi", al: "ﷺ" },
  { id: 8, t: "Aku Cinta Nabi Ibrahim ﷺ", a: "Tim NUURKIDS", cat: "NUURKIDS", y: 2025, p: 40, badge: "", bg: "#6b4520", ic: "\u{1F525}", syn: "Kisah ketaatan Nabi Ibrahim ﷺ yang mengajarkan keberanian dan keimanan. Narasi hangat penuh kasih sayang untuk si kecil.", nk: true, age: "3–6 tahun", seri: "Seri Kisah Para Nabi", al: "عليه السلام" },
  { id: 9, t: "Aku Cinta Nabi Musa ﷺ", a: "Tim NUURKIDS", cat: "NUURKIDS", y: 2025, p: 40, badge: "", bg: "#1a4a3a", ic: "\u{1F30A}", syn: "Kisah Nabi Musa penuh keberanian dan keajaiban, disampaikan dengan bahasa anak yang lembut dan penuh kasih.", nk: true, age: "3–6 tahun", seri: "Seri Kisah Para Nabi", al: "عليه السلام" },
  { id: 10, t: "Aku Cinta Nabi Yusuf ﷺ", a: "Tim NUURKIDS", cat: "NUURKIDS", y: 2025, p: 40, badge: "", bg: "#3a2a60", ic: "⭐", syn: "Kisah Nabi Yusuf mengajarkan kesabaran dan kemuliaan akhlak dengan narasi menyentuh hati si kecil.", nk: true, age: "3–6 tahun", seri: "Seri Kisah Para Nabi", al: "عليه السلام" },
  { id: 11, t: "Aku Cinta Nabi Yunus ﷺ", a: "Tim NUURKIDS", cat: "NUURKIDS", y: 2025, p: 40, badge: "", bg: "#1a3a5a", ic: "\u{1F433}", syn: "Kisah Nabi Yunus penuh hikmah tentang pertobatan dan kasih sayang Allah, untuk hati si kecil.", nk: true, age: "3–6 tahun", seri: "Seri Kisah Para Nabi", al: "عليه السلام" },
  { id: 12, t: "Akhlak Mulia: Jujur", a: "Tim NUURKIDS", cat: "NUURKIDS", y: 2025, p: 36, badge: "", bg: "#2E6B4A", ic: "\u{1F338}", syn: "Belajar tentang kejujuran melalui cerita yang lembut dan ilustrasi premium untuk anak usia dini.", nk: true, age: "3–6 tahun", seri: "Seri Akhlak Mulia", al: "" },
  { id: 13, t: "Sholat Si Kecil", a: "Tim NUURKIDS", cat: "NUURKIDS", y: 2025, p: 36, badge: "", bg: "#1a4a2e", ic: "\u{1F54C}", syn: "Panduan sholat dengan narasi hangat, membuat si kecil mencintai ibadah sejak dini.", nk: true, age: "3–6 tahun", seri: "Seri Ibadah Si Kecil", al: "" },
  { id: 14, t: "Abu Bakar As-Shiddiq RA", a: "Tim NUURKIDS", cat: "NUURKIDS", y: 2025, p: 40, badge: "", bg: "#4a2a0a", ic: "\u{1F319}", syn: "Mengenal sahabat Nabi paling mulia melalui kisah penuh keteladanan untuk anak.", nk: true, age: "3–6 tahun", seri: "Seri Sahabat Nabi", al: "رضي الله عنه" },
];

export function getBooksByCategory(cat: string): Book[] {
  if (cat === 'Semua') return books;
  return books.filter(b => b.cat === cat);
}

export function getNKBooks(): Book[] {
  return books.filter(b => b.nk);
}

export function getNonNKBooks(): Book[] {
  return books.filter(b => !b.nk);
}
