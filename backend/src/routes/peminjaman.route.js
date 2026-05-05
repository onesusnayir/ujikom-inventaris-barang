const express = require("express");
const router = express.Router();

const Peminjaman = require("../models/peminjaman.model");
const Barang = require("../models/barang.model");

router.post("/", async (req, res) => {
    try {
        const { userId, barangId } = req.body;

        const barang = await Barang.findById(barangId);

        if (!barang) {
            return res.status(404).json({
                message: "Barang tidak ditemukan"
            });
        }

        if (barang.status !== "tersedia") {
            return res.status(400).json({
                message: "Barang tidak tersedia"
            });
        }

        const peminjaman = new Peminjaman({
            userId,
            barangId
        });

        await peminjaman.save();

        res.status(201).json({
            message: "Permintaan peminjaman berhasil",
            peminjaman
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

router.get("/", async (req, res) => {
    try {
        const data = await Peminjaman.find()
            .populate("userId", "nama email")
            .populate("barangId", "nama_barang");

        res.json(data);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

router.put("/approve/:id", async (req, res) => {
    try {
        const peminjaman = await Peminjaman.findById(req.params.id);

        if (!peminjaman) {
            return res.status(404).json({
                message: "Data tidak ditemukan"
            });
        }

        peminjaman.status = "disetujui";
        await peminjaman.save();

        await Barang.findByIdAndUpdate(
            peminjaman.barangId,
            { status: "dipinjam" }
        );

        res.json({
            message: "Peminjaman disetujui"
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

router.put("/tolak/:id", async (req, res) => {
    try {
        await Peminjaman.findByIdAndUpdate(
            req.params.id,
            { status: "ditolak" }
        );

        res.json({
            message: "Peminjaman ditolak"
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});


// PENGEMBALIAN
router.put("/return/:id", async (req, res) => {
    try {
        const peminjaman = await Peminjaman.findById(req.params.id);

        if (!peminjaman) {
            return res.status(404).json({
                message: "Data tidak ditemukan"
            });
        }

        peminjaman.status = "dikembalikan";
        peminjaman.tanggalKembali = new Date();

        await peminjaman.save();

        await Barang.findByIdAndUpdate(
            peminjaman.barangId,
            { status: "tersedia" }
        );

        res.json({
            message: "Barang berhasil dikembalikan"
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

module.exports = router;