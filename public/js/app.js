/* ============================================================
   Edukasi Pemdi — frontend logic
   ============================================================ */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const api = (p, opt) => fetch(p, opt).then((r) => r.json());

let DATA = null;

document.addEventListener("DOMContentLoaded", init);

async function init() {
  setupNav();
  setupScrollProgress();
  setupReveal();
  try {
    DATA = await api("/api/data");
  } catch (e) {
    console.error("Gagal memuat data", e);
    return;
  }
  renderHeroStats();
  renderRingkasan();
  renderCompare();
  renderKomparasiIndeks();
  renderAspek();
  renderBobotChart();
  renderSimulasi();
  renderLadder();
  renderTimeline();
  renderMetode();
  renderTindakLanjut();
  renderTanggapan();
  renderGlosarium();
  initQuiz();
  setupReveal(); // re-scan newly injected nodes
}

/* ---------- NAV ---------- */
function setupNav() {
  const nav = $("#nav");
  const toggle = $("#navToggle");
  const links = $("#navLinks");
  toggle.addEventListener("click", () => links.classList.toggle("open"));
  $$("#navLinks a").forEach((a) =>
    a.addEventListener("click", () => links.classList.remove("open"))
  );
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 30);
  });
  // active section highlight
  const secs = $$("main section[id]");
  const navA = $$("#navLinks a");
  const obs = new IntersectionObserver(
    (ents) => {
      ents.forEach((e) => {
        if (e.isIntersecting) {
          navA.forEach((a) =>
            a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id)
          );
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );
  secs.forEach((s) => obs.observe(s));
}

function setupScrollProgress() {
  const bar = $("#scrollProgress");
  window.addEventListener("scroll", () => {
    const h = document.documentElement;
    const p = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
    bar.style.width = p + "%";
  });
}

function setupReveal() {
  const obs = new IntersectionObserver(
    (ents) => {
      ents.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          obs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  $$(".reveal:not(.in)").forEach((el) => obs.observe(el));
}

/* ---------- HERO STATS ---------- */
function renderHeroStats() {
  const m = DATA.meta;
  const stats = [
    { n: m.baru.aspek, l: "Aspek Penilaian" },
    { n: m.baru.indikator, l: "Indikator" },
    { n: "25%", l: "Bobot Kepuasan Pengguna" },
    { n: m.lama.indikator + "→" + m.baru.indikator, l: "Indikator (SPBE→Pemdi)" },
  ];
  $("#heroStats").innerHTML = stats
    .map(
      (s) => `<div class="hstat"><b>${s.n}</b><span>${s.l}</span></div>`
    )
    .join("");
}

/* ---------- RINGKASAN ---------- */
function renderRingkasan() {
  const m = DATA.meta;
  const cards = [
    {
      icon: "📘",
      h: "Peraturan Baru",
      p: `<strong>PermenPANRB ${m.baru.nomor}</strong> tentang ${m.baru.judul}. Ditetapkan ${m.baru.ditetapkan}, diundangkan ${m.baru.diundangkan}.`,
    },
    {
      icon: "🗑️",
      h: "Peraturan yang Dicabut",
      p: `<strong>PermenPANRB ${m.lama.nomor}</strong> tentang ${m.lama.judul} — ${m.lama.status.toLowerCase()}.`,
    },
    {
      icon: "🎯",
      h: "Pergeseran Fokus",
      p: `Dari mengukur <strong>sistem elektronik</strong> menjadi mengukur <strong>hasil & dampak layanan bagi pengguna</strong> (Human Based Governance).`,
    },
  ];
  $("#ringkasanCards").innerHTML = cards
    .map(
      (c) => `<article class="rcard reveal"><div class="ricon">${c.icon}</div><h3>${c.h}</h3><p>${c.p}</p></article>`
    )
    .join("");
}

/* ---------- COMPARE ---------- */
function renderCompare() {
  $("#compareList").innerHTML = DATA.perbandingan
    .map(
      (c) => `
    <div class="crow reveal">
      <div class="crow-head">
        <h3>${c.dimensi} <span class="impact-pill ${c.dampak}">${c.dampak}</span></h3>
        <span class="crow-toggle">⌄</span>
      </div>
      <div class="crow-body">
        <div class="crow-cell lama"><span class="tag">SPBE 2020</span><p>${c.lama}</p></div>
        <div class="crow-cell baru"><span class="tag">Pemdi 2026</span><p>${c.baru}</p></div>
      </div>
    </div>`
    )
    .join("");
  $$("#compareList .crow").forEach((row) => {
    row.querySelector(".crow-head").addEventListener("click", () =>
      row.classList.toggle("open")
    );
  });
}

/* ---------- KOMPARASI INDEKS & BUKTI DUKUNG ---------- */
function renderKomparasiIndeks() {
  const ki = DATA.komparasiIndeks;
  if (!ki) return;
  const statusMap = {};
  ki.statusLegend.forEach((s) => (statusMap[s.key] = s));

  // header dua indeks
  const c = ki.ringkas;
  $("#kiCompare").innerHTML = `
    <div class="ki-card lama">
      <span class="ki-tag">${c.spbe.nama}</span>
      <div class="ki-struktur">${c.spbe.struktur}</div>
      <div class="ki-meta">${c.spbe.skala}</div>
      <p>${c.spbe.fokus}</p>
    </div>
    <div class="ki-arrow">→</div>
    <div class="ki-card baru">
      <span class="ki-tag">${c.pemdi.nama}</span>
      <div class="ki-struktur">${c.pemdi.struktur}</div>
      <div class="ki-meta">${c.pemdi.skala}</div>
      <p>${c.pemdi.fokus}</p>
    </div>`;

  // ringkasan reusability
  const counts = { reuse: 0, update: 0, baru: 0 };
  ki.pemetaan.forEach((p) => counts[p.status]++);
  const total = ki.pemetaan.length;
  $("#kiSummary").innerHTML = `
    <div class="ki-sum-bar">
      ${ki.statusLegend
        .map(
          (s) =>
            `<span class="ki-seg" style="flex:${counts[s.key]};background:${s.warna}" title="${s.label}: ${counts[s.key]}"></span>`
        )
        .join("")}
    </div>
    <div class="ki-sum-legend">
      ${ki.statusLegend
        .map(
          (s) =>
            `<span class="ki-sum-item"><i style="background:${s.warna}"></i><b>${counts[s.key]}</b> ${s.label}</span>`
        )
        .join("")}
      <span class="ki-sum-note">dari ${total} indikator Pemdi</span>
    </div>`;

  // filter buttons
  $("#kiFilter").innerHTML =
    `<button class="ki-fbtn active" data-f="all">Semua (${total})</button>` +
    ki.statusLegend
      .map(
        (s) =>
          `<button class="ki-fbtn" data-f="${s.key}" style="--fc:${s.warna}">${s.label} (${counts[s.key]})</button>`
      )
      .join("");

  // cards
  const cardHTML = (p) => {
    const st = statusMap[p.status];
    return `
    <article class="ki-item reveal" data-status="${p.status}" style="--ac:${p.warna};--sc:${st.warna}">
      <div class="ki-item-head">
        <span class="ki-no">${String(p.no).padStart(2, "0")}</span>
        <div class="ki-item-title">
          <b>${p.nama}</b>
          <small>${p.aspek} · bobot ${p.bobot}%</small>
        </div>
        <span class="ki-status">${st.label}</span>
      </div>
      <div class="ki-asal"><span class="ki-lbl">Asal di Indeks SPBE</span>${p.asalSPBE}</div>
      <div class="ki-bukti">
        <span class="ki-lbl">Bukti dukung yang dapat dilampirkan</span>
        <ul>${p.bukti.map((b) => `<li>${b}</li>`).join("")}</ul>
      </div>
    </article>`;
  };
  const grid = $("#kiGrid");
  grid.innerHTML = ki.pemetaan.map(cardHTML).join("");

  $$("#kiFilter .ki-fbtn").forEach((btn) =>
    btn.addEventListener("click", () => {
      const f = btn.dataset.f;
      $$("#kiFilter .ki-fbtn").forEach((b) => b.classList.toggle("active", b === btn));
      $$("#kiGrid .ki-item").forEach((card) => {
        card.style.display = f === "all" || card.dataset.status === f ? "" : "none";
      });
    })
  );

  // struktur lama referensi
  $("#kiRefGrid").innerHTML = ki.spbeStruktur
    .map(
      (d) => `
    <div class="ki-ref-card">
      <h4>${d.domain}</h4>
      <ul>${d.aspek.map((a) => `<li>${a}</li>`).join("")}</ul>
    </div>`
    )
    .join("");
}

/* ---------- ASPEK ---------- */
function renderAspek() {
  $("#aspekGrid").innerHTML = DATA.aspek
    .map(
      (a) => `
    <article class="acard reveal" style="--ac:${a.warna}" data-no="${a.no}">
      <div class="a-top"><span class="a-icon">${a.icon}</span><span class="a-bobot">${a.bobot}%</span></div>
      <h3>${a.nama}</h3>
      <span class="a-count">${a.indikator.length} indikator · klik untuk detail</span>
      <div class="a-indikator">
        <p class="aspek-desc">${a.deskripsi}</p>
        ${a.indikator
          .map(
            (i) => `<div class="ind-item"><span class="ind-w">${i.bobot}%</span><div class="ind-x"><b>${i.no}. ${i.nama}</b><span>${i.ket}</span></div></div>`
          )
          .join("")}
      </div>
    </article>`
    )
    .join("");
  $$("#aspekGrid .acard").forEach((card) => {
    card.addEventListener("click", () => {
      const wasOpen = card.classList.contains("open");
      $$("#aspekGrid .acard").forEach((c) => c.classList.remove("open"));
      if (!wasOpen) card.classList.add("open");
    });
  });
}

function renderBobotChart() {
  if (!window.Chart) return setTimeout(renderBobotChart, 200);
  const ctx = $("#bobotChart");
  new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: DATA.aspek.map((a) => a.nama),
      datasets: [
        {
          data: DATA.aspek.map((a) => a.bobot),
          backgroundColor: DATA.aspek.map((a) => a.warna),
          borderColor: "#0a0f1f",
          borderWidth: 3,
          hoverOffset: 10,
        },
      ],
    },
    options: {
      cutout: "58%",
      plugins: {
        legend: { position: "bottom", labels: { color: "#93a0bd", font: { size: 11 }, boxWidth: 12, padding: 8 } },
        tooltip: { callbacks: { label: (c) => ` ${c.label}: ${c.raw}%` } },
      },
    },
  });
}

/* ---------- SIMULASI ---------- */
let gauge = null;
const simState = {};
function renderSimulasi() {
  DATA.aspek.forEach((a) => (simState[a.no] = 1));
  $("#simControls").innerHTML = DATA.aspek
    .map(
      (a) => `
    <div class="simrow">
      <div class="simrow-top">
        <span class="s-name">${a.icon} ${a.nama} <small>(bobot ${a.bobot}%)</small></span>
        <span class="s-val" id="sv-${a.no}">1.0</span>
      </div>
      <input type="range" min="1" max="5" step="0.1" value="1" data-no="${a.no}" />
    </div>`
    )
    .join("");
  $$('#simControls input[type="range"]').forEach((inp) => {
    inp.addEventListener("input", () => {
      const no = inp.dataset.no;
      simState[no] = parseFloat(inp.value);
      $("#sv-" + no).textContent = parseFloat(inp.value).toFixed(1);
      calcSim();
    });
  });
  $("#simReset").addEventListener("click", () => {
    $$('#simControls input[type="range"]').forEach((inp) => {
      inp.value = 3;
      simState[inp.dataset.no] = 3;
      $("#sv-" + inp.dataset.no).textContent = "3.0";
    });
    calcSim();
  });
  initGauge();
  calcSim();
}

function initGauge() {
  if (!window.Chart) return setTimeout(initGauge, 200);
  gauge = new Chart($("#gaugeChart"), {
    type: "doughnut",
    data: {
      datasets: [
        {
          data: [1, 4],
          backgroundColor: ["#3b82f6", "#18233e"],
          borderWidth: 0,
          circumference: 270,
          rotation: 225,
        },
      ],
    },
    options: {
      cutout: "78%",
      plugins: { legend: { display: false }, tooltip: { enabled: false } },
    },
  });
}

async function calcSim() {
  const res = await api("/api/simulasi", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nilai: simState }),
  });
  $("#simValue").textContent = res.indeks.toFixed(2);
  const p = res.predikat;
  if (gauge) {
    gauge.data.datasets[0].data = [res.indeks - 1, 5 - res.indeks];
    gauge.data.datasets[0].backgroundColor = [p.warna, "#18233e"];
    gauge.update();
  }
  $("#simValue").style.color = p.warna;
  $("#simPredikat").innerHTML = `
    <div class="p-name" style="color:${p.warna}">${p.nama}</div>
    <div class="p-label">${p.label} · rentang ${p.rentang}</div>
    <div class="p-desc">${p.deskripsi}</div>`;
}

