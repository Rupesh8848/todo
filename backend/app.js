const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/userRouter");
const morgan = require("morgan");
const app = express();

morgan("tiny");
app.use(cors());

app.use(express.json());

app.use("/api/user", userRouter);
module.exports = app;
