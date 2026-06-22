/**
 * Basis data edukasi PermenPANRB No. 8 Tahun 2026
 * tentang Evaluasi Kinerja Pemerintah Digital (Pemdi)
 *
 * Seluruh data disarikan langsung dari naskah salinan PermenPANRB 8/2026
 * dan dibandingkan dengan PermenPANRB 59/2020 tentang Pemantauan dan
 * Evaluasi Sistem Pemerintahan Berbasis Elektronik (SPBE) yang dicabut.
 *
 * Disusun untuk kebutuhan edukasi ASN (bukan dokumen resmi).
 */

const meta = {
  baru: {
    nomor: "Nomor 8 Tahun 2026",
    judul: "Evaluasi Kinerja Pemerintah Digital",
    singkatan: "Pemdi",
    indeks: "Indeks Pemerintah Digital (Indeks Pemdi)",
    ditetapkan: "1 Juni 2026",
    diundangkan: "5 Juni 2026",
    beritaNegara: "Berita Negara RI Tahun 2026 Nomor 364",
    menteri: "Rini Widyantini",
    dasar: "Perpres No. 12 Tahun 2025 (RPJMN 2025-2029)",
    jumlahPasal: 12,
    aspek: 7,
    indikator: 20,
  },
  lama: {
    nomor: "Nomor 59 Tahun 2020",
    judul: "Pemantauan dan Evaluasi Sistem Pemerintahan Berbasis Elektronik",
    singkatan: "SPBE",
    indeks: "Indeks SPBE",
    beritaNegara: "Berita Negara RI Tahun 2020 Nomor 994",
    status: "Dicabut dan dinyatakan tidak berlaku oleh PermenPANRB 8/2026",
    domain: 4,
    aspek: 8,
    indikator: 47,
  },
};

/* ----------------------------------------------------------------------------
 * 7 ASPEK & 20 INDIKATOR (PermenPANRB 8/2026, Lampiran Tabel 1)
 * Bobot indikator dalam % dari total Indeks Pemdi (total = 100%).
 * -------------------------------------------------------------------------- */
const aspek = [
  {
    no: 1,
    nama: "Tata Kelola dan Manajemen",
    bobot: 10,
    icon: "🏛️",
    warna: "#2563eb",
    deskripsi:
      "Kerangka kerja yang memastikan terlaksananya perencanaan, pelaksanaan, dan pengendalian penerapan Pemdi secara terpadu, termasuk manajemen layanan digital yang berkualitas.",
    indikator: [
      {
        no: 1,
        nama: "Tingkat Kematangan Tata Kelola Pemdi",
        bobot: 5,
        ket: "Rencana Aksi Nasional Pemdi & Arsitektur Pemdi sebagai acuan transformasi tata kelola.",
      },
      {
        no: 2,
        nama: "Tingkat Kematangan Manajemen Layanan Digital Pemerintah",
        bobot: 5,
        ket: "Manajemen Risiko, Perubahan, Pengetahuan, Keberlangsungan, dan Relasi Pengguna.",
      },
    ],
  },
  {
    no: 2,
    nama: "Penyelenggara",
    bobot: 10,
    icon: "👥",
    warna: "#0891b2",
    deskripsi:
      "Kesiapan sumber daya manusia (kompetensi digital ASN) dan kolaborasi multipihak dalam menyelenggarakan Pemdi.",
    indikator: [
      {
        no: 3,
        nama: "Tingkat Kematangan Sumber Daya Manusia Pemdi",
        bobot: 5,
        ket: "Kompetensi Digital ASN: Kepemimpinan Digital, Kemahiran Digital, dan Literasi Digital — termasuk pemanfaatan AI & analisis data.",
      },
      {
        no: 4,
        nama: "Tingkat Kematangan Kolaborasi Pemdi",
        bobot: 5,
        ket: "Forum Koordinasi Pemdi & kolaborasi co-creation lintas instansi, akademisi, industri, komunitas hingga Dasbor Presiden.",
      },
    ],
  },
  {
    no: 3,
    nama: "Data",
    bobot: 15,
    icon: "🗄️",
    warna: "#7c3aed",
    deskripsi:
      "Kapabilitas pengelolaan data sesuai prinsip Satu Data Indonesia (SDI), informasi geospasial, statistik, serta pelindungan data pribadi.",
    indikator: [
      {
        no: 5,
        nama: "Tingkat Kematangan Tata Kelola Data",
        bobot: 5,
        ket: "Penerapan prinsip Satu Data Indonesia (SDI): data akurat, mutakhir, terintegrasi, dapat diakses.",
      },
      {
        no: 6,
        nama: "Tingkat Kematangan Penyelenggaraan Informasi Geospasial",
        bobot: 3,
        ket: "Berbagi pakai dan pemanfaatan data Informasi Geospasial (IG).",
      },
      {
        no: 7,
        nama: "Tingkat Kematangan Pembangunan Statistik",
        bobot: 3,
        ket: "Kapabilitas penyelenggaraan statistik sektoral yang berkualitas.",
      },
      {
        no: 8,
        nama: "Tingkat Kematangan Pelindungan Data Pribadi",
        bobot: 4,
        ket: "Penerapan pelindungan data pribadi sesuai UU PDP.",
      },
    ],
  },
  {
    no: 4,
    nama: "Keamanan Pemdi",
    bobot: 15,
    icon: "🛡️",
    warna: "#dc2626",
    deskripsi:
      "Audit keamanan, keamanan sistem, penerapan kriptografi, dan kapabilitas penanganan insiden siber.",
    indikator: [
      {
        no: 9,
        nama: "Tingkat Kematangan Pelaksanaan Audit Keamanan Pemdi dan Teknologi Pemdi",
        bobot: 4,
        ket: "Audit keamanan internal/eksternal beserta tindak lanjutnya.",
      },
      {
        no: 10,
        nama: "Tingkat Kematangan Keamanan Pemdi",
        bobot: 4,
        ket: "Tata kelola & manajemen keamanan, identifikasi Infrastruktur Informasi Vital.",
      },
      {
        no: 11,
        nama: "Tingkat Kematangan Penerapan Kriptografi untuk Keamanan Data",
        bobot: 3,
        ket: "Penerapan teknologi kriptografi melindungi data.",
      },
      {
        no: 12,
        nama: "Tingkat Kematangan Kapabilitas Penanganan Insiden Siber",
        bobot: 4,
        ket: "Kesiapsiagaan & penanganan insiden siber (CSIRT).",
      },
    ],
  },
  {
    no: 5,
    nama: "Teknologi Pemdi",
    bobot: 10,
    icon: "⚙️",
    warna: "#ea580c",
    deskripsi:
      "Kematangan aplikasi dan infrastruktur pemerintah digital sebagai fondasi layanan.",
    indikator: [
      {
        no: 13,
        nama: "Tingkat Kematangan Aplikasi Pemdi",
        bobot: 5,
        ket: "Aplikasi umum berbagi pakai & aplikasi khusus yang andal.",
      },
      {
        no: 14,
        nama: "Tingkat Kematangan Infrastruktur Pemdi",
        bobot: 5,
        ket: "Pusat Data Nasional, jaringan intra, dan komputasi awan pemerintah.",
      },
    ],
  },
  {
    no: 6,
    nama: "Keterpaduan Layanan Digital Pemerintah",
    bobot: 15,
    icon: "🔗",
    warna: "#16a34a",
    deskripsi:
      "Keterpaduan proses bisnis, integrasi aplikasi, portal layanan, dan interoperabilitas data lintas unit dan instansi.",
    indikator: [
      {
        no: 15,
        nama: "Keterpaduan Proses Bisnis Pemdi Lintas Unit dan Instansi",
        bobot: 4,
        ket: "Proses bisnis terpadu lintas unit dan instansi.",
      },
      {
        no: 16,
        nama: "Integrasi Aplikasi",
        bobot: 4,
        ket: "Aplikasi saling terintegrasi mengurangi silo.",
      },
      {
        no: 17,
        nama: "Portal Layanan Digital Pemerintah",
        bobot: 4,
        ket: "Portal layanan publik & administrasi pemerintahan yang terpadu.",
      },
      {
        no: 18,
        nama: "Interoperabilitas Data",
        bobot: 3,
        ket: "Pertukaran data antarsistem secara otomatis.",
      },
    ],
  },
  {
    no: 7,
    nama: "Kepuasan Pengguna Layanan Digital Pemerintah",
    bobot: 25,
    icon: "⭐",
    warna: "#ca8a04",
    deskripsi:
      "Aspek dengan bobot TERBESAR (25%) — pergeseran fokus ke dampak & pengalaman pengguna (Human Based Governance).",
    indikator: [
      {
        no: 19,
        nama: "Fasilitas Dukungan Pengguna Layanan Digital Pemerintah",
        bobot: 10,
        ket: "SOP layanan, kanal bantuan, sistem pemantauan & penanganan keluhan pengguna.",
      },
      {
        no: 20,
        nama: "Tingkat Pengelolaan Kepuasan Pengguna Layanan Digital Pemerintah",
        bobot: 15,
        ket: "Pengukuran & pengelolaan kepuasan pengguna (termasuk umpan balik publik & inklusivitas).",
      },
    ],
  },
];

