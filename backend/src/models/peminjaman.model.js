const mongoose = require("mongoose");

const peminjamanSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    barangId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Barang",
        required: true
    },

    tanggalPinjam: {
        type: Date,
        default: Date.now
    },

    tanggalKembali: {
        type: Date
    },

    status: {
        type: String,
        enum: ["menunggu", "disetujui", "ditolak", "dikembalikan"],
        default: "menunggu"
    }

}, {
    timestamps: true
});

module.exports = mongoose.model("Peminjaman", peminjamanSchema);