const express = require("express");
const feedRoutes = require("./routes/feed");
const app = express();
const parser = require("body-parser");

// Here we have to setup for JSON communication, not HTML forms
app.use(parser.json());
app.use("/feed", feedRoutes);

app.listen(8088);
