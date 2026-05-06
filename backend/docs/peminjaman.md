# Dokumentasi API Peminjaman

Base URL untuk semua endpoint:

```txt
/api/peminjaman
```

## 1. Ajukan Peminjaman

**Endpoint**

```http
POST /api/peminjaman
```

**Deskripsi**
Mengajukan permintaan peminjaman barang oleh user yang sedang login.

### Request Body

```json
{
  "barangId": "6820abcd1234efgh5678ijkl"
}
```

### Response Success

**Status:** `201 Created`

```json
{
  "message": "Permintaan peminjaman berhasil",
  "peminjaman": {
    "_id": "id_peminjaman",
    "userId": "id_user",
    "barangId": "id_barang",
    "status": "pending"
  }
}
```

### Response Error

```json
{
  "message": "Barang tidak ditemukan"
}
```

---

## 2. Ambil Semua Data Peminjaman

**Endpoint**

```http
GET /api/peminjaman
```

**Deskripsi**
Mengambil seluruh data peminjaman beserta informasi user dan barang.

### Response Success

```json
[
  {
    "_id": "id_peminjaman",
    "userId": {
      "nama": "Riyan",
      "email": "riyan@email.com"
    },
    "barangId": {
      "nama_barang": "Laptop"
    },
    "status": "pending"
  }
]
```

---

## 3. Ambil Data Peminjaman User Login

**Endpoint**

```http
GET /api/peminjaman/me
```

**Deskripsi**
Mengambil data peminjaman milik user yang sedang login.

### Response Success

```json
[
  {
    "_id": "id_peminjaman",
    "status": "disetujui"
  }
]
```

---

## 4. Approve Peminjaman

**Endpoint**

```http
PUT /api/peminjaman/approve/:id
```

**Deskripsi**
Menyetujui permintaan peminjaman.

### Response Success

```json
{
  "message": "Peminjaman disetujui"
}
```

### Response Error

```json
{
  "message": "Data tidak ditemukan"
}
```

---

## 5. Tolak Peminjaman

**Endpoint**

```http
PUT /api/peminjaman/tolak/:id
```

**Deskripsi**
Menolak permintaan peminjaman.

### Response Success

```json
{
  "message": "Peminjaman ditolak"
}
```

---

## 6. Return / Pengembalian Barang

**Endpoint**

```http
PUT /api/peminjaman/return/:id
```

**Deskripsi**
Mengubah status peminjaman menjadi dikembalikan dan mencatat tanggal pengembalian.

### Response Success

```json
{
  "message": "Barang berhasil dikembalikan"
}
```

### Response Error

```json
{
  "message": "Data tidak ditemukan"
}
```

---

## Status Peminjaman

Kemungkinan nilai status:

* `pending` → Menunggu persetujuan
* `disetujui` → Peminjaman telah disetujui
* `ditolak` → Permintaan ditolak
* `dikembalikan` → Barang sudah dikembalikan

---

## Catatan

* Endpoint memanfaatkan cookie `userId` untuk identifikasi user login.
* Setiap aksi peminjaman otomatis tercatat ke sistem logging.
* Endpoint ini terintegrasi dengan model `Barang`, `Peminjaman`, dan controller logging.
