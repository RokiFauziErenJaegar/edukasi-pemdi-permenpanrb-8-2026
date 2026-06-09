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
};
