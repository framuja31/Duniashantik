# Our Love Story — Shantik · Rancangan Final Motion Picture

Konsep: **Pink Love Diary × Cute Cinematic Couple**. Semua karakter baru bersumber dari gambar yang diunggah pengguna, memakai baju hitam/abu dengan hijab hitam dan kacamata. Semua gambar pasangan diolah dari 5 lembar motion picture berisi 12 frame per gerakan, tanpa membuat karakter baru. Tiap frame berupa WebP transparan, tidak ada blok gambar putih/hitam.

## Penempatan

1. **Hero — Walk Together.** Berjalan bergandengan tangan, 12 frame berulang sekitar 8 FPS. Diberi gerak horizontal kecil dan tombol untuk mengganti bubble teks. Berhenti saat elemen tidak terlihat dalam viewport.
2. **Galeri — Warm Hug Frame.** Miniatur pasangan berada pada tepi polaroid pertama tanpa menutup foto utama. Ketika disentuh, animasi 12 frame berpelukan dijalankan; sentuhan berikutnya kembali ke pose duduk.
3. **Mesin Kejutan Cinta.** Pesan tetap acak seperti versi sebelumnya. Pose pasangan menyesuaikan isi pesan (rangkaian bunga, bentuk hati, duduk, jalan, pelukan), setiap rangkaian 12 frame pada sekitar 8 FPS.
4. **Open When Letters.** Karakter perempuan solo yang disesuaikan dengan mood muncul di bagian atas surat yang dibuka. Tidak ditambahkan section baru.
5. **Love Assistant.** Karakter perempuan solo dengan ekspresi berganti ketika pesan lain dipilih. Pada HP kecil tampil sebagai tombol pendek tanpa label mengambang agar tidak menghalangi galeri.
6. **Final Surprise.** Pasangan duduk berdampingan di atas dekorasi awan halus; ketukan menampilkan rangkaian pelukan dan teks hangat. Bisa kembali ke pose duduk.

## Tetap ada
Galeri 9 foto, 1 video, musik original, surat cinta, Open When Letters, hari jadian sejak 1 Juli 2026, animasi hati, pilihan mood, Mesin Kejutan Cinta, dan The Final Surprise. **Tidak ada Timeline Perjalanan Cinta.**

## Ketentuan kualitas
- Tidak ada background kotak pada chibi; alpha WebP transparan.
- Frame gambar memakai transform/opacity ringan; tidak memerlukan WebGL.
- Semua tombol diaktifkan dengan event click standar, tanpa touchend preventDefault, ramah Safari dan Android.
- Video menggunakan playsinline, musik memerlukan tindakan pengguna untuk play.
- Ada dukungan prefers-reduced-motion dan optimasi pembacaan gambar untuk mobile.
- Uji sintaks JavaScript, semua referensi media dalam ZIP, dan simulasi viewport seluler sebelum deploy. Browser iOS fisik perlu diuji ulang setelah online.


## Update Album 4 — ganti semua foto
- Seluruh foto lama Album 4 dihapus.
- Album 4 sekarang memakai 7 foto baru user.
- Cover album memakai foto baru (tanpa mengubah animasi chibi gaming 24 frame saat album dibuka).
- Jumlah item album diupdate menjadi 7 foto.
