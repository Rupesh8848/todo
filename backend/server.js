const http = require("http");
const app = require("./app");
const mongoose = require("mongoose");
require("dotenv").config({});
const server = http.createServer(app);

mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGO_URI, () => {
  console.log("Connection to MongoDB successful.");
  server.listen(8000, () => {
    console.log("Server Started and listening at port 8000");
  });
});