/* ---------- LADDER ---------- */
function renderLadder() {
  $("#ladder").innerHTML = DATA.tingkatKematangan
    .map(
      (t) => `
    <div class="lrow reveal">
      <div class="l-level" style="background:${t.warna}">${t.level}</div>
      <div class="l-body">
        <h3>${t.nama} <span class="l-range">${t.rentang}</span></h3>
        <em style="color:${t.warna};font-style:normal;font-size:13px;font-weight:600">${t.label}</em>
        <p>${t.deskripsi}</p>
      </div>
    </div>`
    )
    .join("");
}

/* ---------- TIMELINE ---------- */
function renderTimeline() {
  $("#timeline").innerHTML = DATA.proses
    .map(
      (s) => `
    <div class="tstep reveal">
      <div class="t-icon">${s.icon}</div>
      <h3>${s.tahap}</h3>
      <div class="t-col deputi"><h4>Deputi / KemenPANRB</h4><ul>${s.deputi
        .map((x) => `<li>${x}</li>`)
        .join("")}</ul></div>
      <div class="t-col instansi"><h4>Instansi Pemerintah</h4><ul>${s.instansi
        .map((x) => `<li>${x}</li>`)
        .join("")}</ul></div>
    </div>`
    )
    .join("");
}

function renderMetode() {
  $("#metodeGrid").innerHTML = DATA.metodePenilaian
    .map(
      (m) => `
    <div class="mcard reveal">
      <h3>${m.nama}</h3>
      <div class="m-by">oleh ${m.oleh}</div>
      <p>${m.tujuan}</p>
    </div>`
    )
    .join("");
}

