const mongoose = require("mongoose");

const barangSchema = new mongoose.Schema({
    nama_barang: {
        type: String,
        required: true
    },

    kategori: {
        type: String,
        required: true
    },

    jumlah: {
        type: Number,
        required: true
    },

    kondisi: {
        type: String,
        enum: ["baik", "rusak ringan", "rusak berat"],
        default: "baik"
    },

    status: {
        type: String,
        enum: ["tersedia", "dipinjam", "rusak"],
        default: "tersedia"
    },

    lokasi: {
        type: String
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Barang", barangSchema);