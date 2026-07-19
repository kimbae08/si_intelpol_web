const menuItems = [
  { id: 'beranda', icon: '⌂', title: 'Beranda', eyebrow: 'Command Center' },
  { id: 'informasi', icon: '▣', title: 'Informasi Terbaru', eyebrow: 'Intelligence Feed' },
  { id: 'peta', icon: '◎', title: 'Peta Intelijen', eyebrow: 'Globe Heatmap' },
  { id: 'intelijen', icon: '◈', title: 'Laporan Intelijen', eyebrow: 'Basis Data Intelijen' },
  { id: 'kriminal', icon: '⚑', title: 'Laporan Kriminal', eyebrow: 'Crime Incident Report' },
  { id: 'korelasi', icon: '⌁', title: 'Korelasi Data', eyebrow: 'Intelijen x Kriminal' },
  { id: 'masyarakat', icon: '◉', title: 'Laporan Masyarakat', eyebrow: 'Public Report' },
  { id: 'panic', icon: '!', title: 'Panic Button', eyebrow: 'Emergency Response' },
  { id: 'operasi', icon: '⚙', title: 'Operasi & Penugasan', eyebrow: 'Dispatch Center' },
  { id: 'analitik', icon: '⌁', title: 'Analitik Risiko', eyebrow: 'Predictive Analytics' },
  { id: 'wilayah', icon: '⌖', title: 'Wilayah Rawan', eyebrow: 'Area Profiling' },
  { id: 'dokumen', icon: '▤', title: 'Dokumen Intelijen', eyebrow: 'Secure Document Vault' },
  { id: 'pengguna', icon: '◍', title: 'Pengguna & Akses', eyebrow: 'Role Based Access' },
  { id: 'audit', icon: '☷', title: 'Audit Log', eyebrow: 'System Accountability' },
  { id: 'pengaturan', icon: '⚙', title: 'Pengaturan', eyebrow: 'System Configuration' },
];

const latest = [
  { sev:'KRITIS', cls:'s-critical', time:'10:15 WIB', title:'Aktivitas Mencurigakan di Perbatasan Kalbar', body:'Sanggau, Kalimantan Barat', status:'Verified', st:'green' },
  { sev:'TINGGI', cls:'s-high', time:'09:47 WIB', title:'Potensi Unjuk Rasa di Beberapa Titik', body:'Jakarta, Jawa Barat, Banten', status:'Monitoring', st:'blue' },
  { sev:'SEDANG', cls:'s-mid', time:'09:20 WIB', title:'Peningkatan Aktivitas di Ruang Siber', body:'Indonesia', status:'Under Review', st:'amber' },
  { sev:'RENDAH', cls:'s-low', time:'08:55 WIB', title:'Informasi Gangguan Keamanan Lokal', body:'Jayapura, Papua', status:'Verified', st:'green' },
];

const intelRows = [
  ['INT-2026-0703-001','03 Jul 2026 10:15','Sanggau, Kalbar','Aktivitas Lintas Batas','A2','Tinggi','Perlu Verifikasi'],
  ['INT-2026-0703-002','03 Jul 2026 09:47','DKI Jakarta','Potensi Unjuk Rasa','B1','Sedang','Monitoring'],
  ['INT-2026-0702-014','02 Jul 2026 22:30','Poso, Sulteng','Kelompok Bersenjata','A1','Tinggi','Terverifikasi'],
  ['INT-2026-0701-033','01 Jul 2026 18:45','Ternate, Malut','Konflik Horizontal','B2','Sedang','Dipantau'],
];

const crimeRows = [
  ['LP-2026-0703-009','03 Jul 2026 09:40','Deli Serdang, Sumut','Curanmor','Reskrim','Lidik','Terkait Intelijen 62%'],
  ['LP-2026-0703-004','03 Jul 2026 01:20','Surabaya, Jatim','Penganiayaan','Polrestabes','Sidik','Tidak Terkait'],
  ['LP-2026-0702-021','02 Jul 2026 23:10','Jayapura, Papua','Gangguan Kamtibmas','Sabhara','Selesai','Terkait Intelijen 86%'],
  ['LP-2026-0701-011','01 Jul 2026 20:05','Makassar, Sulsel','Narkoba','Satnarkoba','Sidik','Terkait Intelijen 77%'],
];

const timeline = [
  ['10:15','Laporan baru diterima','Aktivitas mencurigakan di perbatasan Kalbar.'],
  ['09:47','Tingkat ancaman dinaikkan','Situasi di Jakarta dan sekitarnya.'],
  ['09:20','Laporan siber diverifikasi','Peningkatan aktivitas scanning IP.'],
  ['08:55','Informasi lokal diverifikasi','Gangguan keamanan di Jayapura.'],
  ['08:30','Operasi intelijen diperbarui','Penugasan lapangan di 3 wilayah.'],
];

const areaData = [
  ['Papua','Kritis','Skor 92 • Gangguan keamanan, kontak senjata, laporan intelijen tinggi','92'],
  ['Kalimantan Barat','Tinggi','Skor 84 • Aktivitas lintas batas dan penyelundupan','84'],
  ['Poso, Sulteng','Tinggi','Skor 78 • Jejak kelompok bersenjata dan propaganda','78'],
  ['Maluku Utara','Sedang','Skor 62 • Konflik horizontal dan isu SARA','62'],
  ['DKI Jakarta','Sedang','Skor 58 • Potensi unjuk rasa dan kerawanan siber','58'],
];

const units = [
  ['Satgas Papua 01','Patroli perbatasan Skouw','ETA 09 menit','Tinggi'],
  ['Reskrim Kalbar 03','Olah TKP Sanggau','Aktif','Sedang'],
  ['Intel Sulteng 02','Monitoring Poso','Aktif','Tinggi'],
  ['Brimob Malut 05','Siaga Ternate','Siaga','Rendah'],
];

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function badge(text) {
  const t = text.toLowerCase();
  let c = '';
  if (t.includes('kritis') || t.includes('tinggi') || t.includes('terkait')) c = t.includes('kritis') ? 'red' : 'amber';
  if (t.includes('sedang') || t.includes('monitoring') || t.includes('lidik')) c = 'amber';
  if (t.includes('verifikasi') || t.includes('dipantau')) c = 'purple';
  if (t.includes('selesai') || t.includes('terverifikasi')) c = 'green';
  if (t.includes('tidak')) c = '';
  return `<span class="badge-soft ${c}">${text}</span>`;
}

function buildNav() {
  const nav = document.getElementById('navMenu');
  nav.innerHTML = menuItems.map((m) => `
    <button data-page="${m.id}">
      <span class="nav-icon">${m.icon}</span><span>${m.title}</span>
    </button>`).join('');
  nav.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-page]');
    if (!btn) return;
    // Navigasi lewat hash agar bisa deep-link, di-refresh, dan tombol back/forward browser berfungsi.
    location.hash = btn.dataset.page;
    document.getElementById('sidebar').classList.remove('open');
  });
}