/* ----------------------------------------------------------------------------
 * 5 TINGKAT KEMATANGAN (Predikat Indeks Pemdi - Tabel 4)
 * -------------------------------------------------------------------------- */
const tingkatKematangan = [
  {
    level: 1,
    nama: "Kurang",
    label: "Merintis / Initiate",
    min: 1.0,
    max: 1.5,
    rentang: "1,00 – < 1,50",
    warna: "#ef4444",
    deskripsi:
      "Implementasi Pemdi berada pada fase minimal dan/atau ad-hoc. Instansi masih menyusun perencanaan strategis yang terstruktur; pelaksanaan menyesuaikan kebutuhan organisasi.",
  },
  {
    level: 2,
    nama: "Cukup",
    label: "Membangun / Emerging",
    min: 1.5,
    max: 2.5,
    rentang: "1,50 – < 2,50",
    warna: "#f59e0b",
    deskripsi:
      "Pelaksanaan Pemdi sudah terencana melalui Rencana Aksi Pemdi, namun belum menyeluruh. Digitalisasi meningkatkan efisiensi di beberapa area, tetapi dampak ke layanan publik masih terbatas dan belum merata.",
  },
  {
    level: 3,
    nama: "Baik",
    label: "Berkembang / Developing",
    min: 2.5,
    max: 3.5,
    rentang: "2,50 – < 3,50",
    warna: "#eab308",
    deskripsi:
      "Pemdi dilaksanakan sistematis dan menyeluruh di setiap unit kerja dengan SOP baku. Integrasi sistem & data antar unit mulai diinisiasi sehingga alur kerja lebih lancar dan efisien.",
  },
  {
    level: 4,
    nama: "Sangat Baik",
    label: "Melembaga / Embedded",
    min: 3.5,
    max: 4.0,
    rentang: "3,50 – < 4,00",
    warna: "#22c55e",
    deskripsi:
      "Implementasi menyeluruh dengan reviu berkala. Terdapat kolaborasi & interoperabilitas internal maupun antarinstansi; data dikelola sebagai aset strategis dan berkontribusi pada program prioritas nasional.",
  },
  {
    level: 5,
    nama: "Memuaskan",
    label: "Unggul / Leading",
    min: 4.0,
    max: 5.0,
    rentang: "4,00 – 5,00",
    warna: "#14b8a6",
    deskripsi:
      "Instansi proaktif & berkelanjutan melakukan tindak lanjut perbaikan, diperkuat komitmen pimpinan terhadap inovasi. Layanan publik bersifat personal, humanis, dan prediktif dengan partisipasi pemangku kepentingan.",
  },
];

/* Predikat Indeks SPBE lama (PermenPANRB 59/2020) untuk perbandingan */
const predikatSPBE = [
  { nama: "Memuaskan", rentang: "4,2 – 5,0" },
  { nama: "Sangat Baik", rentang: "3,5 – < 4,2" },
  { nama: "Baik", rentang: "2,6 – < 3,5" },
  { nama: "Cukup", rentang: "1,8 – < 2,6" },
  { nama: "Kurang", rentang: "< 1,8" },
];

/* ----------------------------------------------------------------------------
 * PERBANDINGAN INTI: SPBE 2020 vs PEMDI 2026
 * -------------------------------------------------------------------------- */
const perbandingan = [
  {
    dimensi: "Terminologi & Paradigma",
    lama: "Sistem Pemerintahan Berbasis Elektronik (SPBE) — fokus pada sistem & proses elektronik.",
    baru: "Pemerintah Digital (Pemdi) — fokus pada keterpaduan hasil & dampak layanan bagi pengguna (Human Based Governance).",
    dampak: "tinggi",
  },
  {
    dimensi: "Nama Indeks",
    lama: "Indeks SPBE",
    baru: "Indeks Pemerintah Digital (Indeks Pemdi)",
    dampak: "sedang",
  },
  {
    dimensi: "Struktur Penilaian",
    lama: "4 Domain, 8 Aspek, 47 Indikator",
    baru: "7 Aspek, 20 Indikator (lebih ringkas & berbasis outcome)",
    dampak: "tinggi",
  },
  {
    dimensi: "Bobot Terbesar",
    lama: "Domain Layanan SPBE (orientasi ketersediaan layanan).",
    baru: "Aspek Kepuasan Pengguna Layanan Digital (25%) — orientasi pada pengalaman & dampak ke pengguna.",
    dampak: "tinggi",
  },
  {
    dimensi: "Dasar Hukum / Arah Kebijakan",
    lama: "Perpres 95/2018 tentang SPBE.",
    baru: "RPJMN 2025-2029 (Perpres 12/2025) — Pemdi sebagai pilar reformasi birokrasi.",
    dampak: "sedang",
  },
  {
    dimensi: "Pelaksana Penilaian",
    lama: "Tim Evaluator Eksternal & Internal.",
    baru: "Tim Asesor Internal & Tim Asesor Eksternal; dikoordinasikan Koordinator Pemdi dan dilaporkan melalui Deputi.",
    dampak: "sedang",
  },
  {
    dimensi: "Metode Penilaian",
    lama: "Evaluasi Dokumen, Wawancara, Observasi Lapangan, Penilaian Mandiri.",
    baru: "Penilaian Mandiri → Penilaian Dokumen → Penilaian Interviu → (Penilaian Visitasi bila perlu).",
    dampak: "rendah",
  },
  {
    dimensi: "Integrasi Data Lintas Lembaga",
    lama: "Belum mengikat indeks lembaga lain.",
    baru: "Sebagian kuesioner memakai indeks hasil evaluasi instansi pusat lain via interoperabilitas data (mis. SDI, keamanan, data pribadi).",
    dampak: "tinggi",
  },
  {
    dimensi: "Fokus Teknologi Baru",
    lama: "Aplikasi & infrastruktur SPBE.",
    baru: "Penekanan AI, analisis data, kriptografi, penanganan insiden siber, & dukungan Dasbor Presiden.",
    dampak: "tinggi",
  },
  {
    dimensi: "Penamaan Tingkat Kematangan",
    lama: "Tingkat 1–5 (Predikat: Kurang s.d. Memuaskan).",
    baru: "Initiate, Emerging, Developing, Embedded, Leading (Merintis/Membangun/Berkembang/Melembaga/Unggul).",
    dampak: "rendah",
  },
  {
    dimensi: "Hasil Akhir",
    lama: "Indeks SPBE instansi & nasional.",
    baru: "Indeks Pemdi + profil indeks Pemdi nasional, terhubung program prioritas & Dasbor Presiden.",
    dampak: "sedang",
  },
];

/* ----------------------------------------------------------------------------
 * PROSES EVALUASI (BAB III) + Metode penilaian
 * -------------------------------------------------------------------------- */
const proses = [
  {
    tahap: "1. Persiapan",
    icon: "🧭",
    deputi: [
      "Menyusun rencana & jadwal pelaksanaan Evaluasi Kinerja Pemdi",
      "Menyiapkan instrumen (kuesioner & aplikasi) serta bahan sosialisasi",
      "Bimbingan teknis & seleksi calon Tim Asesor Eksternal",
      "Sosialisasi/asistensi Pemdi kepada Instansi Pemerintah",
    ],
    instansi: [
      "Menyusun jadwal & instrumen penilaian internal",
      "Membentuk Tim Asesor Internal (Koordinator Pemdi, penanggung jawab, entri data, pelaksana unit)",
      "Mengikuti sosialisasi/asistensi dari Deputi",
      "Menyelenggarakan bimtek internal",
    ],
  },
  {
    tahap: "2. Pelaksanaan",
    icon: "⚡",
    deputi: [
      "Membagikan hasil Penilaian Mandiri ke Tim Asesor Eksternal",
      "Rekapitulasi Penilaian Dokumen & penjadwalan Interviu",
      "Reviu hasil Interviu & analisis kebutuhan Visitasi",
    ],
    instansi: [
      "Pelaksana mengumpulkan & menginput data dukung pada aplikasi",
      "Penanggung jawab memeriksa kelengkapan & keabsahan data",
      "Koordinator Pemdi mengirim hasil Penilaian Mandiri ke Deputi",
      "Mengikuti Penilaian Interviu & menyiapkan data perbaikan",
    ],
  },
  {
    tahap: "3. Pelaporan",
    icon: "📊",
    deputi: [
      "Menyusun laporan hasil (Indeks Pemdi, indeks aspek, nilai indikator, rekomendasi)",
      "Menyampaikan laporan kepada Instansi Pemerintah via aplikasi",
      "Menyusun Laporan Akhir & profil indeks Pemdi nasional",
    ],
    instansi: [
      "Menerima laporan hasil & rekomendasi perbaikan",
      "Menindaklanjuti rekomendasi untuk peningkatan kematangan Pemdi",
    ],
  },
];

