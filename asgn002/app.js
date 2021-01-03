const express = require("express");
app = express();

app.use("/users", (req, res, next) => {
  console.log("Second MDLWR");
  res.send("<h1>This is the first[second] assignment is solved!</h1>");
});

app.use("/", (req, res, next) => {
  console.log("Hello");
  res.send("<h1>This middleware handles the root page.</h1>");
  next();
});

app.listen(3300);