/* ---------- TINDAK LANJUT ---------- */
function renderTindakLanjut() {
  const store = JSON.parse(localStorage.getItem("pemdi_tl") || "{}");
  $("#tlGrid").innerHTML = DATA.tindakLanjut
    .map(
      (g, gi) => `
    <article class="tlcard reveal">
      <h3>${g.icon} ${g.kategori}</h3>
      ${g.items
        .map((it, ii) => {
          const key = gi + "-" + ii;
          const ck = store[key] ? "checked" : "";
          return `<label class="tlcheck"><input type="checkbox" data-key="${key}" ${ck}/><span class="box">✓</span><span class="txt">${it}</span></label>`;
        })
        .join("")}
    </article>`
    )
    .join("");
  $$("#tlGrid input[type=checkbox]").forEach((cb) =>
    cb.addEventListener("change", () => {
      const s = JSON.parse(localStorage.getItem("pemdi_tl") || "{}");
      s[cb.dataset.key] = cb.checked;
      localStorage.setItem("pemdi_tl", JSON.stringify(s));
      updateTLProgress();
    })
  );
  updateTLProgress();
}

function updateTLProgress() {
  const all = $$("#tlGrid input[type=checkbox]");
  const done = all.filter((c) => c.checked).length;
  const pct = all.length ? Math.round((done / all.length) * 100) : 0;
  $("#tlBarFill").style.width = pct + "%";
  $("#tlProgressText").textContent = `${pct}% siap (${done}/${all.length})`;
}