const metodePenilaian = [
  {
    nama: "Penilaian Mandiri",
    oleh: "Tim Asesor Internal",
    tujuan: "Mengukur implementasi Pemdi secara internal instansi.",
  },
  {
    nama: "Penilaian Dokumen",
    oleh: "Tim Asesor Eksternal",
    tujuan: "Memverifikasi hasil Penilaian Mandiri.",
  },
  {
    nama: "Penilaian Interviu",
    oleh: "Tim Asesor Eksternal",
    tujuan: "Klarifikasi & proses sanggah atas hasil Penilaian Dokumen.",
  },
  {
    nama: "Penilaian Visitasi",
    oleh: "Tim Asesor Eksternal (didampingi Deputi)",
    tujuan: "Validasi lapangan bila diperlukan penilaian lebih lanjut.",
  },
];

/* ----------------------------------------------------------------------------
 * PEDOMAN TINDAK LANJUT — hal yang perlu disiapkan instansi
 * karena perbedaan dengan peraturan lama
 * -------------------------------------------------------------------------- */
const tindakLanjut = [
  {
    kategori: "Regulasi & Perencanaan",
    icon: "📜",
    items: [
      "Menyesuaikan target Indeks SPBE menjadi target Indeks Pemdi sebagai Indikator Kinerja Utama (IKU) — amanat Pasal 11.",
      "Memutakhirkan dokumen perencanaan & RKT agar selaras dengan Rencana Aksi Nasional Pemdi dan RPJMN 2025-2029.",
      "Menyusun/menyelaraskan Arsitektur Pemdi instansi dengan Arsitektur Pemdi nasional.",
      "Menyesuaikan seluruh terminologi 'SPBE' menjadi 'Pemdi' pada kebijakan internal.",
    ],
  },
  {
    kategori: "Kelembagaan & SDM",
    icon: "👥",
    items: [
      "Menetapkan Koordinator Pemdi (pejabat pimpinan tinggi pemimpin unit kesekretariatan).",
      "Membentuk Tim Asesor Internal lintas fungsi (perencanaan, ortala, TIK, keamanan, hukum, dll).",
      "Memetakan & meningkatkan Kompetensi Digital ASN (Kepemimpinan, Kemahiran, Literasi Digital).",
      "Menyiapkan kapasitas pemanfaatan AI & analisis data bagi ASN pengelola.",
    ],
  },
  {
    kategori: "Data",
    icon: "🗄️",
    items: [
      "Memperkuat penerapan Satu Data Indonesia (SDI): standar data, metadata, walidata.",
      "Menyiapkan tata kelola Informasi Geospasial & statistik sektoral.",
      "Menerapkan pelindungan data pribadi sesuai UU PDP.",
      "Menyiapkan kontribusi data untuk konsolidasi Dasbor Presiden.",
    ],
  },
  {
    kategori: "Keamanan Siber",
    icon: "🛡️",
    items: [
      "Melaksanakan audit keamanan Pemdi & teknologi beserta tindak lanjutnya.",
      "Menerapkan kriptografi untuk pelindungan data.",
      "Membangun kapabilitas penanganan insiden siber (CSIRT) & identifikasi Infrastruktur Informasi Vital.",
    ],
  },
  {
    kategori: "Keterpaduan & Teknologi",
    icon: "🔗",
    items: [
      "Mendorong integrasi aplikasi & interoperabilitas data lintas unit/instansi.",
      "Mengonsolidasikan layanan ke Portal Layanan Digital Pemerintah.",
      "Memanfaatkan aplikasi umum berbagi pakai & infrastruktur nasional (PDN, jaringan intra).",
    ],
  },
  {
    kategori: "Fokus Baru: Pengguna",
    icon: "⭐",
    items: [
      "Membangun Fasilitas Dukungan Pengguna (kanal bantuan, SOP, sistem keluhan).",
      "Mengukur & mengelola Kepuasan Pengguna secara berkala (bobot terbesar 25%).",
      "Menjamin inklusivitas layanan (kelompok rentan, gender) & menindaklanjuti umpan balik publik.",
    ],
  },
];

/* ----------------------------------------------------------------------------
 * KUIS EDUKASI
 * -------------------------------------------------------------------------- */
const kuis = [
  {
    q: "PermenPANRB No. 8 Tahun 2026 menggantikan peraturan apa?",
    opsi: [
      "PermenPANRB 59/2020 tentang Pemantauan & Evaluasi SPBE",
      "Perpres 95/2018 tentang SPBE",
      "UU 11/2008 tentang ITE",
      "PermenPANRB 5/2018",
    ],
    jawaban: 0,
    penjelasan:
      "Pasal 12 mencabut PermenPANRB 59/2020 tentang Pemantauan dan Evaluasi SPBE.",
  },
  {
    q: "Istilah baru yang menggantikan 'SPBE' adalah?",
    opsi: ["e-Government", "Pemerintah Digital (Pemdi)", "Smart Government", "Digital Service"],
    jawaban: 1,
    penjelasan:
      "Terminologi bergeser dari SPBE menjadi Pemerintah Digital (Pemdi) yang menekankan hasil & dampak bagi pengguna.",
  },
  {
    q: "Berapa jumlah aspek dan indikator pada Evaluasi Kinerja Pemdi?",
    opsi: ["4 aspek, 47 indikator", "8 aspek, 20 indikator", "7 aspek, 20 indikator", "5 aspek, 25 indikator"],
    jawaban: 2,
    penjelasan: "Indeks Pemdi disusun dari 7 aspek dan 20 indikator (lebih ringkas dari 47 indikator SPBE).",
  },
  {
    q: "Aspek dengan bobot TERBESAR dalam Indeks Pemdi adalah?",
    opsi: [
      "Keamanan Pemdi (15%)",
      "Data (15%)",
      "Kepuasan Pengguna Layanan Digital (25%)",
      "Tata Kelola dan Manajemen (10%)",
    ],
    jawaban: 2,
    penjelasan:
      "Aspek Kepuasan Pengguna berbobot 25% — menegaskan orientasi pada dampak & pengalaman pengguna (Human Based Governance).",
  },
  {
    q: "Predikat tertinggi pada Indeks Pemdi disebut?",
    opsi: ["Sangat Baik / Embedded", "Memuaskan / Unggul / Leading", "Baik / Developing", "Optimal"],
    jawaban: 1,
    penjelasan: "Rentang 4,00–5,00 berpredikat Memuaskan / Unggul / Leading.",
  },
  {
    q: "Urutan metode penilaian Evaluasi Kinerja Pemdi yang benar adalah?",
    opsi: [
      "Penilaian Dokumen → Mandiri → Visitasi",
      "Penilaian Mandiri → Dokumen → Interviu → (Visitasi bila perlu)",
      "Interviu → Visitasi → Mandiri",
      "Visitasi → Dokumen → Interviu",
    ],
    jawaban: 1,
    penjelasan:
      "Alur: Penilaian Mandiri (internal) → Penilaian Dokumen (verifikasi) → Penilaian Interviu (klarifikasi) → Penilaian Visitasi bila diperlukan.",
  },
  {
    q: "Siapa yang mengoordinasikan Penilaian Mandiri di instansi?",
    opsi: ["Menteri", "Deputi", "Koordinator Pemdi", "Tim Asesor Eksternal"],
    jawaban: 2,
    penjelasan:
      "Penilaian Mandiri dikoordinasikan oleh Koordinator Pemdi (pejabat pimpinan tinggi pemimpin unit kesekretariatan).",
  },
  {
    q: "Apa dasar arah kebijakan utama PermenPANRB 8/2026?",
    opsi: [
      "RPJMN 2025-2029 (Perpres 12/2025)",
      "Nawacita",
      "MP3EI",
      "Perpres 81/2010",
    ],
    jawaban: 0,
    penjelasan:
      "Perubahan instrumen evaluasi dari indeks SPBE menjadi indeks Pemdi mengacu RPJMN 2025-2029 (Perpres 12/2025).",
  },
];

/* ----------------------------------------------------------------------------
 * GLOSARIUM
 * -------------------------------------------------------------------------- */
