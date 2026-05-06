# Dokumentasi API Logging

Base URL endpoint untuk semua route:

```txt
/api/log
```

## 1. Tambah Barang / Log

**Endpoint**

```http
POST /api/log
```

**Deskripsi**
Menambahkan data barang baru ke database.

### Request Body

```json
{
  "nama": "Laptop",
  "jumlah": 10,
  "kategori": "Elektronik"
}
```

### Response Success

**Status:** `201 Created`

```json
{
  "message": "Barang berhasil ditambahkan",
  "barang": {
    "_id": "id_barang",
    "nama": "Laptop",
    "jumlah": 10,
    "kategori": "Elektronik"
  }
}
```

### Response Error

**Status:** `500 Internal Server Error`

```json
{
  "message": "Error message"
}
```

---

## 2. Ambil Semua Barang / Log

**Endpoint**

```http
GET /api/log
```

**Deskripsi**
Mengambil seluruh data barang dari database.

### Response Success

**Status:** `200 OK`

```json
[
  {
    "_id": "id_barang",
    "nama": "Laptop",
    "jumlah": 10,
    "kategori": "Elektronik"
  }
]
```

### Response Error

**Status:** `500 Internal Server Error`

```json
{
  "message": "Error message"
}
```

---

## 3. Ambil Barang Berdasarkan ID

**Endpoint**

```http
GET /api/log/:id
```

**Deskripsi**
Mengambil detail barang berdasarkan ID.

### Response Success

**Status:** `200 OK`

```json
{
  "_id": "id_barang",
  "nama": "Laptop",
  "jumlah": 10,
  "kategori": "Elektronik"
}
```

### Response Not Found

**Status:** `404 Not Found`

```json
{
  "message": "Barang tidak ditemukan"
}
```

---

## 4. Update Barang

**Endpoint**

```http
PUT /api/log/:id
```

**Deskripsi**
Memperbarui data barang berdasarkan ID.

### Request Body

```json
{
  "nama": "Laptop Gaming",
  "jumlah": 5
}
```

### Response Success

**Status:** `200 OK`

```json
{
  "message": "Barang berhasil diupdate",
  "barang": {
    "_id": "id_barang",
    "nama": "Laptop Gaming",
    "jumlah": 5
  }
}
```

### Response Error

**Status:** `500 Internal Server Error`

```json
{
  "message": "Error message"
}
```

---

## 5. Hapus Barang

**Endpoint**

```http
DELETE /api/log/:id
```

**Deskripsi**
Menghapus data barang berdasarkan ID.

### Response Success

**Status:** `200 OK`

```json
{
  "message": "Barang berhasil dihapus"
}
```

### Response Error

**Status:** `500 Internal Server Error`

```json
{
  "message": "Error message"
}
```

---

## Catatan

* Semua endpoint menggunakan format data **JSON**.
* Pastikan ID yang dikirim valid sesuai format MongoDB ObjectId.
* Endpoint ini menggunakan model `Barang` untuk operasi CRUD.
