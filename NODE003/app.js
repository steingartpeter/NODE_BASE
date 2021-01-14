const express = require("express");
const path = require("path");
const parser = require("body-parser");
const Product = require("./model/product");

const app = express();

app.set("view engine", "ejs");
app.use(parser.urlencoded({ extended: false }));
app.listen(3300);

app.use("/", (req, res, next) => {
  Product.fetchAll()
    .then(([rows, fieldData]) => {
      res.render(path.join(__dirname, "views/site1.ejs"), {
        title: "Page header...",
        data: rows,
      });
    })
    .catch((err) => {
      console.log("ERROR!!!");
      console.log("=========================");
      console.log(err);
      console.log("=========================");
    });
  //res.send("<h1>OK - Node App is running</h1>");
});

//pool.end();
