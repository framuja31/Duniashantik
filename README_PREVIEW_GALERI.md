# Shantik — Galeri Kenangan Preview

Dasar: **Our Love Story — Shantik V6, Style Asli + Kalimat Baru**.

Status: **PREVIEW SAJA. BELUM DEPLOY.**

## Apa yang berubah

Hanya bagian **Galeri Kenangan** (`#gallery`):
- 10 media galeri (9 foto + 1 video) dikelompokkan menjadi 5 album kecil. Album Kopi Kenangan dihapus sesuai permintaan.
- Sampul scrapbook berlapis dengan Polaroid, washi tape, stiker hati, dan lima chibi asli.
- Album dibuka sebagai viewer interaktif: cerita, tanggal, foto/video asli, tombol panah, tombol tutup, dan swipe di HP.
- Desktop: grid album tidak simetris. Mobile: geser horizontal dengan indikator posisi.
- Pratinjau video pada sampul berasal dari frame video asli, bukan media pengganti.

## Yang tidak berubah

Semua kode HTML di luar bagian `#gallery` identik dengan V6 asli (selain penambahan dua referensi file CSS/JS khusus galeri). Seluruh file lama selain `index.html` identik byte-per-byte. Tidak ada foto, video, audio, aset chibi, tanggal jadian, tulisan hero, atau fitur lain yang diganti. Tidak ada fitur Timeline baru.

## File baru

- `assets/gallery-albums-v1.css`
- `assets/gallery-albums-v1.js`
- `assets/gallery-previews/*.jpg` (3 thumbnail yang diekstrak dari video asli)

## Cara menguji

Ekstrak ZIP, jalankan situs dengan server lokal statis (contoh: `python -m http.server 8000` dari folder hasil ekstrak), lalu buka `http://localhost:8000/#gallery`. Buka keenam album, coba tombol navigasi, swipe, serta pemutaran video. Untuk deploy nanti, gunakan isi ZIP sebagai root Netlify setelah preview disetujui.

QA: struktur asli di luar galeri diperiksa; keenam album, viewer foto/video, navigasi, tombol tutup, Escape, indikator mobile, serta overflow pada lebar 390 dan 1440 px diuji di Chromium. Pengujian perangkat iPhone Safari dan Android fisik belum dilakukan.
