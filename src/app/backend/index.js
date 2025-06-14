import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import router from "./routers/todo.route.js"; // .js ext yozish majburiy
const app = express();

app.use(express.json());
app.use("/api", router);
// CORS ruxsat
app.use(
  cors({
    origin: "*", // yoki faqat frontend URL: 'http://localhost:3000'
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
const DB_URL = process.env.DB_URL;
const PORT = process.env.PORT;
const startConnection = async () => {
  try {
    await mongoose.connect(DB_URL).then(() => console.log(`connected DB`));
    app.listen(PORT, () => console.log(`listening on port ${PORT}`));
  } catch (error) {
    console.log(`Error was mongo Db - ${error}`);
  }
};

startConnection();
