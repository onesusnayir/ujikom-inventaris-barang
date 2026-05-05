const express = require("express");
const router = express.Router();
const User = require("../models/user.model");

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                message: "User tidak ditemukan"
            });
        }

        if (user.password !== password) {
            return res.status(401).json({
                message: "Password salah"
            });
        }
          res.cookie("userId", user.id, {
            maxAge: 24 * 60 * 60 * 100,
            httpOnly: true
        });

        res.status(200).json({
            message: "Login berhasil",
            user: {
                id: user._id,
                nama: user.nama,
                email: user.email,
                role: user.role
            }
        });

    } catch (error) {
        res.status(500).json({
            message: "Terjadi kesalahan server"
        });
    }
});

router.post("/register", async (req, res) => {
    try {
        const { nama, email, password, role } = req.body;

        const cekUser = await User.findOne({ email });

        if (cekUser) {
            return res.status(400).json({
                message: "Email sudah terdaftar"
            });
        }

        const user = new User({
            nama,
            email,
            password,
            role
        });

        await user.save();

        res.status(201).json({
            message: "Register berhasil",
            user
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

router.get('/check-auth', async (req, res) => {
    try{
        const userId = req.cookies.userId;
        
        if (!userId) {
            return res.status(401).json({
                loggedIn: false,
                message: "Belum login"
            });
        }

        const user = await User.findById(userId);
    
        return res.status(200).json({
            loggedIn: true,
            user
        });
    
    }catch(error){
        res.status(500).json({
            message: error.message
        });
    }
});

router.post('/logout', async (req, res) => {
    try{
    res.cookie("userId", "", {
        maxAge: 0,
        });
    res.status(200).json({ message: "Logout successfully" });
    
    }catch(error){
        res.status(500).json({
            message: error.message
        });
    }
});
module.exports = router;