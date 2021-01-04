const express = require("express");
const router = express.Router();

// Import the parser
const bodyParser = require("body-parser");

// A middleware for handling req.body parsing:
router.use(bodyParser.urlencoded({ extended: false }));

// Express middleware with specific route
router.get("/add-product", (req, res, next) => {
  console.log("USE AD-P  Middleware ADD-PRODUCT");
  // calling next will start the next USE function.
  // next();
  res.send(
    '<form action="/admin/product" method="post"><input type="text" name="title"/><input type="submit" value="Add product"/></form>'
  );
});

router.post("/add-product", (req, res, next) => {
  res.redirect("/");
  console.log("ADD-PROD => POST");
  console.log(req.body);
});
module.exports = router;
