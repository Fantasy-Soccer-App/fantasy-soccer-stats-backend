const express = require("express");
const stats = express.Router();

//INDEX
stats.get("/", (req, res) => {
    res.json({ status: "ok" });
});

module.exports = stats;