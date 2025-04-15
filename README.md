# Aplikasi Catatan Sederhana

Aplikasi backend sederhana untuk mencatat (CRUD catatan) menggunakan Node.js, Express, dan penyimpanan berbasis file JSON.

## Fitur

- Tambah catatan baru
- Lihat semua catatan
- Lihat detail catatan berdasarkan ID
- Ubah catatan berdasarkan ID
- Hapus catatan berdasarkan ID

## Struktur Proyek

├── app.js                  # Entry point utama aplikasi
├── controllers/            # Menampung logika kontrol untuk endpoint
│   └── noteController.js   # Mengatur logika CRUD catatan
├── models/                 # Berisi model data dan operasi terhadap data
│   └── noteModel.js        # Model catatan, mengakses dan memanipulasi data
├── routes/                 # Routing endpoint aplikasi
│   └── noteRoutes.js       # Definisi rute untuk operasi catatan
├── utils/                  # Berisi utilitas umum
│   └── database.js         # Fungsi untuk membaca/menulis file JSON (simulasi database)
├── data/                   # Folder penyimpanan data lokal
│   └── db.json             # File JSON yang berisi data catatan
└── package.json            # Konfigurasi dan dependency aplikasi

## Jalankan Program

- NPM Start
- Server akan berjalan di [kemudian ke postman, copy url tambahin slash seperti dibawah, hasilnya akan terlihat | (http://localhost:3000)]

1. GET /notes – Menampilkan seluruh catatan
2. GET /notes/:id – Menampilkan detail catatan berdasarkan ID
3. POST /notes – Menambahkan catatan baru
4. PUT /notes/:id – Mengedit catatan berdasarkan ID
5. DELETE /notes/:id – Menghapus catatan