const glosarium = [
  { istilah: "Pemdi", arti: "Pemerintah Digital — transformasi pemerintahan yang memanfaatkan data & teknologi digital untuk meningkatkan kualitas layanan." },
  { istilah: "Indeks Pemdi", arti: "Hasil Evaluasi Kinerja Pemdi yang merepresentasikan tingkat kematangan penerapan Pemdi (skala 1–5)." },
  { istilah: "Asesor", arti: "Seseorang yang melakukan penilaian atas penerapan Pemdi." },
  { istilah: "Tim Asesor Internal", arti: "Kelompok asesor dari ASN di lingkungan instansi yang melakukan Penilaian Mandiri." },
  { istilah: "Tim Asesor Eksternal", arti: "Kelompok asesor dari ASN, akademisi, dan/atau tenaga ahli yang ditetapkan Menteri." },
  { istilah: "Penilaian Mandiri", arti: "Penilaian penerapan Pemdi oleh Tim Asesor Internal." },
  { istilah: "Penilaian Visitasi", arti: "Penilaian melalui pengamatan langsung di lokus untuk validasi informasi." },
  { istilah: "Koordinator Pemdi", arti: "Pejabat pimpinan tinggi pemimpin unit kesekretariatan yang mengoordinasikan Penilaian Mandiri." },
  { istilah: "Deputi", arti: "Pejabat pimpinan tinggi madya di bidang transformasi digital pemerintah di Kementerian PANRB." },
  { istilah: "SDI", arti: "Satu Data Indonesia — kebijakan tata kelola data pemerintah agar akurat, mutakhir, terintegrasi, dan dapat diakses." },
  { istilah: "Human Based Governance", arti: "Orientasi pemerintahan digital yang berpusat pada manusia/pengguna." },
  { istilah: "Dasbor Presiden", arti: "Sarana konsolidasi data lintas instansi untuk mendukung pengambilan keputusan tingkat nasional." },
];

/* ----------------------------------------------------------------------------
 * TANGGAPAN KRITIS ASN — Pertanyaan kritis & saran membangun
 * atas PermenPANRB 8/2026. Disusun dari kacamata ASN yang berpikir kritis
 * untuk bahan diskusi/masukan konstruktif (bukan menolak peraturan).
 * -------------------------------------------------------------------------- */
const pertanyaanKritis = [
  {
    no: 1,
    kategori: "Transisi & Implementasi",
    q: "Pasal 11 tidak menetapkan batas waktu penyesuaian target Indeks SPBE menjadi Indeks Pemdi. Berapa lama masa transisi resmi, dan apa konsekuensinya bila instansi belum siap pada siklus penilaian pertama?",
    konteks: "Tanpa tenggat & skenario peralihan yang jelas, instansi rawan menafsirkan kesiapan secara berbeda-beda.",
  },
  {
    no: 2,
    kategori: "Metodologi",
    q: "Aspek Kepuasan Pengguna berbobot terbesar (25%). Instrumen baku apa yang dipakai mengukurnya agar objektif, dapat dibandingkan antarinstansi, dan tidak bias bagi instansi dengan jumlah pengguna kecil?",
    konteks: "Bobot dominan pada persepsi pengguna menuntut metodologi survei yang seragam & teruji.",
  },
  {
    no: 3,
    kategori: "Interoperabilitas",
    q: "Sebagian kuesioner memakai indeks hasil evaluasi instansi pusat lain (mis. SDI, keamanan). Bila data antarsistem belum interoperable, apakah nilai instansi dirugikan oleh kesiapan pihak lain yang di luar kendalinya?",
    konteks: "Ketergantungan nilai pada sistem lembaga lain berisiko menimbulkan ketidakadilan penilaian.",
  },
  {
    no: 4,
    kategori: "Kedalaman Penilaian",
    q: "Indikator dipangkas dari 47 (SPBE) menjadi 20 (Pemdi). Apakah penyederhanaan ini berisiko menghilangkan aspek teknis penting, dan bagaimana memastikan 20 indikator tetap merepresentasikan kematangan secara utuh?",
    konteks: "Ringkas itu baik, tetapi perlu dipastikan tidak mengorbankan validitas pengukuran.",
  },
  {
    no: 5,
    kategori: "Keadilan & Kapasitas",
    q: "Apakah indikator & kriteria yang sama diberlakukan untuk kementerian besar maupun pemerintah kabupaten/kota kecil dengan kapasitas fiskal & SDM terbatas? Bagaimana asas keadilan penilaian dijaga?",
    konteks: "Perlakuan seragam atas kapasitas yang timpang bisa melebarkan kesenjangan digital.",
  },
  {
    no: 6,
    kategori: "Anggaran",
    q: "Tindak lanjut (kriptografi, CSIRT, infrastruktur, kompetensi AI) berbiaya tinggi. Adakah skema pendanaan khusus (mis. DAK bidang digital) bagi daerah berfiskal terbatas agar target Indeks Pemdi realistis?",
    konteks: "Target tinggi tanpa dukungan anggaran berisiko hanya menjadi formalitas di atas kertas.",
  },
  {
    no: 7,
    kategori: "Anggaran & SDM",
    q: "Kompetensi Digital ASN dituntut hingga pemanfaatan AI & analisis data. Bagaimana strategi pemerataan kompetensi, khususnya bagi daerah 3T dan ASN nonteknis?",
    konteks: "Kesenjangan kompetensi digital antarwilayah masih lebar dan butuh afirmasi.",
  },
  {
    no: 8,
    kategori: "Objektivitas Asesor",
    q: "Tim Asesor Eksternal ditetapkan Menteri dan dapat melibatkan tenaga ahli. Bagaimana sertifikasi, kode etik, dan pencegahan konflik kepentingan asesor dijamin agar penilaian kredibel?",
    konteks: "Kualitas hasil sangat bergantung pada kapasitas & integritas asesor.",
  },
  {
    no: 9,
    kategori: "Validitas",
    q: "Penilaian Mandiri rawan over-claim. Apakah kapasitas Tim Asesor Eksternal memadai untuk memverifikasi seluruh lokus secara mendalam, atau verifikasi hanya bersifat administratif?",
    konteks: "Verifikasi yang dangkal membuat indeks tidak mencerminkan kondisi nyata.",
  },
  {
    no: 10,
    kategori: "Beban Pelaporan",
    q: "Bagaimana keterkaitan Evaluasi Kinerja Pemdi dengan evaluasi lain (Reformasi Birokrasi, SAKIP, indeks pencegahan korupsi)? Adakah risiko tumpang tindih & beban pelaporan ganda bagi instansi?",
    konteks: "Instansi sudah menanggung banyak evaluasi; efisiensi data perlu dijaga.",
  },
  {
    no: 11,
    kategori: "Jadwal & Frekuensi",
    q: "Peraturan tidak merinci periodisitas evaluasi. Seberapa sering Evaluasi Kinerja Pemdi dilakukan, dan kapan jadwal nasional siklus pertama ditetapkan?",
    konteks: "Kepastian jadwal penting untuk perencanaan & penganggaran instansi.",
  },
  {
    no: 12,
    kategori: "Insentif & Konsekuensi",
    q: "Apa konsekuensi konkret dari nilai indeks — baik penghargaan maupun pembinaan? Tanpa insentif/disinsentif yang jelas, bagaimana peraturan mendorong perubahan nyata, bukan sekadar kepatuhan administratif?",
    konteks: "Evaluasi tanpa tindak lanjut kebijakan cenderung kehilangan daya ungkit.",
  },
  {
    no: 13,
    kategori: "Keamanan & Privasi",
    q: "Konsolidasi data lintas instansi ke Dasbor Presiden — bagaimana tata kelola keamanan dan pelindungan data pribadinya dipastikan patuh pada UU PDP?",
    konteks: "Sentralisasi data meningkatkan nilai sekaligus risiko keamanannya.",
  },
  {
    no: 14,
    kategori: "Definisi Operasional",
    q: "Istilah seperti 'Layanan Digital prioritas/tematik', 'tingkat mikro', dan 'reviu menyeluruh' perlu kriteria terukur. Bagaimana memastikan seluruh asesor menafsirkannya secara seragam?",
    konteks: "Ambiguitas definisi berpotensi menimbulkan disparitas penilaian antar-asesor.",
  },
];

