import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import router from "./routers/todo.route.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://my-first-full-stack-todo.vercel.app",
      "*"
    ],
    credentials: true,
  })
);
app.use("/api", router);

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