/* ---------- TANGGAPAN KRITIS ---------- */
function renderTanggapan() {
  const tanya = DATA.pertanyaanKritis || [];
  const saran = DATA.saranMembangun || [];
  $("#countTanya").textContent = tanya.length;
  $("#countSaran").textContent = saran.length;

  $("#tanyaGrid").innerHTML = tanya
    .map(
      (t) => `
    <article class="resp-card q reveal">
      <div class="resp-head"><span class="resp-no">${String(t.no).padStart(2, "0")}</span><span class="resp-cat">${t.kategori}</span></div>
      <p class="resp-main">${t.q}</p>
      <p class="resp-sub">⚠️ ${t.konteks}</p>
    </article>`
    )
    .join("");

  $("#saranGrid").innerHTML = saran
    .map(
      (s) => `
    <article class="resp-card s reveal">
      <div class="resp-head"><span class="resp-no">${String(s.no).padStart(2, "0")}</span><span class="resp-cat">${s.kategori}</span></div>
      <p class="resp-main">${s.saran}</p>
      <p class="resp-sub">✅ ${s.manfaat}</p>
    </article>`
    )
    .join("");

  $$("#tanggapan .tab-btn").forEach((btn) =>
    btn.addEventListener("click", () => {
      const tab = btn.dataset.tab;
      $$("#tanggapan .tab-btn").forEach((b) => b.classList.toggle("active", b === btn));
      $("#paneTanya").classList.toggle("active", tab === "tanya");
      $("#paneSaran").classList.toggle("active", tab === "saran");
      setupReveal();
    })
  );
}

