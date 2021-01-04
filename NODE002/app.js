// Import Express
const express = require("express");

const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");

//Instantiate Express
const app = express();

app.use("/admin", adminRouter);
app.use(shopRouter);
// Last stand, where we handl not found pages...
app.use((req, res, next) => {
  res.status(404).send("<h2>PAGE NOT FOUND!</h2>");
});

// // Express most general middleware
// app.use("/", (req, res, next) => {
//   console.log("This always run!");
//   // calling next will start the next USE function.
//   next();
// });

// Listen on server with Express
app.listen(3300);
