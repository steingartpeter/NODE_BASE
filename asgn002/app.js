const express = require("express");
app = express();

app.use("/", (req, res, next) => {
  console.log("This always runs!");
  next();
});

app.use("/add-product", (req, res, next) => {
  console.log("Second MDLWR");
  res.send(
    '<form><input type="text" name="title"/><input type="submit" value="Add product"/></form>'
  );
});

app.use("/", (req, res, next) => {
  console.log("Hello");
  res.send("<h1>This middleware handles the root page.</h1>");
  next();
});

app.listen(3300);
