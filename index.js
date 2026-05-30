import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/mongoose.js";

dotenv.config();

connectDB();

const app = express();

app.get("/", (req, res) => {
    res.send("Home Page");
});

const PORT = process.env.PORT || 3500;

app.listen(PORT, () => {
    console.log(` Server running on port ${PORT}`);
});