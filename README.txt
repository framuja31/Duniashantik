OUR LOVE STORY — SHANTIK
Pink Love Diary · Motion Frames Edition · 21 Oktober 2026

Isi:
- index.html: website siap dibuka langsung
- assets/photos: 9 foto galeri
- assets/videos: 1 video kenangan (di luar video animasi)
- assets/romantic-music.mp3: lagu backsound lama
- assets/chibi2: 12 frame transparan untuk setiap motion (walk, flower, hug, sit, heart)
  dan 12 ekspresi karakter perempuan solo.
- RANCANGAN_IMPLEMENTASI.md: konsep desain dan pemeriksaan fitur

DEploy NETLIFY (proyek shantiunivers)
1. Ekstrak ZIP dahulu.
2. Pastikan index.html berada di dalam folder teratas bersama folder assets.
3. Di Netlify, buka proyek shantiunivers > Deploys > manual deploy.
4. Unggah folder hasil ekstrak, bukan folder induk yang berlapis.
5. Sesudah deploy berhasil, buka https://shantiunivers.netlify.app/
6. Di Safari iPhone dan Android Chrome, cek langkah chibi, pelukan galeri,
   Mesin Kejutan Cinta, surat Open When, Love Assistant, Final Surprise, audio & video.

CATATAN
- Website ini adalah static site: tidak memerlukan npm/build.
- Musik hanya mulai setelah pengguna menyentuh tombol play karena kebijakan browser.
- Chibi 2.5D memakai pergantian frame gambar WebP transparan, bukan model 3D.
- Animasi mengikuti prefers-reduced-motion. Tidak ada bagian Timeline.
- Status Netlify online tidak diubah secara otomatis oleh file ZIP ini.
