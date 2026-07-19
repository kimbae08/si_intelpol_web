# SI-INTELPOL — Prototipe Dashboard Intelijen Kepolisian

Prototipe web (konsep UI/UX) untuk sistem informasi intelijen kepolisian terintegrasi.
Dibangun dengan **HTML, CSS, dan JavaScript murni** — tanpa dependency, tanpa build step,
tanpa backend. Seluruh data yang tampil adalah **data dummy/simulasi**.

> ⚠️ **Status: Prototype.** Belum terhubung ke database/API dan belum memiliki autentikasi.
> Jangan gunakan untuk data operasional nyata.

## ✨ Fitur (tampilan)

Navigasi SPA (Single Page Application) dengan menu:

- Beranda / Command Center
- Informasi Terbaru (Intelligence Feed)
- Peta Intelijen / Globe Heatmap
- Laporan Intelijen
- Laporan Kriminal
- Korelasi Data (Intelijen × Kriminal)
- Laporan Masyarakat
- Panic Button (Emergency Response)
- Operasi & Penugasan (Dispatch)
- Analitik Risiko (Predictive)
- Wilayah Rawan
- Dokumen Intelijen (Secure Vault)
- Pengguna & Hak Akses (RBAC)
- Audit Log
- Pengaturan Sistem

## 🚀 Cara menjalankan

Cukup buka `index.html` di browser.

Atau jalankan lewat server statis lokal (disarankan agar semua fitur mulus):

```bash
# Python 3
python3 -m http.server 8080
# lalu buka http://localhost:8080

# atau Node
npx serve .
```

## 🧭 Routing

Navigasi memakai **hash routing** (`index.html#peta`, `#kriminal`, dst.), sehingga:

- Halaman bisa di-*refresh* tanpa kembali ke Beranda.
- URL bisa dibagikan sebagai *deep link* ke menu tertentu.
- Tombol back/forward browser berfungsi.

## 📁 Struktur

```
si_intelpol_web/
├── index.html   # Kerangka halaman + template grafik (SVG)
├── styles.css   # Tema gelap/futuristik, layout & komponen
└── app.js       # Data dummy, router hash, render halaman, globe canvas
```

## 🔒 Catatan untuk implementasi nyata

Prototipe ini fokus pada UI/UX. Untuk produksi diperlukan:

- Autentikasi + Multi-Factor Authentication
- Role-Based Access Control (RBAC) yang ditegakkan di server
- Audit log sisi server (bukan hanya tampilan)
- Enkripsi data at-rest & in-transit
- Database + API backend
- Integrasi GIS / peta sungguhan
- Validasi & sanitasi input menyeluruh di boundary sistem

## 📄 Lisensi

Lihat berkas [LICENSE](./LICENSE).
