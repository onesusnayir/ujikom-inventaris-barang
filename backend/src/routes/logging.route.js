const express = require("express");
const router = express.Router();

const Logging = require("../models/logging.model");

router.get("/", async (req, res) => {
    try {
        const logs = await Logging.find()
            .populate("userId", "nama email")
            .sort({ createdAt: -1 });

        res.status(200).json(logs);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

module.exports = router;