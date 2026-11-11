# Our Love Story — Shantik · Tahap 6

**Versi:** Master UI V4 + Pelukan Rindu 2.0 Video Integration (V6)
**Tanggal:** 8 November 2026
**Status:** Paket Netlify siap diuji dan dideploy secara manual; website online belum diubah.

## Perubahan

Hanya animasi pada bagian **Penghitung Waktu Bersama** yang diganti:

- Intro video 5,04 detik (720p, 24 FPS, MP4 H.264), dari hasil Tahap 5 yang sudah mencakup efek Tiny Floating Hearts.
- Idle loop video 5,58 detik (720p, 24 FPS, MP4 H.264), tanpa mengulang adegan berlari.
- Transisi intro ke idle dibuat sebagai dua video bertumpuk dengan pergantian opacity singkat.
- Tombol "Ketuk untuk peluk lagi ♡" memutar ulang intro, lalu otomatis kembali ke idle.
- Video baru dimuat ketika bagian penghitung waktu terlihat, berhenti saat keluar viewport atau tab disembunyikan, dan dilanjutkan ketika kembali.
- Video tanpa audio agar tidak mengganggu musik romantis website.
- Pengguna yang memilih `prefers-reduced-motion: reduce` melihat poster pelukan statis.
- Jika video gagal dimuat, tersedia poster fallback.
- Tata letak video 16:9 di desktop dan crop 4:3 di layar kecil agar karakter lebih terlihat.

## File baru

- `assets/videos/shantik-pelukan-intro-v6.mp4`
- `assets/videos/shantik-pelukan-idle-v6.mp4`
- `assets/videos/shantik-pelukan-start-v6.webp`
- `assets/videos/shantik-pelukan-hug-v6.webp`
- `assets/counter-video-v6.css`
- `assets/counter-video-v6.js`

`index.html` diubah **hanya** pada bagian HTML penghitung waktu, pengendali animasi counter lama, serta penambahan referensi CSS/JS baru. Aset chibi frame lama tetap ada sebagai cadangan dan untuk animasi lain.

## Tidak berubah

Tanggal jadian 1 Juli 2026, semua 12 entri galeri, media foto/video, musik, surat cinta, Open When Letters, Mood Check, Love Surprise Machine, Chibi Assistant, Final Surprise, animasi Hero, animasi galeri, navigasi, dan desain Master UI V4. Timeline tetap tidak ada.

## Cara mencoba secara lokal

1. Ekstrak ZIP ke satu folder.
2. Buka `index.html` pada browser modern atau jalankan server lokal sederhana (`python -m http.server 8000`).
3. Gulir ke **Sejak hari itu, kita** / Penghitung Waktu Bersama.
4. Saat bagian terlihat, Intro diputar sekali; setelah selesai, Idle berulang.
5. Ketuk video untuk memutar ulang. Gulir keluar lalu kembali untuk memeriksa jeda/lanjut.
6. Periksa Safari iPhone dan Chrome Android, termasuk mode hemat daya dan reduced-motion.

## Cara deploy ke Netlify

1. Ekstrak ZIP.
2. Masuk ke proyek Netlify Shantik yang benar, buka **Deploys**.
3. Gunakan manual deploy dan unggah folder hasil ekstrak dengan `index.html` di akar folder.
4. Tunggu deployment selesai, kemudian uji kembali halaman online.

**Tidak ada deploy otomatis yang dilakukan dalam Tahap 6.**

## Batas pengujian

Pemeriksaan statis HTML/CSS/JS, decoding video, kesesuaian frame intro–idle, keberadaan semua aset, serta simulasi logika player lulus. Browser visual end-to-end di lingkungan kerja ini tidak dapat diselesaikan karena akses navigasi browser dibatasi. Safari iPhone dan Chrome Android di perangkat asli belum diuji.
