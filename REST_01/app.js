const express = require("express");
const feedRoutes = require("./routes/feed");
const app = express();
const parser = require("body-parser");

// Here we have to setup for JSON communication, not HTML forms
app.use(parser.json());

//To prevent cross origin, we add  spcial header to all server responses:
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/feed", feedRoutes);

app.listen(8088);
