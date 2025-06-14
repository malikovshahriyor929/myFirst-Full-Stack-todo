const express = require("express");
const todoController = require("../controllers/todo.controller");
const router = express.Router();

router.get("/getAll", todoController.getAll);

module.exports = router;
