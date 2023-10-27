const express = require("express");
const router = express.Router();
const {
  listTodos,
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controller/todo.js");

// 1. List All Todo
router.get("/", listTodos);

// 2. Detail Todo
router.get("/:id", getTodo);

// 3. Create Todo
router.post("/", createTodo);

// 4. Update Todo
router.put("/:id", updateTodo);

// 5. Delete Todo (Soft Delete)
router.delete("/:id", deleteTodo);

module.exports = router;
