const Logging = require("../models/logging.model");

const createLog = async (userId, aksi, detail) => {
    await Logging.create({
        userId,
        aksi,
        detail
    });
};

module.exports = createLog