/**
 * import express, mongoose, cors, dotenv
 * config/initialize port and database
 * initialize middleware
 * server -- listen
 */
// imports
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
4;

// imports routes
const postRoutes = require("./routes/post");

//config
const app = express();
const port = process.env.PORT || 8081;

mongoose
  .connect(process.env.DB)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB connection fails!"));

// middleware
app.use(cors());
app.use(express.json());

// Routes --
app.use("/blog", postRoutes);

//server listening
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
