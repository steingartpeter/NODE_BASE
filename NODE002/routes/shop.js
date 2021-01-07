const path = require("path");
const express = require("express");
const rootDir = require("../util/path");
const adminData = require("./admin");
const router = express.Router();

// Express most general middleware
router.get("/", (req, res, next) => {
  console.log("USE1  Middleware 01");
  console.log(adminData.products);
  // calling next will start the next USE function.
  // next();
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
