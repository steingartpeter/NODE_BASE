const express = require("express");
const parser = require("body-parser");
const pool = require("./dbse");

const app = express();

app.set("view engine", "ejs");
app.use(parser.urlencoded({ extended: false }));
app.listen(3300);

app.use("/", (req, res, next) => {
  res.send("<h1>OK - Node App is running</h1>");
});
