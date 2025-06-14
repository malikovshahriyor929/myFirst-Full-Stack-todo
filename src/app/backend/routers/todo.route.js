import express from "express";
import todoController from "../controllers/todo.controller";
const router = express.Router();

router.get("/getAll", todoController.getAll);

module.exports = router;
