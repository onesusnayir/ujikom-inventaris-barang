# Dokumentasi API User Authentication

Base URL untuk semua endpoint:

```txt
/api/auth
```

## 1. Register User

**Endpoint**

```http
POST /api/auth/register
```

**Deskripsi**
Mendaftarkan user baru ke sistem.

### Request Body

```json
{
  "nama": "Riyan Suseno",
  "email": "riyan@email.com",
  "password": "123456",
  "role": "user"
}
```

### Response Success

**Status:** `201 Created`

```json
{
  "message": "Register berhasil",
  "user": {
    "_id": "id_user",
    "nama": "Riyan Suseno",
    "email": "riyan@email.com",
    "role": "user"
  }
}
```

### Response Error

```json
{
  "message": "Email sudah terdaftar"
}
```

---

## 2. Login User

**Endpoint**

```http
POST /api/auth/login
```

**Deskripsi**
Melakukan autentikasi user dan menyimpan `userId` ke cookie.

### Request Body

```json
{
  "email": "riyan@email.com",
  "password": "123456"
}
```

### Response Success

**Status:** `200 OK`

```json
{
  "message": "Login berhasil",
  "user": {
    "id": "id_user",
    "nama": "Riyan Suseno",
    "email": "riyan@email.com",
    "role": "user"
  }
}
```

### Response Error

**User tidak ditemukan**

```json
{
  "message": "User tidak ditemukan"
}
```

**Password salah**

```json
{
  "message": "Password salah"
}
```

---

## 3. Check Authentication

**Endpoint**

```http
GET /api/auth/check-auth
```

**Deskripsi**
Memeriksa apakah user sedang login berdasarkan cookie `userId`.

### Response Success

```json
{
  "loggedIn": true,
  "user": {
    "_id": "id_user",
    "nama": "Riyan Suseno",
    "email": "riyan@email.com",
    "role": "user"
  }
}
```

### Response Belum Login

```json
{
  "loggedIn": false,
  "message": "Belum login"
}
```

---

## 4. Logout User

**Endpoint**

```http
POST /api/auth/logout
```

**Deskripsi**
Menghapus cookie session user dari browser.

### Response Success

```json
{
  "message": "Logout successfully"
}
```

---

## Role User

Kemungkinan role dalam sistem:

* `user` → Pengguna biasa
* `admin` → Administrator sistem

---

## Cookie Authentication

Sistem menggunakan cookie:

```txt
userId
```

Cookie diset saat login dengan konfigurasi:

* `httpOnly: true`
* Masa aktif: 24 jam

---

## Catatan

* Password saat ini dibandingkan secara langsung (plain text).
* Untuk production sebaiknya gunakan hashing seperti **bcrypt**.
* Endpoint ini menangani autentikasi berbasis cookie.
