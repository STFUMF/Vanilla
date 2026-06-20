import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import router from "./routes/authRoutes.js"

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", router);

app.get("/", (req, res) => {
    res.send("API RUNNING");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