const saranMembangun = [
  {
    no: 1,
    kategori: "Roadmap",
    saran: "Terbitkan roadmap nasional dengan masa transisi & milestone tahunan yang jelas, termasuk skenario pendampingan bagi instansi yang belum siap.",
    manfaat: "Memberi kepastian arah dan menyelaraskan ekspektasi seluruh instansi.",
  },
  {
    no: 2,
    kategori: "Juknis & Tools",
    saran: "Segera terbitkan petunjuk teknis, aplikasi Evaluasi Kinerja Pemdi, dan kuesioner final sebelum penilaian pertama, disertai bimbingan teknis masif.",
    manfaat: "Mengurangi kebingungan implementasi & menyamakan pemahaman sejak awal.",
  },
  {
    no: 3,
    kategori: "Standar Kepuasan",
    saran: "Sediakan instrumen baku pengukuran kepuasan pengguna (mis. CSAT/CES/SUS) lengkap dengan pedoman sampling agar hasil objektif & komparabel.",
    manfaat: "Menjadikan aspek berbobot 25% terukur secara adil dan dapat dibandingkan.",
  },
  {
    no: 4,
    kategori: "Diferensiasi",
    saran: "Terapkan kategorisasi/pembobotan kontekstual sesuai tipologi & kapasitas instansi (pusat besar vs kab/kota kecil) untuk menjaga keadilan penilaian.",
    manfaat: "Mencegah penilaian yang menghukum keterbatasan struktural daerah.",
  },
  {
    no: 5,
    kategori: "Pendanaan",
    saran: "Dorong skema pendanaan khusus (DAK bidang digital, hibah, anggaran bersama) bagi daerah berfiskal terbatas untuk keamanan & infrastruktur.",
    manfaat: "Membuat target indeks realistis dan dapat dicapai secara merata.",
  },
  {
    no: 6,
    kategori: "Shared Services",
    saran: "Sediakan layanan bersama nasional (CSIRT nasional, layanan kriptografi, cloud pemerintah) agar instansi kecil tidak membangun dari nol.",
    manfaat: "Efisiensi biaya & percepatan kematangan keamanan dan teknologi.",
  },
  {
    no: 7,
    kategori: "Akselerasi SDM",
    saran: "Bangun program kompetensi digital masif (microlearning, MOOC, sertifikasi) dengan afirmasi untuk daerah 3T & ASN nonteknis.",
    manfaat: "Menutup kesenjangan kompetensi sebagai prasyarat transformasi digital.",
  },
  {
    no: 8,
    kategori: "Integrasi Pelaporan",
    saran: "Integrasikan data dengan evaluasi RB/SAKIP melalui interoperabilitas (tarik data sekali untuk banyak evaluasi) guna menekan beban ganda.",
    manfaat: "Menghemat waktu instansi & menegakkan prinsip Satu Data.",
  },
  {
    no: 9,
    kategori: "Asistensi",
    saran: "Sediakan helpdesk & pendampingan sepanjang tahun, bukan hanya saat evaluasi, termasuk klinik konsultasi per aspek.",
    manfaat: "Menggeser fokus dari menilai menjadi membina dan memperbaiki.",
  },
  {
    no: 10,
    kategori: "Insentif",
    saran: "Bangun sistem penghargaan/pemeringkatan publik bagi yang unggul, dan pendampingan intensif (bukan sekadar sanksi) bagi yang tertinggal.",
    manfaat: "Menciptakan motivasi positif untuk perbaikan berkelanjutan.",
  },
  {
    no: 11,
    kategori: "Mutu Asesor",
    saran: "Selenggarakan sertifikasi asesor, kode etik, kalibrasi penilaian antar-asesor, dan mekanisme sanggah berjenjang yang transparan.",
    manfaat: "Menjaga kredibilitas, konsistensi, dan keadilan hasil penilaian.",
  },
  {
    no: 12,
    kategori: "Transparansi",
    saran: "Publikasikan metodologi, kriteria, dan hasil yang layak publik untuk mendorong pembelajaran antarinstansi & akuntabilitas.",
    manfaat: "Memperkuat kepercayaan publik dan saling belajar antarinstansi.",
  },
  {
    no: 13,
    kategori: "Umpan Balik",
    saran: "Buka kanal umpan balik resmi agar instansi dapat mengusulkan penyempurnaan indikator/kriteria pada tiap siklus evaluasi.",
    manfaat: "Menjadikan peraturan adaptif & responsif terhadap praktik nyata.",
  },
  {
    no: 14,
    kategori: "Piloting",
    saran: "Lakukan uji coba (pilot) pada sejumlah instansi sampel sebelum pemberlakuan nasional untuk mengkalibrasi instrumen & estimasi beban kerja.",
    manfaat: "Meminimalkan risiko kesalahan instrumen pada skala nasional.",
  },
  {
    no: 15,
    kategori: "Tata Kelola Data",
    saran: "Perkuat keamanan & privasi Dasbor Presiden dengan audit independen berkala dan kepatuhan penuh pada UU PDP.",
    manfaat: "Menyeimbangkan manfaat konsolidasi data dengan mitigasi risikonya.",
  },
];

/* ----------------------------------------------------------------------------
 * KOMPARASI INDEKS SPBE → INDEKS PEMDI + BUKTI DUKUNG
 * Pemetaan ke-20 indikator Indeks Pemdi ke asalnya pada Indeks SPBE
 * (PermenPANRB 59/2020, 4 Domain · 8 Aspek · 47 Indikator) beserta
 * bukti dukung yang dapat dilampirkan/dipakai ulang.
 *
 * status:
 *   "reuse"  = bukti dukung SPBE dapat langsung dipakai ulang
 *   "update" = dapat dipakai dengan pemutakhiran/penyesuaian
 *   "baru"   = indikator baru, belum punya padanan kuat di SPBE
 * -------------------------------------------------------------------------- */
