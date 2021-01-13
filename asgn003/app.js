const express = require("express");

const app = express();
const parser = require("body-parser");

app.set("view engine", "ejs");
app.use(parser.urlencoded({extended:false}));
const users = [];

app.get("/", (req, res, next) => {
  res.render("index", { pageTitle: "START - SITE" });
});

app.get("/users", (req, res, next) => {
  res.render("users", { pageTitle: "Users- SITE" ,usrs:users});
});

app.post("/add-user", (req, res, next) => {
    users.push(req.body.userName)
  res.redirect("/users");
});

app.listen(3300);
