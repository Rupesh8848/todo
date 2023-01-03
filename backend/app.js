const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/userRouter");
const morgan = require("morgan");
const containerRouter = require("./routes/containerRoute");
const todoRoute = require("./routes/todo");
const app = express();

morgan("tiny");
app.use(cors());

app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/container", containerRouter);
app.use("/api/todo", todoRoute);

module.exports = app;
