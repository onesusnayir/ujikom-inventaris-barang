const mongoose = require("mongoose");

const loggingSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    aksi: {
        type: String,
        required: true
    },
    detail: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Logging", loggingSchema);