const express = require("express");
const stats = express.Router();
const { getAllStats } = require("../queries/stats.js");
const { db } = require( "../db/dbConfig.js");

//INDEX
stats.get("/", async (req, res) => {
    const allStats = await getAllStats();
    if (allStats[0]) {
    res.status(200).json(allStats);
    } else {
    res.status(500).json({error:"server error"});
    }
});




module.exports = stats;