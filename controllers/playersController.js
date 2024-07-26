const express = require("express");
const players = express.Router();
const { getAllPlayers, getPlayer, createPlayer, deletePlayer, updatedPlayer } = require("../queries/players.js");
const { db } = require( "../db/dbConfig.js");
const { checkRating, checkName } = require("../validations/checkPlayers.js");

//INDEX
players.get("/", async (req, res) => {
    const allPlayers = await getAllPlayers();
    if (allPlayers[0]) {
    res.status(200).json(allPlayers);
    } else {
    res.status(500).json({error:"server error"});
    }
});

//SHOW
players.get("/:id", async (req, res) => {
    const { id } = req.params;
    const player = await getPlayer(id);
    if (player) {
        res.status(200).json(player);
    } else {
        res.status(404).json({error: "Not Found"});
    }
});


//CREATE or ADD
players.post("/", async (req, res) => {
    const player = await createPlayer(req.body);
    res.json(player);
});


//DELETE
players.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedPlayer = await deletePlayer(id);
    if (deletedPlayer.id) {
        res.status(200).json(deletedPlayer);
    } else {
        res.status(404).json("Player not found");
    }
    
});

//route DELETE /players/:id


//UPDATE
players.put("/:id", async (req, res) => {
    const { id } = req.params;
    const newPlayer = await updatedPlayer(id, req.body);
    res.status(200).json(newPlayer);
});



//route PUT /players/:id.  try again

module.exports = players;