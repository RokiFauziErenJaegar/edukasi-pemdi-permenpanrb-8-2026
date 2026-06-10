/**
 * Server edukasi PermenPANRB 8/2026 — Evaluasi Kinerja Pemerintah Digital
 * Node.js + Express. Menyajikan frontend statis + REST API data regulasi
 * dan endpoint penilaian kuis serta simulasi Indeks Pemdi.
 */
const path = require("path");
const express = require("express");
const data = require("./data/regulasi");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

/* ---------------------------- REST API ---------------------------- */

// Seluruh data sekaligus (dipakai frontend saat memuat halaman)
app.get("/api/data", (_req, res) => {
  res.json({
    meta: data.meta,
    aspek: data.aspek,
    tingkatKematangan: data.tingkatKematangan,
    predikatSPBE: data.predikatSPBE,
    perbandingan: data.perbandingan,
    proses: data.proses,
    metodePenilaian: data.metodePenilaian,
    tindakLanjut: data.tindakLanjut,
    glosarium: data.glosarium,
    pertanyaanKritis: data.pertanyaanKritis,
    saranMembangun: data.saranMembangun,
    komparasiIndeks: data.komparasiIndeks,
  });
});

// Kuis tanpa kunci jawaban (dikirim ke klien)
app.get("/api/kuis", (_req, res) => {
  const soal = data.kuis.map((k, i) => ({ id: i, q: k.q, opsi: k.opsi }));
  res.json(soal);
});

// Penilaian kuis (kunci jawaban tetap di server)
app.post("/api/kuis/nilai", (req, res) => {
  const jawaban = (req.body && req.body.jawaban) || {};
  let benar = 0;
  const detail = data.kuis.map((k, i) => {
    const pilih = jawaban[i];
    const tepat = Number(pilih) === k.jawaban;
    if (tepat) benar++;
    return {
      id: i,
      tepat,
      jawabanBenar: k.jawaban,
      penjelasan: k.penjelasan,
    };
  });
  const total = data.kuis.length;
  res.json({
    benar,
    total,
    skor: Math.round((benar / total) * 100),
    detail,
  });
});

// Simulasi perhitungan Indeks Pemdi: body { nilai: { aspekNo: skor1-5 } }
app.post("/api/simulasi", (req, res) => {
  const nilai = (req.body && req.body.nilai) || {};
  let indeks = 0;
  const rincian = data.aspek.map((a) => {
    const skor = Math.min(5, Math.max(1, Number(nilai[a.no]) || 1));
    const kontribusi = (a.bobot / 100) * skor;
    indeks += kontribusi;
    return { no: a.no, nama: a.nama, bobot: a.bobot, skor, kontribusi: Number(kontribusi.toFixed(3)) };
  });
  indeks = Number(indeks.toFixed(2));
  const predikat =
    data.tingkatKematangan.find((t) => indeks >= t.min && indeks < t.max) ||
    data.tingkatKematangan[data.tingkatKematangan.length - 1];
  res.json({ indeks, predikat, rincian });
});

// Fallback ke index.html
app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`\n  🚀 Web Edukasi Pemdi (PermenPANRB 8/2026) berjalan`);
  console.log(`  → http://localhost:${PORT}\n`);
});
