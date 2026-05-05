const express = require("express");
const routesBarang = require("./barang.route.js")
const routesUser = require('./user.route.js')
const routesPeminjaman = require('./peminjaman.route.js')
const routesLogging = require('./logging.route.js')
const router = express.Router();

router.use("/barang", routesBarang);
router.use("/auth", routesUser)
router.use("/peminjaman", routesPeminjaman)
router.use("/log", routesLogging)

module.exports = router