const komparasiIndeks = {
  ringkas: {
    spbe: {
      nama: "Indeks SPBE (2020)",
      struktur: "4 Domain · 8 Aspek · 47 Indikator",
      skala: "Skala 0–5",
      fokus: "Kepatuhan kebijakan & ketersediaan sistem elektronik",
    },
    pemdi: {
      nama: "Indeks Pemdi (2026)",
      struktur: "7 Aspek · 20 Indikator",
      skala: "Skala 1–5",
      fokus: "Hasil, keterpaduan, & dampak layanan bagi pengguna",
    },
  },
  // Struktur lama SPBE sebagai rujukan
  spbeStruktur: [
    { domain: "Kebijakan SPBE", aspek: ["Kebijakan Internal Tata Kelola SPBE", "Kebijakan Internal Layanan SPBE"] },
    { domain: "Tata Kelola SPBE", aspek: ["Kelembagaan", "Strategi dan Perencanaan", "Teknologi Informasi dan Komunikasi"] },
    { domain: "Manajemen SPBE", aspek: ["Penerapan Manajemen SPBE", "Audit TIK"] },
    { domain: "Layanan SPBE", aspek: ["Layanan Administrasi Pemerintahan Berbasis Elektronik", "Layanan Publik Berbasis Elektronik"] },
  ],
  statusLegend: [
    { key: "reuse", label: "Dapat dipakai ulang", warna: "#22c55e", ket: "Bukti dukung SPBE relevan & dapat langsung dilampirkan." },
    { key: "update", label: "Perlu pemutakhiran", warna: "#f59e0b", ket: "Bukti dukung SPBE dipakai dengan penyesuaian terminologi/substansi." },
    { key: "baru", label: "Indikator baru", warna: "#3b82f6", ket: "Belum ada padanan kuat di SPBE — bukti dukung perlu disiapkan baru." },
  ],
  // Inventori bukti dukung yang dianalisis (direktori INDIKATOR spbe)
  inventori: {
    sumber: "Arsip bukti dukung Evaluasi SPBE Kabupaten Pringsewu",
    jumlahFolder: 47,
    perkiraanBerkas: "±427 berkas",
    catatan:
      "Setiap indikator Pemdi di bawah memetakan bukti dukung NYATA yang tersedia pada arsip SPBE (dapat dipakai ulang/dimutakhirkan) dan bukti dukung BARU yang perlu disiapkan untuk Indeks Pemdi.",
  },
  // Pemetaan per indikator Pemdi:
  //   buktiTersedia = berkas yang sudah ada pada arsip SPBE (siap dipakai ulang/dimutakhirkan)
  //   buktiBaru     = bukti dukung baru yang perlu dibuat untuk Indeks Pemdi
  pemetaan: [
    {
      no: 1, aspek: "Tata Kelola dan Manajemen", warna: "#2563eb", bobot: 5, status: "update",
      nama: "Tingkat Kematangan Tata Kelola Pemdi",
      asalSPBE: "Domain Tata Kelola SPBE — Aspek Strategi & Perencanaan (Arsitektur & Peta Rencana SPBE) + Domain Kebijakan SPBE.",
      buktiTersedia: [
        { nama: "Perbup SPBE 2023 & Perbup 38/2018 Masterplan e-Gov", sumber: "Ind. 1" },
        { nama: "Dokumen Arsitektur SPBE lengkap (proses bisnis, layanan, data, aplikasi, keamanan, infrastruktur)", sumber: "Ind. 11" },
        { nama: "Road Map / Peta Rencana SPBE Kab. Pringsewu", sumber: "Ind. 12" },
        { nama: "DPA Murni/Perubahan & Renstra 2023–2026 Diskominfo", sumber: "Ind. 13" },
      ],
      buktiBaru: [
        "Dokumen Arsitektur Pemdi (selaras Arsitektur Pemdi Nasional & RPJMN 2025–2029)",
        "Rencana Aksi Pemdi instansi (mengacu Rencana Aksi Nasional Pemdi)",
        "Kebijakan/Perkada bernomenklatur 'Pemdi' (pengganti Perbup SPBE)",
      ],
    },
    {
      no: 2, aspek: "Tata Kelola dan Manajemen", warna: "#2563eb", bobot: 5, status: "reuse",
      nama: "Tingkat Kematangan Manajemen Layanan Digital Pemerintah",
      asalSPBE: "Domain Manajemen SPBE — Aspek Penerapan Manajemen SPBE.",
      buktiTersedia: [
        { nama: "Dokumen Manajemen Risiko SPBE (.xlsx)", sumber: "Ind. 21" },
        { nama: "Penerapan Manajemen Pengetahuan + Website Pengetahuan SPBE", sumber: "Ind. 26" },
        { nama: "Cakupan Materi Penerapan Manajemen Perubahan", sumber: "Ind. 27/28" },
        { nama: "Manajemen Aset TIK (SIMDA Barang)", sumber: "Ind. 24" },
      ],
      buktiBaru: [
        "Dokumen Manajemen Keberlangsungan (Business Continuity) layanan digital",
        "Dokumen Manajemen Relasi Pengguna",
        "Konsolidasi 5 manajemen ke 'Manajemen Layanan Digital Pemerintah'",
      ],
    },
    {
      no: 3, aspek: "Penyelenggara", warna: "#0891b2", bobot: 5, status: "update",
      nama: "Tingkat Kematangan Sumber Daya Manusia Pemdi",
      asalSPBE: "Domain Manajemen SPBE — Manajemen SDM (kompetensi belum jadi indikator tersendiri).",
      buktiTersedia: [
        { nama: "Sertifikat GCIO, BNSP Programmer, Cyber Security, dll", sumber: "Ind. 25" },
        { nama: "Screenshot Cakupan Penerapan Kompetensi SDM + SK Programmer", sumber: "Ind. 25" },
      ],
      buktiBaru: [
        "Peta Kompetensi Digital ASN (Kepemimpinan, Kemahiran, Literasi Digital)",
        "Bukti pelatihan pemanfaatan AI & analisis data",
        "Rencana & realisasi peningkatan kompetensi >90% ASN pengelola",
      ],
    },
    {
      no: 4, aspek: "Penyelenggara", warna: "#0891b2", bobot: 5, status: "update",
      nama: "Tingkat Kematangan Kolaborasi Pemdi",
      asalSPBE: "Domain Tata Kelola SPBE — Aspek Kelembagaan (Tim Koordinasi/Forum SPBE).",
      buktiTersedia: [
        { nama: "SK Tim Koordinasi SPBE / SK Tim Penyelenggara TIK", sumber: "Ind. 19" },
        { nama: "PKS dengan Kab. Mesuji + dokumentasi FGD/koordinasi", sumber: "Ind. 20" },
      ],
      buktiBaru: [
        "SK & notula Forum Koordinasi Pemdi",
        "Bukti kolaborasi co-creation (akademisi, industri, komunitas)",
        "Bukti kontribusi/koordinasi untuk Dasbor Presiden",
      ],
    },
    {
      no: 5, aspek: "Data", warna: "#7c3aed", bobot: 5, status: "reuse",
      nama: "Tingkat Kematangan Tata Kelola Data",
      asalSPBE: "Domain Kebijakan (Kebijakan Data) & Manajemen Data; penerapan Satu Data Indonesia.",
      buktiTersedia: [
        { nama: "Penerapan Manajemen Data SPBE + Pendataan Aplikasi tiap OPD", sumber: "Ind. 23" },
        { nama: "Open Data + Dasar Hukum Satu Data", sumber: "Ind. 43" },
        { nama: "Kebijakan proses pengelolaan manajemen data (Perbup)", sumber: "Ind. 3" },
      ],
      buktiBaru: [
        "SK Walidata & berita acara Forum Satu Data instansi",
        "Standar data & metadata sesuai prinsip SDI",
        "Perhitungan skor SDI (interoperabilitas dengan indeks SDI)",
      ],
    },
    {
      no: 6, aspek: "Data", warna: "#7c3aed", bobot: 3, status: "baru",
      nama: "Tingkat Kematangan Penyelenggaraan Informasi Geospasial",
      asalSPBE: "Tidak ada indikator/berkas khusus di arsip SPBE.",
      buktiTersedia: [],
      buktiBaru: [
        "SK Simpul Jaringan Informasi Geospasial",
        "Walidata geospasial & metadata IG",
        "Bukti berbagi pakai/pemanfaatan data geospasial",
      ],
    },
    {
      no: 7, aspek: "Data", warna: "#7c3aed", bobot: 3, status: "baru",
      nama: "Tingkat Kematangan Pembangunan Statistik",
      asalSPBE: "Hanya sebagian (data sektoral) pada arsip Manajemen Data.",
      buktiTersedia: [
        { nama: "Data Sektoral & sampel hasil olah data", sumber: "Ind. 23" },
      ],
      buktiBaru: [
        "Rekomendasi statistik sektoral dari BPS",
        "Metadata statistik & publikasi data statistik",
        "Dokumen pembinaan statistik sektoral",
      ],
    },
    {
      no: 8, aspek: "Data", warna: "#7c3aed", bobot: 4, status: "baru",
      nama: "Tingkat Kematangan Pelindungan Data Pribadi",
      asalSPBE: "Hanya sebagian (Manajemen Keamanan Informasi); belum ada berkas PDP khusus.",
      buktiTersedia: [
        { nama: "Manajemen Keamanan Informasi (parsial)", sumber: "Ind. 22" },
      ],
      buktiBaru: [
        "Kebijakan Pelindungan Data Pribadi (selaras UU 27/2022)",
        "Penunjukan Pejabat/Petugas Pelindungan Data (DPO)",
        "Kebijakan privasi, mekanisme consent, & DPIA",
      ],
    },
    {
      no: 9, aspek: "Keamanan Pemdi", warna: "#dc2626", bobot: 4, status: "reuse",
      nama: "Tingkat Kematangan Pelaksanaan Audit Keamanan Pemdi dan Teknologi Pemdi",
      asalSPBE: "Domain Manajemen SPBE — Aspek Audit TIK (infrastruktur, aplikasi, keamanan).",
      buktiTersedia: [
        { nama: "SK Audit Diskominfo + Audit Infrastruktur (akun Audit Tools BRIN)", sumber: "Ind. 29/30" },
        { nama: "Indeks KAMI v4.2 KOMINFO + Tools TMPI (audit keamanan)", sumber: "Ind. 31" },
        { nama: "Cakupan Audit TIK & Audit TIK seluruh Perangkat Daerah", sumber: "Ind. 9" },
      ],
      buktiBaru: [
        "Laporan audit keamanan Pemdi & teknologi sesuai pedoman baru",
        "Dokumen tindak lanjut temuan audit terkini",
      ],
    },
    {
      no: 10, aspek: "Keamanan Pemdi", warna: "#dc2626", bobot: 4, status: "reuse",
      nama: "Tingkat Kematangan Keamanan Pemdi",
      asalSPBE: "Domain Kebijakan (Keamanan) & Manajemen Keamanan Informasi SPBE.",
      buktiTersedia: [
        { nama: "Manajemen Keamanan Informasi: SK CSIRT, Tools TMPI", sumber: "Ind. 22" },
        { nama: "Indeks KAMI v4.2", sumber: "Ind. 31" },
        { nama: "Kebijakan Manajemen Keamanan (Perbup) + SK Tim CSIRT", sumber: "Ind. 8" },
      ],
      buktiBaru: [
        "Dokumen identifikasi Infrastruktur Informasi Vital (IIV)",
        "Penerapan/sertifikasi SMKI ISO 27001 (bila belum)",
        "Pemutakhiran Indeks KAMI versi terkini",
      ],
    },
    {
      no: 11, aspek: "Keamanan Pemdi", warna: "#dc2626", bobot: 3, status: "update",
      nama: "Tingkat Kematangan Penerapan Kriptografi untuk Keamanan Data",
      asalSPBE: "Domain Layanan SPBE (sebagian: penggunaan TTE/sertifikat elektronik).",
      buktiTersedia: [
        { nama: "PKS TTE dengan BSSN + screenshot TTE pada Srikandi", sumber: "Ind. 37" },
        { nama: "Sertifikat kompetensi Sandi/keamanan", sumber: "Ind. 25" },
      ],
      buktiBaru: [
        "Kebijakan & implementasi enkripsi data (data at rest/in transit)",
        "Perluasan penerapan kriptografi ke layanan digital lain",
      ],
    },
    {
      no: 12, aspek: "Keamanan Pemdi", warna: "#dc2626", bobot: 4, status: "update",
      nama: "Tingkat Kematangan Kapabilitas Penanganan Insiden Siber",
      asalSPBE: "Sebagian (Manajemen Keamanan Informasi); belum jadi indikator tersendiri di SPBE.",
      buktiTersedia: [
        { nama: "SK Tim CSIRT", sumber: "Ind. 8 / 22" },
        { nama: "Sertifikat Penanganan Insiden Keamanan SPBE", sumber: "Ind. 25" },
      ],
      buktiBaru: [
        "SOP penanganan & pelaporan insiden siber",
        "Log/laporan penanganan insiden",
        "Registrasi & koordinasi CSIRT dengan BSSN",
      ],
    },
    {
      no: 13, aspek: "Teknologi Pemdi", warna: "#ea580c", bobot: 5, status: "reuse",
      nama: "Tingkat Kematangan Aplikasi Pemdi",
      asalSPBE: "Domain Kebijakan (Aplikasi) & Layanan SPBE (aplikasi umum/khusus).",
      buktiTersedia: [
        { nama: "Pembangunan Aplikasi SPBE (perencanaan→pemeliharaan) + SOP + Surat Edaran", sumber: "Ind. 15" },
        { nama: "Pendataan aplikasi seluruh OPD", sumber: "Ind. 23" },
        { nama: "Kebijakan siklus pembangunan aplikasi (Perbup)", sumber: "Ind. 4" },
      ],
      buktiBaru: [
        "Portofolio aplikasi Pemdi terkini",
        "Bukti pemanfaatan aplikasi umum berbagi pakai nasional",
      ],
    },
    {
      no: 14, aspek: "Teknologi Pemdi", warna: "#ea580c", bobot: 5, status: "reuse",
      nama: "Tingkat Kematangan Infrastruktur Pemdi",
      asalSPBE: "Domain Tata Kelola SPBE — Aspek TIK (Pusat Data, Jaringan Intra).",
      buktiTersedia: [
        { nama: "Pemanfaatan PDN/Data Center: SOP PDN, dokumentasi, surat permohonan", sumber: "Ind. 16" },
        { nama: "Jaringan Intra Pemerintah: SOP + titik lokasi jaringan", sumber: "Ind. 17" },
        { nama: "Arsitektur Infrastruktur: komputasi awan, server, jaringan (.xlsx)", sumber: "Ind. 11" },
      ],
      buktiBaru: [
        "Bukti pemanfaatan PDN & komputasi awan pemerintah terkini",
        "Pemutakhiran topologi & kapasitas infrastruktur",
      ],
    },
    {
      no: 15, aspek: "Keterpaduan Layanan Digital Pemerintah", warna: "#16a34a", bobot: 4, status: "reuse",
      nama: "Keterpaduan Proses Bisnis Pemdi Lintas Unit dan Instansi",
      asalSPBE: "Domain Kebijakan (Proses Bisnis) & Tata Kelola SPBE.",
      buktiTersedia: [
        { nama: "SK Peta Proses Bisnis Pemkab Pringsewu 2023", sumber: "Ind. 14" },
        { nama: "Domain Arsitektur Proses Bisnis (.xlsx)", sumber: "Ind. 11" },
      ],
      buktiBaru: [
        "Peta proses bisnis terpadu lintas instansi",
        "Bukti keterpaduan/penyederhanaan layanan antarunit",
      ],
    },
    {
      no: 16, aspek: "Keterpaduan Layanan Digital Pemerintah", warna: "#16a34a", bobot: 4, status: "reuse",
      nama: "Integrasi Aplikasi",
      asalSPBE: "Domain Layanan SPBE — integrasi aplikasi & SPLP.",
      buktiTersedia: [
        { nama: "SPLP: SOP + dokumentasi pemanfaatan", sumber: "Ind. 18" },
        { nama: "Integrasi LPSE–SiKaP, SIMDA Barang–Keuangan, e-Pajak–Bank Lampung, JDIH–JDIHN", sumber: "Ind. 35/38/47/44" },
      ],
      buktiBaru: [
        "Dokumentasi integrasi/API terbaru antaraplikasi",
        "Perluasan integrasi lintas instansi via SPLP",
      ],
    },
    {
      no: 17, aspek: "Keterpaduan Layanan Digital Pemerintah", warna: "#16a34a", bobot: 4, status: "reuse",
      nama: "Portal Layanan Digital Pemerintah",
      asalSPBE: "Domain Layanan SPBE — layanan administrasi & publik berbasis elektronik.",
      buktiTersedia: [
        { nama: "Layanan SIPD, SIASN, SIMPEGNAS, Srikandi, OSS, dll", sumber: "Ind. 32–45" },
        { nama: "Layanan publik: Getuksewu & e-Pajak", sumber: "Ind. 46/47" },
      ],
      buktiBaru: [
        "Portal layanan digital terpadu (satu pintu) instansi",
        "Bukti integrasi layanan ke portal layanan nasional",
      ],
    },
    {
      no: 18, aspek: "Keterpaduan Layanan Digital Pemerintah", warna: "#16a34a", bobot: 3, status: "reuse",
      nama: "Interoperabilitas Data",
      asalSPBE: "Domain Layanan SPBE — berbagi pakai data & SPLP.",
      buktiTersedia: [
        { nama: "Pemanfaatan SPLP", sumber: "Ind. 18" },
        { nama: "Transaksi 2 arah/verifikasi data (SIASN, JDIH–JDIHN, Open Data)", sumber: "Ind. 36/44/43" },
      ],
      buktiBaru: [
        "Perjanjian/berita acara berbagi pakai data antarinstansi",
        "Dokumentasi API pertukaran data berbasis walidata",
      ],
    },
    {
      no: 19, aspek: "Kepuasan Pengguna Layanan Digital Pemerintah", warna: "#ca8a04", bobot: 10, status: "update",
      nama: "Fasilitas Dukungan Pengguna Layanan Digital Pemerintah",
      asalSPBE: "Domain Layanan SPBE — Layanan Pengaduan Publik (SP4N-LAPOR).",
      buktiTersedia: [
        { nama: "SP4N-LAPOR: dasar hukum, fitur pengaduan & gambaran pengaduan publik", sumber: "Ind. 42" },
      ],
      buktiBaru: [
        "Kanal bantuan/helpdesk khusus layanan digital",
        "SOP layanan & penanganan keluhan",
        "FAQ/panduan pengguna & sistem pemantauan keluhan",
      ],
    },
    {
      no: 20, aspek: "Kepuasan Pengguna Layanan Digital Pemerintah", warna: "#ca8a04", bobot: 15, status: "update",
      nama: "Tingkat Pengelolaan Kepuasan Pengguna Layanan Digital Pemerintah",
      asalSPBE: "Domain Layanan SPBE (sebagian: penanganan pengaduan publik).",
      buktiTersedia: [
        { nama: "Gambaran & penanganan pengaduan publik (SP4N-LAPOR)", sumber: "Ind. 42" },
      ],
      buktiBaru: [
        "Hasil Survei Kepuasan Masyarakat (SKM) layanan digital",
        "Analisis umpan balik publik & bukti tindak lanjutnya",
        "Laporan inklusivitas layanan (gender & kelompok rentan)",
      ],
    },
  ],
};

