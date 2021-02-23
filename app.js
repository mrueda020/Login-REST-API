const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const userRoutes = require("./routes/user");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/test", userRoutes);

module.exports = app;
