# Sistem Informasi Peminjaman Barang

Aplikasi fullstack untuk manajemen peminjaman barang yang memungkinkan user melakukan peminjaman, admin melakukan persetujuan/penolakan, serta sistem mencatat seluruh aktivitas ke dalam logging.

## Teknologi yang Digunakan

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Cookie Parser

### Frontend

* React.js
* Tailwind CSS

---

## Struktur Project

```txt
project-root/
├── backend/
│   ├── docs/
│   │   ├── barang.md
│   │   ├── logging.md
│   │   ├── peminjaman.md
│   │   └── user.md
│   └── src/
│       ├── models/
│       ├── routes/
│       ├── lib/
│       ├── controllers/
│       └── index.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── store/
│   └── public/
│
└── README.md
```

---

## Fitur Utama

### User

* Register akun
* Login & logout
* Melihat daftar barang
* Mengajukan peminjaman
* Melihat riwayat peminjaman

### Admin

* Melihat seluruh data peminjaman
* Menyetujui peminjaman
* Menolak peminjaman
* Melihat log aktivitas sistem
* Mengelola data barang

### Sistem Logging

Mencatat aktivitas seperti:

* Login user
* Pengajuan peminjaman
* Persetujuan peminjaman
* Penolakan peminjaman

---

## Instalasi

### 1. Clone Repository

```bash
git clone <repository-url>
cd project-root
```

### 2. Install Dependency Backend

```bash
cd backend
npm install
```

### 3. Install Dependency Frontend

```bash
cd ../frontend
npm install
```

---

## Menjalankan Project

### Jalankan Backend

```bash
cd backend
npm start
```

Backend berjalan di:

```txt
http://localhost:3000
```

### Jalankan Frontend

```bash
cd frontend
npm run dev
```

Frontend berjalan di:

```txt
http://localhost:5173
```

---

## API Documentation

Dokumentasi endpoint tersedia pada file:

* `user.md` → Dokumentasi autentikasi
* `barang.md` → Dokumentasi manajemen barang
* `peminjaman.md` → Dokumentasi peminjaman
* `logging.md` → Dokumentasi logging aktivitas

---

## Endpoint Utama

### Authentication

```txt
/api/auth
```

### Barang

```txt
/api/barang
```

### Peminjaman

```txt
/api/peminjaman
```

### Logging

```txt
/api/log
```

---

## Catatan Pengembangan

Beberapa improvement yang direkomendasikan:

* Implementasi bcrypt untuk hashing password
* Validasi request body
* Middleware authentication & authorization
* Rate limiting
* Pagination data
* Unit testing

---

## Author

Dikembangkan sebagai project Sistem Informasi Peminjaman Barang untuk UJI KOMPETENSI skema ANALIS PROGRAM.