/* ----------------------------------------------------------------------------
 * POHON KINERJA & CASCADING — Bidang SPBE/Pemdi Diskominfo Kab. Pringsewu
 * Mengacu konsep Pohon Kinerja (Permenpan RB 89/2021) & Cascading SKP
 * (Permenpan RB 6/2022). IKU utama: Indeks Pemdi, di-cascade dari Kepala
 * Dinas hingga pejabat fungsional/pelaksana.
 *
 * CATATAN: struktur & target di bawah adalah CONTOH/TEMPLATE berbasis
 * struktur umum Dinas Kominfo & aspek Indeks Pemdi — sesuaikan dengan
 * SK, Renstra, Perjanjian Kinerja, dan SOTK resmi instansi.
 * -------------------------------------------------------------------------- */
const pohonKinerja = {
  meta: {
    instansi: "Dinas Komunikasi dan Informatika Kabupaten Pringsewu",
    bidang: "Bidang Penyelenggaraan E-Government (SPBE / Pemdi)",
    dasar: "Permenpan RB 89/2021 (Pohon Kinerja) & 6/2022 (Pengelolaan Kinerja Pegawai)",
    catatan:
      "Contoh/template — IKU Indeks Pemdi di-cascade dari pimpinan ke pelaksana. Aspek Penyelenggara (SDM & Kolaborasi digital) bersifat lintas dan dibina bersama Sekretariat.",
  },
  levelLegend: [
    { key: "strategis", label: "Sasaran Strategis", warna: "#3b82f6" },
    { key: "program", label: "Sasaran Program", warna: "#22d3ee" },
    { key: "kegiatan", label: "Sasaran Kegiatan", warna: "#7c3aed" },
    { key: "aksi", label: "Rencana Aksi / Aktivitas", warna: "#f59e0b" },
  ],
  root: {
    level: "strategis",
    jabatan: "Kepala Dinas Kominfo",
    sasaran: "Terwujudnya penyelenggaraan Pemerintah Digital (Pemdi) yang terpadu dan berdampak bagi masyarakat",
    indikator: "Indeks Pemerintah Digital (Indeks Pemdi)",
    target: "3,50 — Sangat Baik (Embedded)",
    jenis: "IKU / Sasaran Strategis",
    children: [
      {
        level: "program",
        jabatan: "Kepala Bidang Penyelenggaraan E-Government (SPBE)",
        sasaran: "Meningkatnya kematangan tata kelola, teknologi, keamanan, dan data Pemdi",
        indikator: "Rata-rata nilai aspek Pemdi yang menjadi binaan bidang",
        target: "≥ 3,50",
        jenis: "Sasaran Program (cascade direct)",
        children: [
          {
            level: "kegiatan",
            jabatan: "Sub-Koordinator Tata Kelola & Layanan Digital",
            sasaran: "Meningkatnya kematangan tata kelola & keterpaduan layanan digital pemerintah",
            indikator: "Nilai aspek Tata Kelola & Manajemen + Keterpaduan Layanan",
            target: "3,50 / 3,25",
            jenis: "Sasaran Kegiatan",
            aspek: [1, 6, 7],
            children: [
              {
                level: "aksi",
                jabatan: "Analis SPBE / Tata Kelola",
                sasaran: "Tersusunnya Arsitektur Pemdi & Rencana Aksi Pemdi instansi",
                indikator: "Dokumen Arsitektur & Rencana Aksi Pemdi",
                target: "1 dokumen (tersusun & direviu)",
                jenis: "Rencana Aksi (IKI)",
              },
              {
                level: "aksi",
                jabatan: "Pranata Komputer (Integrasi Layanan)",
                sasaran: "Terintegrasinya aplikasi & portal layanan digital",
                indikator: "Jumlah aplikasi terintegrasi via SPLP",
                target: "≥ 10 aplikasi",
                jenis: "Rencana Aksi (IKI)",
              },
              {
                level: "aksi",
                jabatan: "Pengelola Layanan & Pengaduan",
                sasaran: "Meningkatnya kepuasan pengguna layanan digital",
                indikator: "Nilai Survei Kepuasan Masyarakat (SKM) layanan digital",
                target: "≥ 3,50 (Baik)",
                jenis: "Rencana Aksi (IKI)",
              },
            ],
          },
          {
            level: "kegiatan",
            jabatan: "Sub-Koordinator Infrastruktur & Teknologi",
            sasaran: "Tersedianya infrastruktur & aplikasi Pemdi yang andal dan aman",
            indikator: "Nilai aspek Teknologi Pemdi",
            target: "3,75",
            jenis: "Sasaran Kegiatan",
            aspek: [5],
            children: [
              {
                level: "aksi",
                jabatan: "Pranata Komputer (Infrastruktur)",
                sasaran: "Terkelolanya Pusat Data (PDN) & Jaringan Intra Pemerintah",
                indikator: "% layanan pada PDN & ketersediaan (uptime) jaringan",
                target: "100% / ≥ 99%",
                jenis: "Rencana Aksi (IKI)",
              },
              {
                level: "aksi",
                jabatan: "Pranata Komputer (Pengembangan Aplikasi)",
                sasaran: "Terbangunnya aplikasi sesuai siklus (SDLC) & SOP",
                indikator: "Jumlah aplikasi dibangun/dipelihara sesuai SOP",
                target: "Sesuai target tahunan",
                jenis: "Rencana Aksi (IKI)",
              },
            ],
          },
          {
            level: "kegiatan",
            jabatan: "Sub-Koordinator Keamanan Informasi & Persandian",
            sasaran: "Meningkatnya keamanan Pemdi & ketahanan siber",
            indikator: "Nilai aspek Keamanan Pemdi / Indeks KAMI",
            target: "3,50 / KAMI meningkat",
            jenis: "Sasaran Kegiatan",
            aspek: [4],
            children: [
              {
                level: "aksi",
                jabatan: "Sandiman / Pranata Keamanan",
                sasaran: "Terlaksananya audit keamanan & tindak lanjut temuan",
                indikator: "Audit keamanan/tahun & % tindak lanjut temuan",
                target: "1 audit / 100% TL",
                jenis: "Rencana Aksi (IKI)",
              },
              {
                level: "aksi",
                jabatan: "Pengelola CSIRT",
                sasaran: "Beroperasinya CSIRT & penerapan kriptografi (TTE/enkripsi)",
                indikator: "CSIRT aktif & % layanan ber-TTE/terenkripsi",
                target: "Aktif / meningkat",
                jenis: "Rencana Aksi (IKI)",
              },
            ],
          },
          {
            level: "kegiatan",
            jabatan: "Sub-Koordinator Data & Statistik",
            sasaran: "Terwujudnya tata kelola data sesuai prinsip Satu Data Indonesia",
            indikator: "Nilai aspek Data / Skor SDI",
            target: "3,50 / SDI ≥ 62,5",
            jenis: "Sasaran Kegiatan",
            aspek: [3],
            children: [
              {
                level: "aksi",
                jabatan: "Statistisi / Pengelola Data (Walidata)",
                sasaran: "Terselenggaranya Satu Data Indonesia (data terstandar)",
                indikator: "Skor SDI & jumlah dataset terstandar (metadata)",
                target: "SDI ≥ 62,5",
                jenis: "Rencana Aksi (IKI)",
              },
              {
                level: "aksi",
                jabatan: "Pranata Komputer (PDP & Geospasial)",
                sasaran: "Terlindunginya data pribadi & terkelolanya data geospasial",
                indikator: "Kebijakan PDP & simpul jaringan Informasi Geospasial",
                target: "Tersedia & berjalan",
                jenis: "Rencana Aksi (IKI)",
              },
            ],
          },
        ],
      },
    ],
  },
};

