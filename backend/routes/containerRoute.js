const express = require("express");
const {
  createContainer,
  getContainerTitles,
} = require("../controllers/containerController");
const validateUser = require("../validateUser");

const containerRouter = express.Router();

containerRouter.post("/create", validateUser, createContainer);
containerRouter.get("/", validateUser, getContainerTitles);

module.exports = containerRouter;
