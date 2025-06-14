const express = require("express");
const mongoose = require("mongoose");
const router = require("./routers/todo.route");
const app = express();

app.use(express.json());

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
