import express from "express";
import TodoController from "../controllers/todo.controller.js";
const router = express.Router();

router.get("/getAll", TodoController.getAll);
router.post("/create", TodoController.create);
router.delete("/delete/:id", TodoController.delete);
router.put("/edit/:id", TodoController.edit);

export default router;
