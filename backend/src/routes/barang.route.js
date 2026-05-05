const express = require("express");
const Barang = require('../models/barang.model')
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const barang = new Barang(req.body);
        await barang.save();

        res.status(201).json({
            message: "Barang berhasil ditambahkan",
            barang
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

router.get("/", async (req, res) => {
    try {
        const barang = await Barang.find();

        res.json(barang);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const barang = await Barang.findById(req.params.id);

        if (!barang) {
            return res.status(404).json({
                message: "Barang tidak ditemukan"
            });
        }

        res.json(barang);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const barang = await Barang.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json({
            message: "Barang berhasil diupdate",
            barang
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        await Barang.findByIdAndDelete(req.params.id);

        res.json({
            message: "Barang berhasil dihapus"
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

module.exports = router;