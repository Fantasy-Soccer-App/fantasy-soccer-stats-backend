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

module.exports = { app };