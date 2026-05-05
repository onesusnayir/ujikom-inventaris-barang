const express = require("express");
const router = express.Router();

const Peminjaman = require("../models/peminjaman.model");
const Barang = require("../models/barang.model");
const createLog = require('../controllers/logging.controller')

router.post("/", async (req, res) => {
    try {
        const { barangId } = req.body;
        const userId = req.cookies.userId

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

        await createLog(
            userId,
            "MEMINJAM",
            `Mengajukan peminjaman barang ${barang.nama_barang}`
        );

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

router.get("/me", async (req, res) => {
    try {
        const userId = req.cookies.userId

        const data = await Peminjaman.find({ userId: userId})
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
        const userId = req.cookies.userId
        const peminjaman = await Peminjaman.findById(req.params.id).populate("barangId");;

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

        await createLog(
            userId,
            "APPROVE",
            `Menyetujui peminjaman ${peminjaman.barangId.nama_barang}`
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
        const userId = req.cookies.userId
        const peminjaman = await Peminjaman.findByIdAndUpdate(
            req.params.id,
            { status: "ditolak" }
        ).populate("barangId");

         await createLog(
            userId,
            "TOLAK",
            `Menolak peminjaman ${peminjaman.barangId.nama_barang}`
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

        await createLog(
            userId,
            "KEMBALI",
            `Mengembalikan ${peminjaman.barangId.nama_barang}`
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