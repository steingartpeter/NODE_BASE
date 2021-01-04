const express = require("express");
const router = express.Router();

// Express most general middleware
router.get("/", (req, res, next) => {
  console.log("USE1  Middleware 01");
  // calling next will start the next USE function.
  // next();
  res.send("<h1>Hello from Express - 1st Middleware</h1>");
});

module.exports = router;
