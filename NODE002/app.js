// Import Express
const express = require("express");
//Instantiate Express
const app = express();

// Express most general middleware
app.use("/", (req, res, next) => {
  console.log("This always run!");
  // calling next will start the next USE function.
  next();
});

// Express middleware with specific route
app.use("/add-product", (req, res, next) => {
  console.log("USE AD-P  Middleware ADD-PRODUCT");
  // calling next will start the next USE function.
  // next();
  res.send("<h1>Hello from Express - Add product Middleware</h1>");
});

// Express most general middleware
app.use("/", (req, res, next) => {
  console.log("USE1  Middleware 01");
  // calling next will start the next USE function.
  // next();
  res.send("<h1>Hello from Express - 1st Middleware</h1>");
});

// Listen on server with Express
app.listen(3300);