const cascadingKinerja = {
  penjelasan:
    "Cascading = penyelarasan kinerja secara vertikal dari pimpinan ke bawahan. Direct cascading: indikator pimpinan dibagi/diturunkan langsung (mis. nilai aspek). Non-direct cascading: bawahan memakai indikator pendukung/aktivitas yang berkontribusi pada sasaran atasan.",
  jenis: [
    { nama: "Direct Cascading", ket: "Indikator/target atasan dibagi langsung ke bawahan (komponen pembentuk Indeks Pemdi).", warna: "#22c55e" },
    { nama: "Non-direct Cascading", ket: "Bawahan memakai indikator aktivitas/output pendukung yang menopang sasaran atasan.", warna: "#f59e0b" },
  ],
  level: [
    {
      no: 1, tingkat: "JPT Pratama", jabatan: "Kepala Dinas Kominfo",
      peran: "Pemilik Sasaran Strategis", kinerja: "Terwujudnya Pemdi yang terpadu & berdampak",
      indikator: "Indeks Pemdi", target: "3,50 (Sangat Baik)", cascade: "Outcome / Impact", warna: "#3b82f6",
    },
    {
      no: 2, tingkat: "Administrator (Eselon III)", jabatan: "Kepala Bidang Penyelenggaraan E-Government (SPBE)",
      peran: "Pemilik Sasaran Program", kinerja: "Meningkatnya kematangan aspek Pemdi binaan bidang",
      indikator: "Rata-rata nilai aspek Pemdi", target: "≥ 3,50", cascade: "Direct", warna: "#22d3ee",
    },
    {
      no: 3, tingkat: "Pengawas / Sub-Koordinator", jabatan: "Sub-Koordinator (Tata Kelola, Infrastruktur, Keamanan, Data)",
      peran: "Pemilik Sasaran Kegiatan", kinerja: "Tercapainya nilai aspek Pemdi spesifik per seksi",
      indikator: "Nilai aspek (Tata Kelola/Teknologi/Keamanan/Data)", target: "3,50 – 3,75", cascade: "Direct & Non-direct", warna: "#7c3aed",
    },
    {
      no: 4, tingkat: "Pelaksana / Fungsional", jabatan: "Pranata Komputer, Sandiman, Statistisi, Pengelola Layanan",
      peran: "Pelaksana Rencana Aksi", kinerja: "Terlaksananya aktivitas teknis (aplikasi, infra, audit, walidata, layanan)",
      indikator: "Output aktivitas (IKI) pada SKP", target: "Sesuai SKP tahunan", cascade: "Non-direct", warna: "#f59e0b",
    },
  ],
};

module.exports = {
  meta,
  aspek,
  tingkatKematangan,
  predikatSPBE,
  perbandingan,
  proses,
  metodePenilaian,
  tindakLanjut,
  kuis,
  glosarium,
  pertanyaanKritis,
  saranMembangun,
  komparasiIndeks,
  pohonKinerja,
  cascadingKinerja,
};
