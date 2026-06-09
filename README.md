# 🇮🇩 Edukasi Pemerintah Digital — PermenPANRB No. 8 Tahun 2026

Web edukasi **interaktif** untuk membantu ASN memahami **Peraturan Menteri PANRB Nomor 8 Tahun 2026 tentang Evaluasi Kinerja Pemerintah Digital (Pemdi)** dan membandingkannya dengan peraturan lama, **PermenPANRB Nomor 59 Tahun 2020 tentang Pemantauan & Evaluasi SPBE** (yang dicabut).

> Dibuat sebagai media belajar bersama oleh Pranata Komputer. **Bukan dokumen resmi** — rujukan resmi tetap pada salinan di [jdih.menpan.go.id](https://jdih.menpan.go.id).

## ✨ Fitur

| Fitur | Deskripsi |
|---|---|
| 📊 **Ringkasan** | Inti perubahan: dari SPBE → Pemerintah Digital. |
| 🔀 **Perbandingan Side-by-Side** | 11 dimensi perubahan SPBE 2020 vs Pemdi 2026 + indikator dampak. |
| 🧩 **Aspek & Indikator Explorer** | 7 aspek & 20 indikator interaktif + grafik distribusi bobot. |
| 🎚️ **Simulasi Indeks Pemdi** | Geser nilai kematangan tiap aspek → hitung Indeks Pemdi tertimbang & predikatnya secara real-time (gauge). |
| 🪜 **5 Tingkat Kematangan** | Initiate → Emerging → Developing → Embedded → Leading. |
| 🛣️ **Proses Evaluasi** | Tahap Persiapan, Pelaksanaan, Pelaporan + 4 metode penilaian. |
| ✅ **Pedoman Tindak Lanjut** | Checklist kesiapan instansi (progres tersimpan di perangkat). |
| ❓ **Kuis ASN** | 8 soal dengan penilaian & penjelasan (kunci jawaban aman di server). |
| 📖 **Glosarium** | Istilah-istilah kunci. |

## 🚀 Menjalankan

```bash
npm install
npm start
# buka http://localhost:3000
```

Butuh **Node.js 18+**.

## 🧮 Cara Hitung Indeks Pemdi

```
Indeks Pemdi = Σ ( Bobot Aspek × Nilai Aspek )   (skala 1–5, 7 aspek)
```

| Predikat | Rentang |
|---|---|
| Kurang / Merintis / Initiate | 1,00 – < 1,50 |
| Cukup / Membangun / Emerging | 1,50 – < 2,50 |
| Baik / Berkembang / Developing | 2,50 – < 3,50 |
| Sangat Baik / Melembaga / Embedded | 3,50 – < 4,00 |
| Memuaskan / Unggul / Leading | 4,00 – 5,00 |

## 🛠️ Teknologi

- **Backend:** Node.js + Express (REST API + penilaian kuis & simulasi)
- **Frontend:** HTML, CSS, JavaScript (vanilla), Chart.js
- Tanpa build step — ringan & mudah dijalankan.

## 📁 Struktur

```
├── server.js              # Express server + API
├── data/regulasi.js       # Basis data peraturan (aspek, indikator, dll)
└── public/
    ├── index.html
    ├── css/style.css
    └── js/app.js
```

## 📜 Lisensi

MIT — silakan digunakan & dikembangkan untuk kepentingan edukasi ASN.
