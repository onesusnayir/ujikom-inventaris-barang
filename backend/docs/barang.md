# Dokumentasi API Barang

Base URL untuk semua endpoint:

```txt
/api/barang
```

## 1. Tambah Barang

**Endpoint**

```http
POST /api/barang
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

```json
{
  "message": "Error message"
}
```

---

## 2. Ambil Semua Barang

**Endpoint**

```http
GET /api/barang
```

**Deskripsi**
Mengambil seluruh data barang dari database.

### Response Success

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

---

## 3. Ambil Barang Berdasarkan ID

**Endpoint**

```http
GET /api/barang/:id
```

**Deskripsi**
Mengambil detail barang berdasarkan ID.

### Response Success

```json
{
  "_id": "id_barang",
  "nama": "Laptop",
  "jumlah": 10,
  "kategori": "Elektronik"
}
```

### Response Not Found

```json
{
  "message": "Barang tidak ditemukan"
}
```

---

## 4. Update Barang

**Endpoint**

```http
PUT /api/barang/:id
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

---

## 5. Hapus Barang

**Endpoint**

```http
DELETE /api/barang/:id
```

**Deskripsi**
Menghapus data barang berdasarkan ID.

### Response Success

```json
{
  "message": "Barang berhasil dihapus"
}
```

---

## Catatan

* Semua endpoint menggunakan format **JSON**.
* ID harus berupa MongoDB ObjectId yang valid.
* API ini mendukung operasi CRUD penuh untuk data barang.
