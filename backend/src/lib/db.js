const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://127.0.0.1/ujikom_inventaris");
    console.log("DB Connect");
  } catch (error) {
    console.log("Connection DB error: ", error);
  }
};

module.exports = connectDB