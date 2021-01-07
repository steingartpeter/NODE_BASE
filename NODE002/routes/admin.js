const path = require("path");
const express = require("express");
const rootDir = require("../util/path");

// Import the parser
const bodyParser = require("body-parser");

const router = express.Router();

const products = [];

// A middleware for handling req.body parsing:
router.use(bodyParser.urlencoded({ extended: false }));

// Express middleware with specific route
router.get("/add-product", (req, res, next) => {
  console.log("ADD PRODUCT-GET");
  // calling next will start the next USE function.
  // next();
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

router.post("/add-product", (req, res, next) => {
  console.log("ADD PRODUCT-POSt");
  products.push({ title: req.body.title });
  //console.log(req.body);
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
