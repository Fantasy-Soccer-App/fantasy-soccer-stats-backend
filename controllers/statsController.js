const express = require("express");
const stats = express.Router();
const { getAllStats, getStat, createStat } = require("../queries/stats.js");
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

//SHOW
stats.get("/:id", async (req, res) => {
    const { id } = req.params;
    const stat = await getStat(id);
    if (stat) {
        res.status(200).json(stat);
    } else {
        res.status(404).json({error: "Not Found"});
    }
});


//CREATE
stats.post("/", async (req, res) => {
    const stat = await createStat(req.body);
    res.json(stat);
});

module.exports = stats;