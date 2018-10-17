const express = require("express");
const app = express();
const api = require("./api/index");

app.use("/api", api);
app.use("/", express.static(__dirname + "/public"));

module.exports = app;
