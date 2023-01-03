const express = require("express");
const {
  createContainer,
  getContainerTitles,
  deleteContainer,
} = require("../controllers/containerController");
const validateUser = require("../validateUser");

const containerRouter = express.Router();

containerRouter.post("/create", validateUser, createContainer);
containerRouter.get("/", validateUser, getContainerTitles);
containerRouter.delete("/:id", validateUser, deleteContainer);

module.exports = containerRouter;
