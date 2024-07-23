const express = require("express");
const stats = express.Router();
const { getAllStats, getStat, createStat, deleteStat, updatedStat } = require("../queries/stats.js");
const { db } = require( "../db/dbConfig.js");
const { checkRating, checkName } = require("../validations/checkStats.js");

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


//DELETE
stats.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedStat = await deleteStat(id);
    if (deletedStat.id) {
        res.status(200).json(deletedStat);
    } else {
        res.status(404).json("Stat not found");
    }
    
});

//route DELETE /stats/:id


//UPDATE
stats.put("/:id", async (req, res) => {
    const { id } = req.params;
    const newStat = await updatedStat(id, req.body);
    res.status(200).json(newStat);
});



//route PUT /stats/:id.  try again

module.exports = stats;