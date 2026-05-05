const express = require("express");
const cors = require("cors");
const db = require('./lib/db')

const cookieParser = require("cookie-parser");

const routes = require('./routes')
const app = express();
const PORT = 3000;

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

app.use("/api",routes)

db()

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});