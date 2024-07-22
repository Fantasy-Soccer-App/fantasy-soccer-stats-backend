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
    res.send("Welcome to Fantasy Soccer Stats!");
});

//Stats ROUTES
const statsController = require("./controllers/statsController.js");
app.use("/stats", statsController);

// 404 PAGE
app.get("*", (req, res) => {
    res.status(404).send("Page Not Found");
})

module.exports =  app;