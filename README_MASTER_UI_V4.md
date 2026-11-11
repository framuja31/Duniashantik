# OUR LOVE STORY — SHANTIK
## Master UI Update V4: Pink Love Diary 2.0

**Tanggal pembuatan:** 8 November 2026  
**Dasar:** `Our_Love_Story_Shantik_Pink_Diary_Motion_V3_Netlify.zip`  
**Status:** Versi terpisah untuk pengujian/pratinjau. **Belum dipublikasikan ke situs online.**

### Yang diperbarui

- Tampilan Hero disusun menjadi dua kolom di desktop: pesan romantis dan panggung ilustrasi chibi; menjadi satu kolom pada mobile.
- Palet pink-cream, tipografi editorial, spasi, sudut kartu, permukaan kertas, bayangan dan tombol dirapikan secara konsisten.
- Galeri bergaya scrapbook diperlebar ke tiga kolom pada desktop, dua kolom pada tablet, dan satu kolom pada mobile sempit agar cerita/foto mudah dibaca.
- Kartu penghitung hari, Mood Check, Mesin Kejutan, Open When Letters, Surat Cinta, dan Final Surprise mendapatkan penyempurnaan tampilan.
- Navigasi pada ponsel yang sebelumnya tidak terlihat sekarang punya tombol menu yang dapat dibuka/ditutup, mendukung Escape, klik di luar, dan penutupan setelah memilih tautan.
- Fokus keyboard dan reduced-motion dipertahankan. Tidak ada data kenangan, foto, video, audio, atau frame chibi yang diganti.

### Yang sengaja tidak diubah

- Tanggal mulai hubungan **1 Juli 2026**.
- Semua 10 entri galeri (9 foto dan 1 video), musik MP3, surat cinta, empat Open When Letters, Mood Check, Love Surprise Machine, semua animasi frame chibi, Chibi Love Assistant, dan Final Surprise.
- Tidak ada Timeline.
- JavaScript asli V3 dipertahankan *tanpa modifikasi*; sebuah skrip kecil tambahan digunakan hanya untuk menu mobile.

### Struktur penting

- `index.html` — halaman utama, CSS dan JS versi lama tetap berada di dalamnya.
- `assets/master-ui-v4.css` — lapisan CSS pembaruan antarmuka.
- `assets/master-ui-v4.js` — logika tombol menu mobile yang baru.
- `assets/` lainnya — media asli dari versi V3.

### Cara melakukan preview terlebih dahulu

1. Ekstrak ZIP, lalu buka `index.html` dalam browser modern atau gunakan server lokal sederhana.
2. Periksa versi desktop dan tampilan di ponsel, terutama menu, galeri, video, musik, tombol kejutan, surat, dan chibi.
3. Untuk menguji deployment Netlify, gunakan fitur **Deploys** pada proyek Netlify yang sudah ada dan ikuti alur pratinjau sebelum menerapkan ke produksi.
4. Jika menyetujui UI baru, unggah folder ekstraksi (yang berisi `index.html` dan `assets/`) melalui metode deployment proyekmu. Jangan unggah ZIP mentah jika Netlify Drop meminta folder ekstraksi.

### Batas pengujian

Pengujian fungsional lokal menggunakan Chromium headless di lebar 320, 375, 390, 412, 560, 768, 1024, dan 1440 px. Tidak ditemukan overflow horizontal atau exception JS. Semua ID lama ada, file aset ada dan JavaScript utama identik. Mood, kejutan, surat, final, assistant, dan menu mobile lulus pengujian lokal. Safari iPhone dan Chrome Android **di perangkat asli** belum diuji. Suara aktual, seluruh durasi pemutaran video, dan metrik Lighthouse juga belum diverifikasi.

### Catatan keamanan perubahan

Ini salinan baru. Source ZIP V3 tidak diubah, dan website Netlify yang sedang online tidak disentuh. Jika kamu ingin kembali ke V3, gunakan ZIP V3 asli yang tersimpan di Library.
