// import dotenv from "dotenv";
// dotenv.config();
// import express from "express";
// import mongoose from "mongoose";
// import router from "./routers/todo.route.js";
// import cors from "cors";
// const app = express();

// app.use(express.json());
// app.use("/api", router);
// // CORS ruxsat
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//   })
// );
// const DB_URL = process.env.DB_URL;
// const PORT = process.env.PORT;
// const startConnection = async () => {
//   try {
//     await mongoose.connect(DB_URL).then(() => console.log(`connected DB`));
//     app.listen(PORT, () => console.log(`listening on port ${PORT}`));
//   } catch (error) {
//     console.log(`Error was mongo Db - ${error}`);
//   }
// };

// startConnection();

import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import router from "./routers/todo.route.js";
import cors from "cors";

const app = express();

// ✅ CORS NI ENG BOSHIDA ISHLATISH KERAK
app.use(
  cors({
    origin: "http://localhost:3000", // yoki "*" test uchun
    credentials: true,
  })
);

// JSON middleware
app.use(express.json());

// Routerni oxirida chaqiring
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
