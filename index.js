const express = require("express");
const homeController = require("./controllers/homeController");
const layouts = require("express-ejs-layouts");
const PORT = 5000;

// Init Express app
const app = express();

// TODO: Init EJS View Engine, layouts middleware & set express.static to public folder

// Application Homepage Routes
app.get("/", homeController.showIndex);
// TODO: Implement /resources and /bio routes

// Init & Listen on defined port number
app.listen(PORT, () =>
  console.log(`Server started at http://localhost:${PORT}`)
);
