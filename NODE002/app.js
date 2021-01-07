// Import Express
const express = require("express");
const path = require("path");

const adminData = require("./routes/admin");
const shopRouter = require("./routes/shop");

//Instantiate Express
const app = express();

// STATIC file serving middleware
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRouter);
// Last stand, where we handl not found pages...
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "pgeNotFound.html"));
});

// // Express most general middleware
// app.use("/", (req, res, next) => {
//   console.log("This always run!");
//   // calling next will start the next USE function.
//   next();
// });

// Listen on server with Express
app.listen(3300);
