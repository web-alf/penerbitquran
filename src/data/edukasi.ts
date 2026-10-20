import type { Book } from './books';

const CAT = "Edukasi";

const sonoPrabowoBio = "Sono Prabowo, S.Kep., M.M., M.H., M.Pd. merupakan pendiri Rumah Tahfidz Al-Fatihah yang berfokus pada pengembangan pendidikan Al-Qur'an dengan konsep \"Tahfidz yang Menyenangkan\". Beliau menyelesaikan pendidikan S1 Ilmu Keperawatan, tiga program magister (Manajemen, Hukum, dan Pendidikan Agama Islam), serta saat ini menempuh program doktor (S3) Ilmu Hukum di UNISSULA. Berawal dari perjuangan merintis dengan segala keterbatasan, beliau berhasil mengembangkan Yayasan Alfatihah beserta berbagai unit sosial, pendidikan, dan bisnis digital yang hingga kini terus memberikan manfaat bagi masyarakat.";

export const edukasi: Book[] = [
  {
    id: 20,
    t: "Step by Step Membesarkan Yayasan",
    a: "Sono Prabowo, S.Kep., M.M., M.H., M.Pd",
    cat: CAT,
    y: 2026,
    p: 263,
    badge: "",
    bg: "#1a4a3a",
    ic: "\u{1F3DB}️",
    cover: "/covers/Edukasi/yayasan.webp",
    bio: sonoPrabowoBio,
    syn: "Ada banyak yayasan di Indonesia. Namun, yang terdengar namanya hanya beberapa saja. Padahal, di balik setiap yayasan, ada niat baik dan cita-cita untuk menghadirkan manfaat bagi lebih banyak orang. Lantas, mengapa tidak semuanya bisa berkembang sebagaimana yang diharapkan? Membesarkan yayasan memang bukan perkara mudah. Ada banyak hal yang harus dipikirkan, mulai dari keuangan yang belum stabil, SDM yang seadanya, aset tidak terurus dengan baik, donatur yang perlu dijaga kepercayaannya, publikasi tidak ada, sampai program-program yang belum banyak dikenal orang. Semua itu tentu tidak bisa diselesaikan hanya dengan bermodal semangat dan kesabaran. Perlu ada strategi dan langkah yang tepat agar yayasan bisa terus berkembang. Melalui buku Step by Step Membesarkan Yayasan, Anda akan diajak menelusuri enam langkah penting dalam proses membesarkan yayasan, lengkap dengan berbagai persoalan yang kerap dihadapi dan pengalaman nyata yang bisa dijadikan pelajaran. Jadi, kalau ingin yayasan terus berkembang dan manfaatnya menjangkau lebih banyak orang, dari mana harus memulai, dan apa saja yang perlu dibenahi? Mari bertumbuh selangkah demi selangkah.",
  },
  {
    id: 21,
    t: "Telaah Poligami: Analisis Hukum, Agama dan Sosial",
    a: "Sono Prabowo, S.Kep., M.M., M.H., M.Pd",
    cat: CAT,
    y: 2026,
    p: 301,
    badge: "",
    bg: "#111111",
    ic: "⚖️",
    cover: "/covers/Edukasi/poligami.webp",
    bio: sonoPrabowoBio,
    syn: "Poligami, sebuah kata yang mampu menggemparkan dunia dengan pro dan kontranya. Poligami bukan hal baru dalam pernikahan dan sudah dipraktikkan sejak sebelum kehadiran Islam. Sebelum Islam hadir, poligami sudah diterima secara luas oleh umat terdahulu, khususnya oleh pemeluk agama-agama sebelum Islam. Beberapa agama mengizinkan poligami dengan jumlah istri yang tanpa batas, sementara yang lain menetapkan batasan atau syarat tertentu. Secara keseluruhan, walaupun poligami dibolehkan dalam beberapa agama dan budaya, setiap agama memiliki alasan dan tujuan yang berbeda terkait praktik ini. Beberapa agama bahkan mengubah sikap mereka terhadap poligami sesuai dengan perkembangan sosial dan hukum modern, yang menuntut adanya kesetaraan gender dan keadilan dalam pernikahan.",
  },
];
