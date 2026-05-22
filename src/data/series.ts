export interface SeriesBook {
  t: string;
  bg: string;
  ic: string;
  al: string;
  seri?: string;
}

export interface Series {
  key: number;
  name: string;
  desc: string;
  books: SeriesBook[];
}

export const series: Series[] = [
  {
    key: 0,
    name: "Seri Kisah Para Nabi",
    desc: "Satu seri, 25 kisah Nabi yang menakjubkan. Dirancang premium untuk anak usia 3–6 tahun dengan ilustrasi berkualitas internasional dan narasi penuh kasih sayang.",
    books: [
      { t: "Aku Cinta Nabi Muhammad ﷺ", bg: "#4A3520", ic: "☀️", al: "ﷺ" },
      { t: "Aku Cinta Nabi Ibrahim ﷺ", bg: "#6b4520", ic: "\u{1F525}", al: "عليه السلام" },
      { t: "Aku Cinta Nabi Musa ﷺ", bg: "#1a4a3a", ic: "\u{1F30A}", al: "عليه السلام" },
      { t: "Aku Cinta Nabi Yusuf ﷺ", bg: "#3a2a60", ic: "⭐", al: "عليه السلام" },
      { t: "Aku Cinta Nabi Yunus ﷺ", bg: "#1a3a5a", ic: "\u{1F433}", al: "عليه السلام" },
    ],
  },
  {
    key: 1,
    name: "Seri Akhlak Mulia",
    desc: "Seri tentang nilai-nilai akhlak Islam: jujur, sabar, dermawan, bersih — dikemas dalam cerita anak yang menggemaskan.",
    books: [
      { t: "Akhlak Mulia: Jujur", bg: "#2E6B4A", ic: "\u{1F338}", al: "" },
      { t: "Akhlak Mulia: Sabar", bg: "#3a4a1a", ic: "\u{1F33F}", al: "" },
      { t: "Akhlak Mulia: Dermawan", bg: "#4a2a3a", ic: "\u{1F49B}", al: "" },
      { t: "Akhlak Mulia: Bersih", bg: "#1a3a4a", ic: "✨", al: "" },
    ],
  },
  {
    key: 2,
    name: "Seri Ibadah Si Kecil",
    desc: "Sholat, puasa, sedekah, doa — dijelaskan dengan bahasa anak 3–6 tahun yang hangat, visual premium, dan sangat menyenangkan.",
    books: [
      { t: "Sholat Si Kecil", bg: "#1a4a2e", ic: "\u{1F54C}", al: "" },
      { t: "Puasa Si Kecil", bg: "#2a1a4a", ic: "\u{1F319}", al: "" },
      { t: "Sedekah Si Kecil", bg: "#4a2a00", ic: "\u{1F49B}", al: "" },
      { t: "Doa Si Kecil", bg: "#0a2a3a", ic: "\u{1F932}", al: "" },
    ],
  },
  {
    key: 3,
    name: "Seri Sahabat Nabi",
    desc: "Kisah inspiratif Abu Bakar, Umar, Utsman, Ali, dan sahabat-sahabat mulia lainnya — teladan hidup terbaik untuk generasi kecil.",
    books: [
      { t: "Abu Bakar As-Shiddiq RA", bg: "#4a2a0a", ic: "\u{1F319}", al: "رضي الله عنه" },
      { t: "Umar bin Khattab RA", bg: "#2a3a0a", ic: "⚔️", al: "رضي الله عنه" },
      { t: "Utsman bin Affan RA", bg: "#1a1a3a", ic: "\u{1F4DC}", al: "رضي الله عنه" },
      { t: "Ali bin Abi Thalib RA", bg: "#0a3a1a", ic: "\u{1F33F}", al: "رضي الله عنه" },
    ],
  },
];