function setActiveNav(id) {
  document.querySelectorAll('#navMenu button[data-page]').forEach((b) => {
    b.classList.toggle('active', b.dataset.page === id);
  });
}

function route() {
  const requested = location.hash.replace(/^#/, '');
  const id = menuItems.some((m) => m.id === requested) ? requested : 'beranda';
  setActiveNav(id);
  renderPage(id);
}

function setHeader(id) {
  const item = menuItems.find(m => m.id === id) || menuItems[0];
  document.getElementById('pageTitle').textContent = item.title;
  document.getElementById('pageEyebrow').textContent = item.eyebrow;
}

function kpi(icon, label, value, sub, cls = '') {
  // Diselaraskan ke gaya "Situasi Nasional": jika sub diawali panah tren, tampilkan sebagai delta.
  const isDelta = /^[↑↓]/.test(sub || '');
  return statCard(icon, label, value, isDelta ? sub : '', isDelta ? '' : sub, cls);
}

function feedCards() {
  return latest.map(f => `<article class="feed-card">
    <div class="feed-meta"><span class="severity ${f.cls}">${f.sev}</span><span>${f.time}</span></div>
    <h4>${f.title}</h4><p>${f.body}</p><span class="status-dot ${f.st || ''}">${f.status}</span>
  </article>`).join('');
}

function alertPanel() {
  return `<div class="panel">
    <div class="panel-header"><h3>Alerts</h3><a>Lihat Semua</a></div>
    <div class="alert-list">
      <div class="alert-item"><span class="pulse red"></span><b>Kritis</b><span>3</span></div>
      <div class="alert-item"><span class="pulse amber"></span><b>Tinggi</b><span>7</span></div>
      <div class="alert-item"><span class="pulse" style="background:var(--amber)"></span><b>Sedang</b><span>14</span></div>
      <div class="alert-item"><span class="pulse green"></span><b>Rendah</b><span>23</span></div>
    </div>
  </div>`;
}

function timelinePanel() {
  return `<div class="panel">
    <div class="panel-header"><h3>Timeline Aktivitas</h3><a>Live</a></div>
    <div class="timeline-list">${timeline.map(t => `<div class="timeline-item"><div class="timeline-time">${t[0]}</div><div><h4>${t[1]}</h4><p>${t[2]}</p></div></div>`).join('')}</div>
  </div>`;
}

function areaPanel(limit = 5) {
  return `<div class="panel">
    <div class="panel-header"><h3>Top Wilayah Prioritas</h3><a>Detail</a></div>
    <div class="area-list">${areaData.slice(0, limit).map(a => `<div class="area-row"><div><h4>${a[0]} ${badge(a[1])}</h4><p>${a[2]}</p></div><div class="progress"><span style="width:${a[3]}%"></span></div></div>`).join('')}</div>
  </div>`;
}

function chartPanel(title = 'Tren Laporan 7 Hari') {
  return `<div class="panel"><div class="panel-header"><h3>${title}</h3><a>Analisis</a></div>${document.getElementById('chartTemplate').innerHTML}</div>`;
}

function globePanel(id = 'globeCanvas', big = false) {
  return `<div class="panel globe-panel ${big ? 'big-map' : ''}">
    <div class="panel-header"><h3>Globe Heatmap Intelijen</h3><a>Mode Real-time</a></div>
    <div class="globe-wrap">
      <div class="map-controls"><button>◎</button><button>▧</button><button>⌖</button><button>⛶</button></div>
      <canvas id="${id}" class="globe-canvas"></canvas>
      <div class="zoom-controls"><button>+</button><button>−</button><button>↻</button></div>
    </div>
    <div class="legend"><span>Rendah</span><div class="gradient"></div><span>Kritis</span></div>
  </div>`;
}

function table(headers, rows) {
  return `<div class="table-wrap"><table><thead><tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>${rows.map(r => `<tr>${r.map((c, i) => `<td>${i > 3 ? badge(c) : c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
}

function statCard(icon, label, value, delta, sub, tone = '') {
  return `<div class="stat-card ${tone}">
    <div class="stat-icon">${icon}</div>
    <div>
      <span class="stat-label">${label}</span>
      <div class="stat-value">${value}${delta ? `<em class="stat-delta">${delta}</em>` : ''}</div>
      <span class="stat-sub">${sub}</span>
    </div>
  </div>`;
}

function situationPanel() {
  const cards = latest.map(f => `<article class="sit-card">
    <div class="sit-top"><span class="severity ${f.cls}">${f.sev}</span><span class="sit-time">${f.time}</span><span class="sit-kebab">⋮</span></div>
    <h4>${f.title}</h4><p>${f.body}</p>
    <span class="status-dot ${f.st || ''}">${f.status}</span>
  </article>`).join('');
  return `<div class="panel situation-panel">
    <div class="feed-strip">
      <div class="panel-header"><h3>Informasi Terbaru</h3><a>Lihat Semua</a></div>
      <div class="feed-scroller">${cards}</div>
    </div>
    <div class="globe-wrap">
      <div class="map-controls"><button class="active" title="Globe">◍</button><button title="Layer">▤</button><button title="Titik">⌖</button><button title="Layar penuh">⛶</button></div>
      <canvas id="globeCanvas" class="globe-canvas"></canvas>
      <div class="zoom-controls"><button>+</button><button>−</button><button>↻</button></div>
      <div class="activity-legend"><span>Tingkat Aktivitas</span><small>Rendah</small><i class="grad"></i><small>Kritis</small></div>
    </div>
  </div>`;
}

function indoMapCard() {
  return `<div class="panel indo-card">
    <div class="panel-header"><h3>Tren 24 Jam</h3><span class="mini-select">Laporan ▾</span></div>
    <div class="indo-wrap"><canvas id="indoCanvas" class="indo-canvas"></canvas></div>
    <div class="indo-legend">
      <span><i style="background:var(--blue)"></i>Rendah</span>
      <span><i style="background:var(--amber)"></i>Sedang</span>
      <span><i style="background:var(--red)"></i>Tinggi</span>
      <span><i style="background:var(--purple)"></i>Kritis</span>
    </div>
  </div>`;
}

function categoryCard() {
  const segs = [
    ['Keamanan','2.987','38.1%','var(--blue)'],
    ['Politik','1.823','23.3%','var(--cyan)'],
    ['Sosial','1.356','17.3%','var(--green)'],
    ['Ekonomi','892','11.4%','var(--amber)'],
    ['Bencana Alam','784','10.0%','var(--red)'],
  ];
  const gradient = 'conic-gradient(var(--blue) 0 38.1%, var(--cyan) 38.1% 61.4%, var(--green) 61.4% 78.7%, var(--amber) 78.7% 90.1%, var(--red) 90.1% 100%)';
  return `<div class="panel cat-card">
    <div class="panel-header"><h3>Kategori Laporan</h3></div>
    <div class="cat-body">
      <div class="donut" style="background:${gradient}"></div>
      <ul class="cat-legend">${segs.map(s => `<li><span class="dot" style="background:${s[3]}"></span><div><b>${s[0]}</b><small>${s[1]} (${s[2]})</small></div></li>`).join('')}</ul>
    </div>
  </div>`;
}

function trendCard() {
  // Tren laporan 7 hari terakhir (skala 0-2000). Titik: nilai harian.
  const vals = [1050, 1300, 1150, 950, 1200, 1000, 1248];
  const days = ['15 Mei','16 Mei','17 Mei','18 Mei','19 Mei','20 Mei','21 Mei'];
  const x = (i) => 58 + i * 78;
  const y = (v) => 200 - (v / 2000) * 170;
  const linePts = vals.map((v, i) => `${x(i)} ${y(v).toFixed(1)}`);
  const line = 'M' + linePts.join(' L');
  const area = `${line} L${x(6)} 200 L${x(0)} 200 Z`;
  const dots = vals.map((v, i) => `<circle cx="${x(i)}" cy="${y(v).toFixed(1)}" r="4"/>`).join('');
  const gy = [[2000,30],[1500,72.5],[1000,115],[500,157.5],[0,200]];
  const grid = gy.map(g => `M52 ${g[1]} H544`).join(' ');
  const yLabels = [['2K',30],['1.5K',72.5],['1K',115],['500',157.5],['0',200]]
    .map(l => `<text class="yl" x="46" y="${l[1] + 4}" text-anchor="end">${l[0]}</text>`).join('');
  const xLabels = days.map((d, i) => `<text class="xl" x="${x(i)}" y="222">${d}</text>`).join('');
  const lx = x(6), ly = y(1248);
  return `<div class="panel trend-card">
    <div class="panel-header"><h3>Trend Laporan <span class="subttl">(7 Hari Terakhir)</span></h3><a>Analisis</a></div>
    <svg viewBox="0 0 560 232" class="line-chart trend-svg" aria-label="Trend laporan 7 hari terakhir">
      <defs><linearGradient id="areaFill" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stop-color="rgba(64,156,255,.42)"/><stop offset="100%" stop-color="rgba(64,156,255,0)"/>
      </linearGradient></defs>
      <path class="grid-line" d="${grid}" />
      ${yLabels}${xLabels}
      <path class="area" d="${area}" />
      <path class="line" d="${line}" />
      <g class="dots">${dots}</g>
      <g class="trend-tip" transform="translate(${lx}, ${ly})">
        <rect x="-40" y="-50" width="80" height="38" rx="8"/>
        <text class="tv" x="0" y="-32">1.248</text>
        <text class="td" x="0" y="-18">21 Mei</text>
      </g>
    </svg>
  </div>`;
}

function alertsCard() {
  const rows = [['Kritis','3','red'],['Tinggi','7','orange'],['Sedang','14','amber'],['Rendah','23','green']];
  return `<div class="panel"><div class="panel-header"><h3>Alerts</h3><a>Lihat Semua</a></div>
    <div class="alert-list">${rows.map(r => `<div class="alert-row ${r[2]}"><span class="dot"></span><b>${r[0]}</b><span class="count">${r[1]}</span><span class="chev">›</span></div>`).join('')}</div></div>`;
}

function timelineNationalPanel() {
  return `<div class="panel"><div class="panel-header"><h3>Timeline Aktivitas</h3><a>Lihat Semua</a></div>
    <div class="timeline-list">${timeline.map(t => `<div class="timeline-item"><div class="timeline-time">${t[0]}</div><div><h4>${t[1]}</h4><p>${t[2]}</p></div></div>`).join('')}</div></div>`;
}

function topAreaCard() {
  const areas = [
    ['Papua','Tinggi','842','tinggi'],
    ['Kalbar','Tinggi','621','tinggi'],
    ['Poso, Sulteng','Tinggi','512','tinggi'],
    ['Maluku Utara','Sedang','398','sedang'],
    ['Jakarta','Sedang','287','sedang'],
  ];
  const max = 842;
  return `<div class="panel"><div class="panel-header"><h3>Top Area Prioritas</h3></div>
    <div class="top-area-list">${areas.map(a => `<div class="ta-row"><span class="ta-name">${a[0]}</span><span class="ta-level ${a[3]}">${a[1]}</span><div class="ta-bar"><span class="${a[3]}" style="width:${Math.round(a[2] / max * 100)}%"></span></div><span class="ta-val">${a[2]}</span></div>`).join('')}</div>
    <a class="ta-more">Lihat Semua Area</a></div>`;
}

function renderBeranda() {
  return `<div class="national-grid">
    <div class="col-stack">
      ${statCard('▤','Total Laporan','7.842','↑ 12.6%','Dari 24 jam terakhir','blue')}
      ${statCard('⛨','Tingkat Ancaman','Tinggi','↑','Trend meningkat','red')}
      ${statCard('⌖','Area Prioritas','12','','Dari 34 provinsi','purple')}
      ${statCard('◉','Pelapor Aktif','1.248','↑ 8.3%','Dalam 24 jam terakhir','teal')}
      ${indoMapCard()}
    </div>
    <div class="col-stack">
      ${situationPanel()}
      <div class="grid cols-2">
        ${categoryCard()}
        ${trendCard()}
      </div>
    </div>
    <div class="col-stack">
      ${alertsCard()}
      ${timelineNationalPanel()}
      ${topAreaCard()}
    </div>
  </div>`;
}

function renderInformasi() {
  return `<div class="page-layout">
    <div class="panel">
      <div class="panel-header"><h3>Semua Informasi Terbaru</h3><a>Refresh</a></div>
      <div class="filter-bar"><button class="chip active">Semua</button><button class="chip">Intelijen</button><button class="chip">Kriminal</button><button class="chip">Masyarakat</button><button class="chip">Petugas</button><button class="chip">OSINT</button><button class="chip">Panic</button></div>
      <div class="grid cols-2">${[...latest, ...latest].map(f => `<article class="feed-card"><div class="feed-meta"><span class="severity ${f.cls}">${f.sev}</span><span>${f.time}</span><span>• Jakarta Selatan</span></div><h4>${f.title}</h4><p>${f.body}</p><div style="margin-top:12px;display:flex;gap:8px;flex-wrap:wrap"><button class="btn small primary">Verifikasi</button><button class="btn small ghost">Tugaskan</button><button class="btn small ghost">Detail</button></div></article>`).join('')}</div>
    </div>
    <div class="grid">${alertPanel()}${timelinePanel()}</div>
  </div>`;
}

function renderPeta() {
  return `<div class="map-page-grid">
    ${globePanel('mapGlobeCanvas', true)}
    <div class="grid">
      <div class="panel"><div class="panel-header"><h3>Layer Peta</h3><a>Reset</a></div><div class="layer-grid">
        ${['Heatmap Intelijen','Heatmap Kriminal','Laporan Masyarakat','Panic Button','Unit Lapangan','Zona Rawan','CCTV/Pos Pantau','Jalur Patroli'].map((l, i) => `<label>${l}<input type="checkbox" ${i < 6 ? 'checked' : ''}></label>`).join('')}
      </div></div>
      ${areaPanel()}
      <div class="panel"><div class="panel-header"><h3>Legenda</h3></div><div class="stat-stack"><div class="mini-stat"><span>Merah</span><b>Kejadian Aktual</b></div><div class="mini-stat"><span>Kuning</span><b>Potensi Ancaman</b></div><div class="mini-stat"><span>Biru</span><b>Laporan Warga</b></div><div class="mini-stat"><span>Hijau</span><b>Unit Aktif</b></div></div></div>
    </div>
  </div>`;
}

function renderIntelijen() {
  return `<div class="page-layout">
    <div class="panel">
      <div class="panel-header"><h3>Basis Data Laporan Intelijen</h3><a>Import Data Lama</a></div>
      <div class="filter-bar"><button class="chip active">Aktif</button><button class="chip">Perlu Verifikasi</button><button class="chip">Terverifikasi</button><button class="chip">Dipantau</button><button class="chip">Ditutup</button></div>
      ${table(['Nomor','Tanggal','Lokasi','Jenis Ancaman','Validitas','Risiko','Status'], intelRows)}
    </div>
    <div class="panel"><div class="panel-header"><h3>Input Laporan Intelijen</h3></div>
      <div class="form-grid">
        <div class="input-group"><label>Jenis Ancaman</label><select><option>Potensi Tawuran</option><option>Narkoba</option><option>Unjuk Rasa</option><option>Konflik Sosial</option><option>Siber/Hoaks</option></select></div>
        <div class="input-group"><label>Lokasi</label><input placeholder="Kecamatan / Kelurahan / Titik" /></div>
        <div class="input-group"><label>Validitas Sumber</label><select><option>A1 - Sangat terpercaya</option><option>A2 - Terpercaya</option><option>B1 - Cukup terpercaya</option><option>B2 - Perlu pendalaman</option></select></div>
        <div class="input-group"><label>Ringkasan Informasi</label><textarea placeholder="Isi informasi intelijen singkat..."></textarea></div>
        <button class="btn primary">Simpan Draft Intelijen</button>
      </div>
    </div>
  </div>`;
}

function renderKriminal() {
  return `<div class="page-layout">
    <div class="panel">
      <div class="panel-header"><h3>Laporan Kriminal Aktual</h3><a>Sinkron e-LP</a></div>
      <div class="grid cols-4" style="margin-bottom:14px">
        ${kpi('⚑','LP Hari Ini','49','↑ 8 kasus')}${kpi('⌖','TKP Aktif','16','6 prioritas','amber')}${kpi('◉','Dalam Lidik','27','Reskrim aktif','purple')}${kpi('✓','Selesai','11','Hari ini')}
      </div>
      ${table(['Nomor LP','Waktu','Lokasi TKP','Jenis','Unit','Status Perkara','Keterkaitan'], crimeRows)}
    </div>
    <div class="grid">${chartPanel('Tren Kriminal Aktual')}<div class="panel"><div class="panel-header"><h3>Kategori Dominan</h3></div><div class="stat-stack"><div class="mini-stat"><span>Curanmor</span><b>31%</b></div><div class="mini-stat"><span>Tawuran</span><b>24%</b></div><div class="mini-stat"><span>Narkoba</span><b>19%</b></div><div class="mini-stat"><span>Penganiayaan</span><b>15%</b></div></div></div></div>
  </div>`;
}

function renderKorelasi() {
  const cards = [
    ['INT-014 Kelompok Bersenjata', 'LP-021 Gangguan Kamtibmas Papua', '86%', 'Lokasi sama, kategori sama, rentang waktu 12 jam, kata kunci kelompok cocok.'],
    ['INT-002 Potensi Unjuk Rasa', 'LP-011 Kerusuhan Makassar', '77%', 'Radius 800 meter, sumber A1, modus sesuai catatan intelijen.'],
    ['INT-001 Aktivitas Lintas Batas', 'LP-009 Penyelundupan Kalbar', '62%', 'Pola jam malam dan wilayah berdekatan, perlu pendalaman entitas.'],
  ];
  return `<div class="grid">
    <div class="grid cols-3">${kpi('⌁','Korelasi Ditemukan','18','6 prioritas tinggi')}${kpi('◎','Akurasi Intelijen','74%','Berdasarkan data terkait','purple')}${kpi('⚠','Butuh Pendalaman','9','Entitas belum lengkap','amber')}</div>
    <div class="panel"><div class="panel-header"><h3>Matrix Korelasi Intelijen - Kriminal</h3><a>Jalankan Analisis</a></div><div class="grid">${cards.map(c => `<div class="matrix correlation-card"><div class="node"><h4>${c[0]}</h4><p>Laporan intelijen / potensi ancaman</p></div><div class="link-score">${c[2]}</div><div class="node"><h4>${c[1]}</h4><p>${c[3]}</p></div></div>`).join('')}</div></div>
    <div class="grid cols-2">${chartPanel('Korelasi per Minggu')}<div class="panel"><div class="panel-header"><h3>Parameter Pencocokan</h3></div><div class="stat-stack"><div class="mini-stat"><span>Lokasi / radius</span><b>30%</b></div><div class="mini-stat"><span>Waktu kejadian</span><b>20%</b></div><div class="mini-stat"><span>Kategori / modus</span><b>20%</b></div><div class="mini-stat"><span>Entitas / kata kunci</span><b>20%</b></div><div class="mini-stat"><span>Validitas sumber</span><b>10%</b></div></div></div></div>
  </div>`;
}

function renderMasyarakat() {
  const rows = [
    ['MAS-001','03 Jul 2026 10:08','Anonim','Sanggau, Kalbar','Aktivitas mencurigakan lintas batas','Foto','Baru'],
    ['MAS-002','03 Jul 2026 08:55','Terverifikasi','Jayapura, Papua','Gangguan keamanan lokal','Video','Terverifikasi'],
    ['MAS-003','02 Jul 2026 22:22','Anonim','Ambon, Maluku','Keributan antarwarga','Tidak ada','Dipantau'],
    ['MAS-004','02 Jul 2026 19:44','Terverifikasi','Makassar, Sulsel','Dugaan transaksi narkoba','Foto','Diteruskan'],
  ];
  return `<div class="page-layout"><div class="panel"><div class="panel-header"><h3>Laporan Masyarakat</h3><a>Moderasi</a></div><div class="filter-bar"><button class="chip active">Semua</button><button class="chip">Anonim</button><button class="chip">Terverifikasi</button><button class="chip">Dengan Lampiran</button><button class="chip">Prioritas</button></div>${table(['ID','Waktu','Pelapor','Lokasi','Kategori','Lampiran','Status'], rows)}</div><div class="grid"><div class="panel"><div class="panel-header"><h3>Moderasi Cepat</h3></div><div class="stat-stack"><div class="mini-stat"><span>Menunggu verifikasi</span><b>27</b></div><div class="mini-stat"><span>Anonim aktif</span><b>14</b></div><div class="mini-stat"><span>Dengan bukti</span><b>33</b></div><div class="mini-stat"><span>Diteruskan ke unit</span><b>12</b></div></div></div>${timelinePanel()}</div></div>`;
}

function renderPanic() {
  return `<div class="grid">
    <div class="grid cols-3">
      ${kpi('!','Panic Aktif','2','Butuh respons segera','red')}${kpi('⌖','Unit Terdekat','5','Dalam radius 3 km','amber')}${kpi('⏱','Rata-rata Respons','06:42','Menit:detik')}
    </div>
    <div class="page-layout">
      <div class="panel"><div class="panel-header"><h3>Insiden Darurat Aktif</h3><a>Mode Operator</a></div><div class="grid cols-2">
        <div class="emergency-card"><h4>PANIC-0703-001 ${badge('Kritis')}</h4><p>Pelapor anonim • Jayapura, Papua • Lokasi bergerak aktif • Audio izin darurat aktif</p><div class="response-timer">00:04:18</div><div style="margin-top:12px;display:flex;gap:8px;flex-wrap:wrap"><button class="btn small primary">Tugaskan Unit</button><button class="btn small danger">Hubungi</button><button class="btn small ghost">Lihat Lokasi</button></div></div>
        <div class="emergency-card"><h4>PANIC-0703-002 ${badge('Tinggi')}</h4><p>Pelapor terverifikasi • Sanggau, Kalbar • Foto terlampir • Butuh validasi operator</p><div class="response-timer">00:08:51</div><div style="margin-top:12px;display:flex;gap:8px;flex-wrap:wrap"><button class="btn small primary">Tugaskan Unit</button><button class="btn small ghost">Lihat Lokasi</button></div></div>
      </div></div>
      <div class="grid">${globePanel('panicGlobeCanvas')}<div class="panel"><div class="panel-header"><h3>Protokol Privasi</h3></div><p class="panel-subtitle">Lokasi real-time, mikrofon, dan lampiran hanya aktif berdasarkan izin pengguna serta harus tercatat di audit log.</p></div></div>
    </div>
  </div>`;
}

function renderOperasi() {
  return `<div class="grid">
    <div class="grid cols-4">${kpi('◉','Unit Aktif','38','12 prioritas')}${kpi('⌖','Tugas Berjalan','21','5 kritis','red')}${kpi('⏱','ETA Rata-rata','07:12','Menit:detik')}${kpi('✓','Tugas Selesai','64','24 jam')}</div>
    <div class="page-layout"><div class="panel"><div class="panel-header"><h3>Board Penugasan Unit</h3><a>Tambah Tugas</a></div><div class="grid cols-2">${units.concat(units).map(u => `<div class="unit-row"><h4>${u[0]} ${badge(u[3])}</h4><p>${u[1]} • Status ${u[2]}</p><div style="margin-top:10px"><button class="btn small primary">Update</button> <button class="btn small ghost">Lihat Rute</button></div></div>`).join('')}</div></div><div class="grid">${globePanel('opsGlobeCanvas')}${timelinePanel()}</div></div>
  </div>`;
}

function renderAnalitik() {
  return `<div class="grid">
    <div class="grid cols-4">${kpi('◎','Skor Risiko Kota','72','Status Tinggi','amber')}${kpi('↗','Tren 7 Hari','↑ 18%','Naik signifikan','red')}${kpi('⌁','Anomali Terdeteksi','5','Butuh analisis')}${kpi('◈','Prediksi 24 Jam','8 area','Prioritas patroli','purple')}</div>
    <div class="grid cols-2">${chartPanel('Prediksi Risiko 7 Hari')}${chartPanel('Anomali Laporan per Jam')}</div>
    <div class="grid cols-3"><div class="panel"><div class="panel-header"><h3>Early Warning</h3></div><div class="stat-stack"><div class="mini-stat"><span>Papua</span><b>92</b></div><div class="mini-stat"><span>Kalimantan Barat</span><b>84</b></div><div class="mini-stat"><span>Poso, Sulteng</span><b>78</b></div></div></div><div class="panel"><div class="panel-header"><h3>Faktor Risiko</h3></div><div class="stat-stack"><div class="mini-stat"><span>Frekuensi laporan</span><b>30%</b></div><div class="mini-stat"><span>Kejadian aktual</span><b>28%</b></div><div class="mini-stat"><span>Validitas intelijen</span><b>22%</b></div></div></div><div class="panel"><div class="panel-header"><h3>Rekomendasi Sistem</h3></div><div class="alert-list"><div class="alert-item"><span class="pulse red"></span><b>Perkuat patroli perbatasan Papua pukul 21.00-03.00</b><span>1</span></div><div class="alert-item"><span class="pulse amber"></span><b>Validasi laporan siber nasional</b><span>2</span></div></div></div></div>
  </div>`;
}

function renderWilayah() {
  return `<div class="page-layout"><div class="panel"><div class="panel-header"><h3>Profil Wilayah Rawan</h3><a>Export Profil</a></div><div class="grid cols-2">${areaData.map(a => `<div class="area-row"><div><h4>${a[0]} ${badge(a[1])}</h4><p>${a[2]}</p><p style="margin-top:8px">Jam rawan: 21.00-02.00 • Kategori dominan: tawuran, curanmor, narkoba</p></div><div class="progress"><span style="width:${a[3]}%"></span></div></div>`).join('')}</div></div><div class="grid">${globePanel('areaGlobeCanvas')}<div class="panel"><div class="panel-header"><h3>Jam Rawan</h3></div><div class="stat-stack"><div class="mini-stat"><span>18.00-21.00</span><b>24%</b></div><div class="mini-stat"><span>21.00-00.00</span><b>38%</b></div><div class="mini-stat"><span>00.00-03.00</span><b>27%</b></div><div class="mini-stat"><span>03.00-06.00</span><b>11%</b></div></div></div></div></div>`;
}

function renderDokumen() {
  const docs = [
    ['Laporan Intelijen Mingguan Nasional','Rahasia • 03 Jul 2026 • 24 halaman','Kabaintelkam, Analis'],
    ['Analisis Korelasi Gangguan Keamanan Papua','Terbatas • 02 Jul 2026 • 11 halaman','Pimpinan, Operator'],
    ['Profil Risiko Perbatasan Kalbar','Terbatas • 01 Jul 2026 • 16 halaman','Analis, Polda'],
    ['Rekap Kamtibmas Nasional Bulanan','Internal • 30 Jun 2026 • 32 halaman','Semua role terkait'],
  ];
  return `<div class="page-layout"><div class="panel"><div class="panel-header"><h3>Secure Document Vault</h3><a>Upload Dokumen</a></div><div class="doc-list">${docs.map(d => `<div class="doc-row"><h4>${d[0]}</h4><p>${d[1]}</p><p>Akses: ${d[2]}</p><div style="margin-top:10px"><button class="btn small primary">Buka</button> <button class="btn small ghost">Watermark</button> <button class="btn small ghost">Riwayat</button></div></div>`).join('')}</div></div><div class="grid"><div class="panel"><div class="panel-header"><h3>Keamanan Dokumen</h3></div><div class="stat-stack"><div class="mini-stat"><span>Watermark aktif</span><b>Ya</b></div><div class="mini-stat"><span>Download dibatasi</span><b>Ya</b></div><div class="mini-stat"><span>Audit akses</span><b>100%</b></div><div class="mini-stat"><span>Enkripsi</span><b>AES</b></div></div></div>${timelinePanel()}</div></div>`;
}

function renderPengguna() {
  const roles = [
    ['Pimpinan','Melihat ringkasan, laporan strategis, rekomendasi keputusan.',['Dashboard pimpinan','Laporan rahasia tertentu','Export ringkas']],
    ['Admin Sistem','Mengelola pengguna, integrasi, konfigurasi, dan audit.',['Manajemen user','Pengaturan','Audit log']],
    ['Analis Intelijen','Melakukan analisis, korelasi, scoring, dan laporan intelijen.',['Korelasi data','Dokumen intelijen','Analitik risiko']],
    ['Operator','Memverifikasi laporan, menugaskan unit, dan update status.',['Laporan masuk','Panic button','Dispatch']],
  ];
  return `<div class="grid"><div class="grid cols-4">${kpi('◍','Pengguna Aktif','84','Online 26')}${kpi('▣','Role','6','Berbasis jabatan')}${kpi('☷','Audit Hari Ini','1.248','Aktivitas')}${kpi('⚠','Akses Ditolak','7','Percobaan')}</div><div class="role-grid">${roles.map(r => `<div class="role-card"><h4>${r[0]}</h4><p>${r[1]}</p><ul>${r[2].map(x => `<li>${x}</li>`).join('')}</ul><button class="btn small ghost">Atur Hak Akses</button></div>`).join('')}</div><div class="panel"><div class="panel-header"><h3>Daftar Pengguna</h3><a>Tambah User</a></div>${table(['Nama','Role','Unit','Status','Login Terakhir','MFA'], [['AKP Pratama','Pimpinan','Polres','Aktif','03 Jul 10:05','Aktif'],['Bripka Satria','Operator','Command Center','Aktif','03 Jul 10:22','Aktif'],['Analis Nadia','Analis Intelijen','Intelkam','Aktif','03 Jul 09:58','Aktif'],['Admin Sistem','Admin','TIK','Aktif','03 Jul 09:40','Aktif']])}</div></div>`;
}

function renderAudit() {
  const audit = [
    ['03 Jul 2026 10:22','Bripka Satria','Update status PANIC-0703-001','Panic Button','Berhasil'],
    ['03 Jul 2026 10:18','Analis Nadia','Membuka dokumen analisis Papua','Dokumen','Berhasil'],
    ['03 Jul 2026 10:11','Admin Sistem','Mengubah hak akses operator','Pengguna','Berhasil'],
    ['03 Jul 2026 09:55','User tidak dikenal','Percobaan akses dokumen rahasia','Dokumen','Ditolak'],
    ['03 Jul 2026 09:41','AKP Pratama','Export ringkasan wilayah','Beranda','Berhasil'],
  ];
  return `<div class="page-layout"><div class="panel"><div class="panel-header"><h3>Audit Log Sistem</h3><a>Export Log</a></div><div class="filter-bar"><button class="chip active">Semua</button><button class="chip">Berhasil</button><button class="chip">Ditolak</button><button class="chip">Dokumen</button><button class="chip">Pengguna</button></div>${table(['Waktu','Pengguna','Aktivitas','Modul','Status'], audit)}</div><div class="grid"><div class="panel"><div class="panel-header"><h3>Ringkasan Audit</h3></div><div class="stat-stack"><div class="mini-stat"><span>Total aktivitas</span><b>1.248</b></div><div class="mini-stat"><span>Akses dokumen</span><b>218</b></div><div class="mini-stat"><span>Perubahan data</span><b>74</b></div><div class="mini-stat"><span>Akses ditolak</span><b>7</b></div></div></div>${chartPanel('Aktivitas Sistem')}</div></div>`;
}

function renderPengaturan() {
  return `<div class="grid cols-2"><div class="panel"><div class="panel-header"><h3>Konfigurasi Sistem</h3></div><div class="form-grid"><div class="input-group"><label>Nama Instansi</label><input value="Mabes Polri — Baintelkam" /></div><div class="input-group"><label>Zona Waktu</label><select><option>Asia/Jakarta - WIB</option></select></div><div class="input-group"><label>Mode Dashboard</label><select><option>Real-time</option><option>Simulasi</option><option>Maintenance</option></select></div><div class="input-group"><label>Default Radius Korelasi</label><input value="1500 meter" /></div><button class="btn primary">Simpan Pengaturan</button></div></div><div class="panel"><div class="panel-header"><h3>Integrasi Data</h3></div><div class="stat-stack"><div class="mini-stat"><span>Laporan Intelijen Lama</span><b>Aktif</b></div><div class="mini-stat"><span>Database Kriminal</span><b>Aktif</b></div><div class="mini-stat"><span>Android Panic Button</span><b>Aktif</b></div><div class="mini-stat"><span>OSINT Monitoring</span><b>Draft</b></div><div class="mini-stat"><span>GIS / Map Service</span><b>Aktif</b></div></div></div><div class="panel"><div class="panel-header"><h3>Keamanan</h3></div><div class="layer-grid"><label>Multi Factor Authentication<input type="checkbox" checked></label><label>Watermark Dokumen<input type="checkbox" checked></label><label>Masking Identitas Pelapor<input type="checkbox" checked></label><label>Pembatasan Export<input type="checkbox" checked></label><label>Audit Log Wajib<input type="checkbox" checked></label></div></div><div class="panel"><div class="panel-header"><h3>Skema Tingkat Ancaman</h3></div><div class="stat-stack"><div class="mini-stat"><span>0-30</span><b>Rendah</b></div><div class="mini-stat"><span>31-60</span><b>Sedang</b></div><div class="mini-stat"><span>61-80</span><b>Tinggi</b></div><div class="mini-stat"><span>81-100</span><b>Kritis</b></div></div></div></div>`;
}

const renderers = {
  beranda: renderBeranda,
  informasi: renderInformasi,
  peta: renderPeta,
  intelijen: renderIntelijen,
  kriminal: renderKriminal,
  korelasi: renderKorelasi,
  masyarakat: renderMasyarakat,
  panic: renderPanic,
  operasi: renderOperasi,
  analitik: renderAnalitik,
  wilayah: renderWilayah,
  dokumen: renderDokumen,
  pengguna: renderPengguna,
  audit: renderAudit,
  pengaturan: renderPengaturan,
};

function renderPage(id) {
  setHeader(id);
  document.body.dataset.page = id;
  const content = document.getElementById('pageContent');
  content.innerHTML = renderers[id] ? renderers[id]() : renderBeranda();
  setTimeout(initCanvases, 50);
}

function initCanvases() {
  document.querySelectorAll('canvas.globe-canvas').forEach((canvas, idx) => drawGlobe(canvas, idx));
  document.querySelectorAll('canvas.indo-canvas').forEach((canvas) => drawIndoMap(canvas));
}

function drawGlobe(canvas, seed = 0) {
  const rect = canvas.parentElement.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  canvas.width = Math.max(320, rect.width) * dpr;
  canvas.height = Math.max(280, rect.height) * dpr;
  const ctx = canvas.getContext('2d');
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  const w = rect.width;
  const h = rect.height;
  ctx.clearRect(0, 0, w, h);
  const cx = w * .52;
  const cy = h * .53;
  const r = Math.min(w, h) * .36;

  // Background grid
  ctx.strokeStyle = 'rgba(64,156,255,.07)';
  ctx.lineWidth = 1;
  for (let x = 0; x < w; x += 46) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke(); }
  for (let y = 0; y < h; y += 46) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke(); }

  // Globe glow
  const glow = ctx.createRadialGradient(cx, cy, r*.15, cx, cy, r*1.4);
  glow.addColorStop(0, 'rgba(64,156,255,.25)');
  glow.addColorStop(.68, 'rgba(41,215,255,.07)');
  glow.addColorStop(1, 'rgba(41,215,255,0)');
  ctx.fillStyle = glow;
  ctx.beginPath(); ctx.arc(cx, cy, r*1.45, 0, Math.PI*2); ctx.fill();

  // Sphere
  const sphere = ctx.createRadialGradient(cx-r*.38, cy-r*.42, r*.2, cx, cy, r);
  sphere.addColorStop(0, '#16395c');
  sphere.addColorStop(.45, '#0b223a');
  sphere.addColorStop(1, '#030914');
  ctx.fillStyle = sphere;
  ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI*2); ctx.fill();
  ctx.strokeStyle = 'rgba(41,215,255,.62)'; ctx.lineWidth = 2; ctx.stroke();

  // Lat long ellipses
  ctx.save(); ctx.translate(cx, cy);
  ctx.strokeStyle = 'rgba(105,173,255,.18)'; ctx.lineWidth = 1;
  for (let i=-3; i<=3; i++) { ctx.beginPath(); ctx.ellipse(0, i*r/5, r*Math.sqrt(1-(i/5)**2), r*.13, 0, 0, Math.PI*2); ctx.stroke(); }
  for (let i=0; i<8; i++) { ctx.beginPath(); ctx.ellipse(0, 0, r*.23, r, i*Math.PI/8, 0, Math.PI*2); ctx.stroke(); }
  ctx.restore();

  // Stylized landmass strokes
  ctx.strokeStyle = 'rgba(140,220,255,.32)'; ctx.lineWidth = 1.5;
  for (let i=0; i<12; i++) {
    const start = (i * 31 + seed*11) * Math.PI/180;
    ctx.beginPath();
    for (let t=0; t<1; t+=.05) {
      const a = start + t * 1.4;
      const rr = r * (.35 + .32*Math.sin(t*7 + i));
      const x = cx + Math.cos(a) * rr;
      const y = cy + Math.sin(a) * rr * .68 + Math.sin(i)*16;
      if (t === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.stroke();
  }

  // Hotspots and arcs
  const pts = [
    [cx-r*.45, cy+r*.08, '#ff4d5f', 1], [cx-r*.2, cy-r*.25, '#ffd15c', .8], [cx+r*.1, cy-r*.12, '#ff9346', .9], [cx+r*.34, cy+r*.02, '#28e7a3', .7], [cx+r*.18, cy+r*.28, '#ff4d5f', 1], [cx-r*.04, cy+r*.1, '#29d7ff', .75], [cx+r*.52, cy-r*.22, '#ffd15c', .7]
  ];
  pts.forEach((p, i) => {
    const [x,y,color,scale] = p;
    const rg = ctx.createRadialGradient(x, y, 0, x, y, 26*scale);
    rg.addColorStop(0, color); rg.addColorStop(.35, color + 'bb'); rg.addColorStop(1, color + '00');
    ctx.fillStyle = rg; ctx.beginPath(); ctx.arc(x,y,30*scale,0,Math.PI*2); ctx.fill();
    ctx.strokeStyle = color; ctx.lineWidth = 1; ctx.beginPath(); ctx.arc(x,y,10*scale,0,Math.PI*2); ctx.stroke();
    ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(x,y,2.5*scale,0,Math.PI*2); ctx.fill();
    for (let j=i+1; j<pts.length; j+=3) drawArc(ctx, x, y, pts[j][0], pts[j][1], i % 2 ? 'rgba(41,215,255,.45)' : 'rgba(255,147,70,.36)');
  });
}

function drawArc(ctx, x1, y1, x2, y2, color) {
  const mx = (x1+x2)/2;
  const my = (y1+y2)/2 - Math.abs(x1-x2)*.18 - 20;
  ctx.strokeStyle = color;
  ctx.lineWidth = 1.2;
  ctx.beginPath(); ctx.moveTo(x1,y1); ctx.quadraticCurveTo(mx,my,x2,y2); ctx.stroke();
}

// Titik panas heatmap 24 jam pada koordinat asli: [lon, lat, warna, skala]
const INDO_HOTSPOTS = [
  [110.60, 0.13, '#ff4d5f', 1.0],   // Sanggau, Kalbar
  [140.70, -2.53, '#ff4d5f', 1.0],  // Jayapura, Papua
  [106.83, -6.20, '#ff9346', 0.9],  // DKI Jakarta
  [120.75, -1.40, '#ffd15c', 0.85], // Poso, Sulteng
  [127.38, 0.79, '#ffd15c', 0.8],   // Ternate, Malut
  [98.67, 3.59, '#29d7ff', 0.7],    // Deli Serdang, Sumut
  [119.42, -5.15, '#409cff', 0.7],  // Makassar, Sulsel
  [116.10, -8.58, '#409cff', 0.6],  // Nusa Tenggara
];

// Peta Indonesia dari GeoJSON asli (window.INDONESIA_GEO), proyeksi equirectangular.
function drawIndoMap(canvas) {
  const rect = canvas.parentElement.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  const w = Math.max(300, rect.width);
  const h = Math.max(170, rect.height);
  canvas.width = w * dpr;
  canvas.height = h * dpr;
  const ctx = canvas.getContext('2d');
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, w, h);

  // Grid latar
  ctx.strokeStyle = 'rgba(64,156,255,.06)';
  ctx.lineWidth = 1;
  for (let gx = 0; gx < w; gx += 34) { ctx.beginPath(); ctx.moveTo(gx, 0); ctx.lineTo(gx, h); ctx.stroke(); }
  for (let gy = 0; gy < h; gy += 34) { ctx.beginPath(); ctx.moveTo(0, gy); ctx.lineTo(w, gy); ctx.stroke(); }

  const geo = window.INDONESIA_GEO;
  if (!geo || !geo.rings) return;

  // Proyeksi equirectangular yang mempertahankan aspek rasio, di-fit ke canvas.
  const [minLon, minLat, maxLon, maxLat] = geo.bbox;
  const spanLon = maxLon - minLon, spanLat = maxLat - minLat;
  const pad = 8;
  const scale = Math.min((w - 2 * pad) / spanLon, (h - 2 * pad) / spanLat);
  const offX = (w - spanLon * scale) / 2;
  const offY = (h - spanLat * scale) / 2;
  const projX = (lon) => offX + (lon - minLon) * scale;
  const projY = (lat) => offY + (maxLat - lat) * scale;

  // Gambar pulau
  ctx.beginPath();
  geo.rings.forEach((ring) => {
    ring.forEach((pt, i) => {
      const x = projX(pt[0]), y = projY(pt[1]);
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    });
    ctx.closePath();
  });
  ctx.fillStyle = 'rgba(41,215,255,.10)';
  ctx.fill();
  ctx.strokeStyle = 'rgba(41,215,255,.32)';
  ctx.lineWidth = 0.7;
  ctx.stroke();

  // Titik panas
  INDO_HOTSPOTS.forEach((p) => {
    const x = projX(p[0]), y = projY(p[1]), color = p[2], s = p[3];
    const rg = ctx.createRadialGradient(x, y, 0, x, y, 20 * s);
    rg.addColorStop(0, color);
    rg.addColorStop(0.4, color + 'aa');
    rg.addColorStop(1, color + '00');
    ctx.fillStyle = rg;
    ctx.beginPath(); ctx.arc(x, y, 20 * s, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.beginPath(); ctx.arc(x, y, 1.8 * s, 0, Math.PI * 2); ctx.fill();
  });
}

function updateClock() {
  const now = new Date();
  const dateFmt = new Intl.DateTimeFormat('id-ID', { weekday:'long', day:'numeric', month:'long', year:'numeric', timeZone:'Asia/Jakarta' });
  const timeFmt = new Intl.DateTimeFormat('id-ID', { hour:'2-digit', minute:'2-digit', second:'2-digit', hour12:false, timeZone:'Asia/Jakarta' });
  document.getElementById('dateText').textContent = dateFmt.format(now);
  document.getElementById('timeText').textContent = `${timeFmt.format(now).replaceAll('.', ':')} WIB`;
}

function bindSearch() {
  const input = document.getElementById('globalSearch');
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && input.value.trim()) {
      const query = escapeHtml(input.value.trim());
      document.getElementById('pageContent').insertAdjacentHTML('afterbegin', `<div class="panel" style="margin-bottom:16px"><div class="panel-header"><h3>Hasil pencarian untuk “${query}”</h3><a>3 hasil simulasi</a></div><div class="grid cols-3"><div class="feed-card"><h4>Laporan terkait ${query}</h4><p>Simulasi hasil pencarian lintas modul: intelijen, kriminal, dan wilayah.</p></div><div class="feed-card"><h4>Korelasi ditemukan</h4><p>Sistem menemukan kandidat hubungan berdasarkan kata kunci dan lokasi.</p></div><div class="feed-card"><h4>Area relevan</h4><p>Wilayah yang mengandung kata kunci ditampilkan pada peta.</p></div></div></div>`);
      input.value = '';
    }
  });
}

window.addEventListener('resize', () => setTimeout(initCanvases, 100));
document.getElementById('mobileToggle').addEventListener('click', () => document.getElementById('sidebar').classList.toggle('open'));

// Kode akses hanya gerbang kosmetik sisi-client untuk prototype (data simulasi).
// Bukan keamanan sungguhan: kode sumber terlihat publik. Jangan pakai untuk data nyata.
const ACCESS_CODE = 'mlebubae';
const AUTH_KEY = 'si-intelpol-auth';

let appStarted = false;
function startApp() {
  if (appStarted) return;
  appStarted = true;
  buildNav();
  window.addEventListener('hashchange', route);
  route();
  updateClock();
  setInterval(updateClock, 1000);
  bindSearch();
}

function unlock(gate) {
  sessionStorage.setItem(AUTH_KEY, '1');
  gate.classList.add('hidden');
  startApp();
}

function initAuthGate() {
  const gate = document.getElementById('authGate');
  const form = document.getElementById('authForm');
  const card = form.querySelector('.auth-card');
  const codeInput = document.getElementById('authCode');
  const errorText = document.getElementById('authError');

  if (sessionStorage.getItem(AUTH_KEY) === '1') {
    unlock(gate);
    return;
  }

  codeInput.focus();
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (codeInput.value.trim().toLowerCase() === ACCESS_CODE) {
      errorText.textContent = '';
      unlock(gate);
    } else {
      errorText.textContent = 'Kode akses salah. Coba lagi.';
      card.classList.remove('shake');
      void card.offsetWidth; // reflow agar animasi bisa diputar ulang
      card.classList.add('shake');
      codeInput.select();
    }
  });
}

initAuthGate();