/* ---------- GLOSARIUM ---------- */
function renderGlosarium() {
  $("#glosGrid").innerHTML = DATA.glosarium
    .map(
      (g) => `<div class="gcard reveal"><h3>${g.istilah}</h3><p>${g.arti}</p></div>`
    )
    .join("");
}

/* ---------- QUIZ ---------- */
let QUIZ = [];
let qIdx = 0;
const qAns = {};
async function initQuiz() {
  QUIZ = await api("/api/kuis");
  qIdx = 0;
  renderQuestion();
}

function renderQuestion() {
  const q = QUIZ[qIdx];
  const pct = (qIdx / QUIZ.length) * 100;
  const card = $("#quizCard");
  card.innerHTML = `
    <div class="quiz-top">
      <span>Soal ${qIdx + 1} / ${QUIZ.length}</span>
      <div class="quiz-progress"><span style="width:${pct}%"></span></div>
    </div>
    <div class="quiz-q">${q.q}</div>
    <div class="quiz-opts">
      ${q.opsi
        .map(
          (o, i) =>
            `<button class="qopt" data-i="${i}"><span class="q-key">${String.fromCharCode(
              65 + i
            )}</span><span>${o}</span></button>`
        )
        .join("")}
    </div>
    <div class="quiz-explain" id="quizExplain"></div>
    <div class="quiz-nav"><button class="btn btn-primary" id="quizNext" style="display:none">Lanjut →</button></div>`;
  $$("#quizCard .qopt").forEach((b) =>
    b.addEventListener("click", () => answer(parseInt(b.dataset.i)))
  );
  $("#quizNext").addEventListener("click", next);
}

async function answer(i) {
  qAns[qIdx] = i;
  // sebuah panggilan untuk memvalidasi 1 soal — kunci tetap di server
  const res = await api("/api/kuis/nilai", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ jawaban: { [qIdx]: i } }),
  });
  const d = res.detail[qIdx];
  $$("#quizCard .qopt").forEach((b) => {
    b.disabled = true;
    const bi = parseInt(b.dataset.i);
    if (bi === d.jawabanBenar) b.classList.add("correct");
    if (bi === i && !d.tepat) b.classList.add("wrong");
  });
  const ex = $("#quizExplain");
  ex.innerHTML = `<b>${d.tepat ? "✅ Tepat!" : "❌ Belum tepat."}</b> ${d.penjelasan}`;
  ex.classList.add("show");
  const nx = $("#quizNext");
  nx.style.display = "inline-flex";
  nx.textContent = qIdx === QUIZ.length - 1 ? "Lihat Hasil →" : "Lanjut →";
}

async function next() {
  if (qIdx < QUIZ.length - 1) {
    qIdx++;
    renderQuestion();
  } else {
    showResult();
  }
}

async function showResult() {
  const res = await api("/api/kuis/nilai", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ jawaban: qAns }),
  });
  let msg = "Terus pelajari peraturannya, ya!";
  if (res.skor === 100) msg = "Sempurna! Anda siap menjadi agen perubahan Pemdi. 🏆";
  else if (res.skor >= 75) msg = "Bagus! Pemahaman Anda sudah kuat. 👏";
  else if (res.skor >= 50) msg = "Lumayan — tinjau kembali bagian Perbandingan & Aspek. 📚";
  $("#quizCard").innerHTML = `
    <div class="quiz-result">
      <div class="score-ring">${res.skor}</div>
      <h3>${res.benar} dari ${res.total} benar</h3>
      <p>${msg}</p>
      <button class="btn btn-primary" id="quizRetry">Ulangi Kuis</button>
    </div>`;
  $("#quizRetry").addEventListener("click", () => {
    qIdx = 0;
    for (const k in qAns) delete qAns[k];
    renderQuestion();
  });
}
