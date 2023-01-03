const express = require("express");
const {
  getTodos,
  addTodo,
  deleteTodo,
} = require("../controllers/todoController");
const validateUser = require("../validateUser");
const todoRoute = express.Router();

todoRoute.get("/:id", validateUser, getTodos);
todoRoute.post("/", validateUser, addTodo);
todoRoute.delete("/:id", validateUser, deleteTodo);

module.exports = todoRoute;
