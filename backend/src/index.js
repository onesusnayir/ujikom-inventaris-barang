const express = require("express");
const cors = require("cors");
const db = require('./lib/db')

const routes = require('./routes')
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use("/api",routes)

db()

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});