//DEPENDENCIES
const cors = require("cors");
const express = require("express");


//CONFIGURATION
const app = express();

//MIDDLEWARE
app.use(cors());
app.use(express.json());

//ROUTE
app.get("/", (req, res) => {
    res.send("Welcome to Fantasy Soccer!");
});

//Players ROUTES
const playersController = require("./controllers/playersController.js");
app.use("/players", playersController);

// 404 PAGE
app.get("*", (req, res) => {
    res.status(404).send("Page Not Found");
})

module.exports =  app;