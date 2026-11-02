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

const mengenalHewanIntro = (t: string) =>
  `Buku ${t} merupakan bagian dari Seri Mengenal Hewan yang disajikan dalam bahasa Indonesia dan Inggris. Dengan ilustrasi berwarna dan tokoh yang menyapa pembaca secara langsung, buku ini mengenalkan ciri tubuh serta kebiasaan hewan melalui bacaan ringan yang dapat dinikmati anak bersama orang tua.`;

// [file cover, judul, sinopsis] — urutan & sinopsis sesuai PDF Seri Mengenal Hewan
const mengenalHewanList: [string, string, string][] = [
  ["01_Mio_si_Kucing", "Mio si Kucing",
    "Meong! Mio mengajak anak mengenal dunia kucing lewat kumis yang peka, mata yang membantu melihat saat redup, dan bantalan kaki yang membuat langkahnya senyap. Ia juga bercerita tentang dengkuran, kebiasaan membersihkan bulu, serta gerakan ekor dan tubuhnya. Bersama Mio, anak belajar memahami perilaku kucing dan memperlakukannya dengan lembut."],
  ["02_Dagi_si_Anjing", "Dagi si Anjing",
    "Dagi, seekor Golden Retriever, mengajak anak bermain sambil mengenal hidungnya yang peka dan pendengarannya yang tajam. Melalui gerak ekor, gonggongan, dan bahasa tubuh, Dagi menunjukkan cara memahami perasaan anjing. Ia juga memperkenalkan kerabatnya yang berbeda ras serta menjelaskan mengapa anjing menjulurkan lidah saat kepanasan. Perkenalan yang mengajak anak lebih peka terhadap teman berkaki empat."],
  ["03_Ello_si_Gajah", "Ello si Gajah",
    "Ello, anak gajah sabana Afrika, mengajak anak berjalan bersama kawanan keluarganya. Belalainya dapat mengambil daun, menampung air, dan menyemprotkan air saat mandi, sementara telinganya membantu menyejukkan tubuh. Ello juga mengenalkan pemimpin kawanan dan cara gajah saling memanggil lewat suara rendah. Di tengah perkenalan itu, anak melihat bagaimana keluarga gajah saling menjaga dan menenangkan."],
  ["04_Gani_si_Jerapah", "Gani si Jerapah",
    "Gani mengajak anak melihat dunia dari tubuhnya yang jangkung. Lehernya panjang, tetapi jumlah ruas tulangnya sama dengan manusia! Gani memperkenalkan pola bintik yang khas, lidah yang membantunya mengambil daun akasia, serta cara minum dengan membuka kaki depan lebar-lebar. Kebiasaan tidur dan cara berkomunikasinya melengkapi perkenalan dengan hewan darat yang tinggi ini."],
  ["05_Kobo_si_Kerbau", "Kobo si Kerbau",
    "Ikuti Kobo menyusuri sawah dan membantu Pak Tani menggemburkan tanah. Kobo menjelaskan bagaimana kuku belahnya membantunya melangkah di lumpur dan mengapa berkubang membuat tubuhnya lebih sejuk. Anak juga diajak mengenal kebiasaan memamah biak serta burung kuntul yang mengikuti langkahnya. Hari Kobo ditutup dengan perjalanan pulang bersama sahabat kecilnya di pematang sawah."],
  ["06_Toni_si_Harimau", "Toni si Harimau",
    "Toni masih kecil dan tinggal bersama ibunya sambil belajar menjelajahi hutan. Ia mengajak anak mengenal loreng yang khas, kemampuan berenang, dan bantalan kaki yang meredam langkahnya. Kumis serta penglihatan saat redup membantunya mengamati sekitar. Melalui cerita Toni, anak juga mengenal cara harimau menandai wilayah dan sapaan lembut antara anak harimau dengan induknya."],
  ["07_Ben_si_Beruang", "Ben si Beruang",
    "Ben si beruang cokelat mengajak anak menjelajahi hutan pegunungan dan mengenal penciumannya yang tajam. Ketika musim gugur datang, Ben mulai makan lebih banyak untuk menyimpan cadangan lemak. Mengapa ia perlu bersiap? Bersama Ben, anak mengikuti kisah hibernasi saat musim dingin, cara tubuhnya menghemat tenaga, hingga saat ia keluar kembali menyambut musim semi."],
  ["08_Panpan_si_Panda", "Panpan si Panda",
    "Di hutan bambu pegunungan Tiongkok, Panpan mengajak anak mengenal kehidupan panda. Ia menunjukkan bulu hitam putihnya dan tulang pergelangan yang bekerja seperti jempol tambahan untuk memegang bambu. Mengapa Panpan menghabiskan banyak waktu untuk makan dan beristirahat? Dari kebiasaan mengunyah hingga memanjat pohon, ceritanya mengajak anak memahami kehidupan panda serta pentingnya menjaga hutan bambu."],
  ["09_Koko_si_Koala", "Koko si Koala",
    "Koko mengajak anak memanjat pohon eukaliptus di Australia dan mengenal kehidupannya yang tenang. Ia bercerita tentang masa kecil di kantung ibu, makanan berupa daun eukaliptus, serta cara tubuhnya mengolah daun tersebut. Karena makanannya memberi sedikit energi, Koko banyak beristirahat. Cakar pencengkeram dan kebiasaannya tidur di dahan melengkapi perkenalan dengan mamalia berkantung ini."],
  ["10_Kiki_si_Kanguru", "Kiki si Kanguru",
    "Boing! Kiki mengajak anak melompat di padang rumput Australia sambil mengenang masa kecilnya di kantung ibu. Anak diajak mengenal joey, bayi kanguru, lalu mencari tahu bagaimana kaki belakang bekerja seperti pegas. Kiki juga menunjukkan fungsi ekor sebagai penyeimbang dan penopang tubuh. Bersamanya, anak menemukan alasan kanguru lebih mudah bergerak maju daripada mundur."],
  ["11_Lomi_si_Lumba-Lumba", "Lomi si Lumba-Lumba",
    "Klik-klik! Lomi mengajak anak menyelam dan menemukan cara lumba-lumba mengenali lingkungan melalui pantulan suara. Ia memperkenalkan lubang sembur untuk bernapas, siulan khas untuk berkomunikasi, serta kehidupan bersama kawanan. Ada pula rahasia tidurnya: satu sisi otak beristirahat sementara sisi lain tetap terjaga. Kisah Lomi menunjukkan keunikan mamalia laut yang saling membantu ini."],
  ["12_Pao_si_Paus_Biru", "Pao si Paus Biru",
    "Pao mengajak anak menjelajahi samudra bersama tubuhnya yang sangat besar. Ia menunjukkan cara mengambil napas di permukaan dan menyaring kril kecil menggunakan balin di dalam mulutnya. Di lautan yang luas, Pao menyapa sesamanya lewat panggilan bernada rendah. Anak pun mengenal cara paus biru bergerak, mencari makan, dan hidup di laut yang perlu dijaga."],
  ["13_Arka_si_Hiu", "Arka si Hiu",
    "Arka mengajak anak menyelam untuk menemukan rahasia tubuh hiu. Kerangkanya tersusun dari tulang rawan yang lentur, giginya terus berganti, dan indra khusus di sekitar moncongnya dapat mendeteksi medan listrik yang sangat lemah. Arka juga memperkenalkan sisik kecil menyerupai gigi pada kulitnya. Melalui perkenalan ini, anak diajak memahami keunikan hiu dan perannya dalam keseimbangan kehidupan laut."],
  ["14_Okta_si_Gurita", "Okta si Gurita",
    "Okta punya tiga jantung, darah biru, dan delapan lengan yang penuh kejutan. Bersamanya, anak mengenal mangkuk pengisap yang dapat menggenggam sekaligus merasakan lingkungan. Saat perlu bersembunyi, Okta mengubah warna dan tekstur kulitnya, lalu menggunakan tinta untuk mengelabui pemangsa. Tubuhnya yang lentur membawanya menyelinap di antara celah batu dalam petualangan mengenal dasar laut."],
  ["15_Hani_si_Burung_Hantu", "Hani si Burung Hantu",
    "Saat malam tiba, petualangan Hani justru dimulai. Hani mengajak anak mengenal mata yang peka terhadap cahaya redup, leher yang dapat menoleh jauh, serta telinga yang membantu menemukan arah suara. Ia juga membuka rahasia sayapnya yang hampir tak terdengar saat terbang. Menjelang pagi, Hani kembali beristirahat setelah memperkenalkan kehidupannya dan perannya di alam."],
  ["16_Kura_si_Kura_Kura", "Kura si Kura-Kura",
    "Kura mengajak anak mengenal tempurung yang menyatu dengan tubuhnya dan mulut berparuh tanpa gigi. Sebagai kura-kura darat, ia juga memperkenalkan kerabatnya yang hidup di air tawar serta penyu di lautan. Kebiasaan berjemur, makanan, dan umur panjang menjadi bagian dari ceritanya. Bersama Kura, anak belajar mengenali keluarga kura-kura dan memperlakukan hewan dengan hati-hati."],
  ["17_Erlangga_si_Elang", "Erlangga si Elang",
    "Erlangga adalah elang muda yang masih belajar dari orang tuanya. Ia mengajak anak menjelajahi langit sambil mengenalkan penglihatan tajam, cakar pencengkeram, dan paruh melengkungnya. Bagaimana ia bisa melayang tanpa sering mengepakkan sayap? Erlangga menunjukkan peran arus udara hangat dalam penerbangannya. Ceritanya juga membawa pesan tentang menyayangi keluarga dan menggunakan kekuatan tanpa meremehkan makhluk lain."],
  ["18_Pingu_si_Penguin", "Pingu si Penguin",
    "Pingu, penguin kaisar muda dari Antarktika, mengajak anak mengenal kehidupan di antara es dan laut dingin. Ia bercerita tentang sayap untuk berenang, lapisan lemak, dan bulu yang menjaga tubuh tetap hangat. Pingu juga mengenang ayah yang menghangatkan telur di atas kaki serta ibu yang mencari makanan. Kisah keluarganya memperlihatkan kerja sama dan kasih sayang di tengah cuaca yang keras."],
  ["19_Bibi_si_Lebah", "Bibi si Lebah",
    "Bzzzt! Bibi si lebah pekerja mengajak anak memasuki kehidupan koloni yang sibuk. Ia mengenalkan pembagian tugas di sarang, pencarian nektar, serta tarian goyang untuk memberi tahu letak bunga. Anak mengikuti perjalanan nektar menjadi madu dan melihat bagaimana lebah membantu penyerbukan. Melalui keseharian Bibi, kerja sama menjadi bagian yang terasa dekat dalam kehidupan hewan kecil ini."],
  ["20_Sammy_si_Semut", "Sammy si Semut",
    "Tubuh Sammy kecil, tetapi kehidupannya penuh kegiatan. Ia mengajak anak menjelajahi koloni bawah tanah, mengenal tugas ratu, pekerja, dan prajurit, serta mengikuti jejak feromon menuju makanan. Saat beban terlalu berat, Sammy mengajak teman-temannya membantu. Ceritanya memperlihatkan bagaimana kerja sama memudahkan pekerjaan dan bagaimana terowongan semut membantu tanah menjadi lebih gembur."],
  ["21_Pipi_si_Kupu-Kupu", "Pipi si Kupu-Kupu",
    "Sebelum memiliki sayap, Pipi memulai hidup sebagai telur kecil di bawah daun. Ia mengajak anak mengikuti perubahannya menjadi ulat, kepompong, lalu kupu-kupu. Setelah terbang, Pipi menunjukkan cara mengenali rasa melalui kaki dan menyesap nektar dengan probosis yang dapat menggulung. Perjalanannya juga memperkenalkan peran kupu-kupu dalam membantu penyerbukan bunga."],
  ["22_Frogi_si_Katak", "Frogi si Katak",
    "Frogi tidak langsung lahir sebagai katak yang pandai melompat. Perjalanannya bermula dari telur di air, lalu menetas menjadi berudu berekor yang bernapas dengan insang. Anak mengikuti pertumbuhan kaki, penyusutan ekor, dan perubahan cara bernapasnya. Setelah menjadi katak, Frogi memperkenalkan kulit lembap, kaki pelompat, serta selaput kaki yang membantunya berenang."],
  ["23_Boni_si_Bunglon", "Boni si Bunglon",
    "Di antara dahan dan dedaunan, Boni si kameleon membuka rahasia tubuhnya. Ia menjelaskan perubahan warna kulit yang dipengaruhi suhu, cahaya, dan komunikasi, lalu menunjukkan kedua mata yang dapat mengamati arah berbeda. Saat serangga lewat, lidah panjangnya melesat cepat. Anak diajak mengenal kemampuan Boni menangkap makanan dan mencengkeram dahan dengan kaki berbentuk penjepit."],
  ["24_Sisi_si_Ular", "Sisi si Ular",
    "Sisi mengajak anak mencari tahu bagaimana ular bergerak tanpa kaki, mengenali aroma dengan lidah bercabang, dan berganti kulit saat tumbuh. Ia juga memperkenalkan mata bersisik bening yang tidak dapat berkedip. Melalui ceritanya, anak mengenal peran ular dalam alam sekaligus cara bersikap saat melihat ular liar: menjaga jarak dan memberi tahu orang dewasa."],
  ["25_Baya_si_Buaya", "Baya si Buaya",
    "Baya mengajak anak mengenal kehidupan buaya dari daratan hingga ke dalam air. Ia menjelaskan kebiasaan berjemur dan membuka mulut untuk mengatur suhu tubuh, lalu memperkenalkan perbedaan dirinya dengan aligator. Ekor kuat, mata dan hidung di atas kepala, serta kelopak mata bening membantunya beraktivitas di air. Baya juga bercerita tentang peran buaya dalam jaring-jaring makanan sungai."],
  ["26_Cleo_si_Kelinci", "Cleo si Kelinci",
    "Cleo mengajak anak mengenal telinga panjang yang membantu mendengar sekaligus melepaskan panas tubuh. Ia juga menunjukkan gigi depan yang terus tumbuh dan menjelaskan pentingnya makanan berserat, dengan wortel sebagai camilan sesekali. Saat gembira, Cleo melompat dan memutar tubuh dalam gerakan binky. Perkenalan ini dilengkapi cerita tentang kaki belakang yang kuat serta kebiasaannya merawat bulu."],
  ["27_Tupi_si_Tupai", "Tupi si Tupai",
    "Tupi mengajak anak melompat di antara dahan sambil mengenalkan ekor lebat yang menjaga keseimbangan dan menghangatkan tubuhnya. Ia menunjukkan gigi depan yang kuat untuk membuka biji-bijian, lalu bercerita tentang kebiasaannya mengubur persediaan makanan. Apa yang terjadi pada biji yang terlupakan? Cerita Tupi menghubungkan kebiasaan kecilnya dengan tumbuhnya pohon-pohon baru di hutan."],
  ["28_Chiko_si_Ayam", "Chiko si Ayam",
    "Di halaman peternakan, Chiko memperkenalkan hubungan ayam dengan dinosaurus, beragam suara untuk berkomunikasi, dan mata yang dapat menangkap cahaya ultraviolet. Anak juga diajak mengenal makanan ayam serta perjalanan telur yang dierami hingga menetas menjadi anak ayam. Sebelum berpamitan, Chiko menunjukkan kebiasaannya mandi debu untuk merawat bulu. Banyak kejutan hadir dari hewan yang akrab di sekitar kita."],
  ["29_Sani_si_Sapi", "Sani si Sapi",
    "Sani mengajak anak berkunjung ke padang rumput dan mengintip keunikan lambungnya yang memiliki empat ruang. Ia menceritakan proses memamah biak, ketika makanan kembali ke mulut untuk dikunyah lagi. Sani juga memperkenalkan penciumannya yang tajam, kebiasaan hidup berkelompok, serta perannya sebagai induk yang menyusui anak. Perkenalan ini membawa anak lebih dekat dengan kehidupan sapi."],
  ["30_Debi_si_Kuda", "Debi si Kuda",
    "Debi mengajak anak mengenal rahasia istirahat sambil berdiri dan alasan kuda tetap perlu berbaring untuk tidur lelap. Ia juga menunjukkan pandangan yang luas beserta titik butanya, lalu mengajak anak membaca perasaan melalui gerakan telinga. Dengan cerita tentang makanan dan kehidupan dalam kawanan, Debi memperkenalkan keseharian kuda yang saling menjaga."],
];

// Arka si Hiu sudah ada sejak awal (id 19); buku lain mulai id 23
let nextHewanId = 23;
const mengenalHewan = mengenalHewanList.map(([file, t, synopsis]): Book => ({
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
  syn: `${mengenalHewanIntro(t)} ${synopsis}`,
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
