const db = require("../db/dbConfig.js");

//SQL query for all players (Index)

const getAllPlayers = async () => {
    try {
        const allPlayers = await db.any("SELECT * FROM players");
        return allPlayers;
    } catch (error) {
      return error;
    }
  };


//SQL query to get a single player by ID ()

const getPlayer = async (id) => {
  try {
      const player = await db.one("SELECT * FROM players WHERE id=$1", id);
      return player;
  } catch (error) {
    return error;
  }
};


//CREATE
const createPlayer = async (player) => {
  try {
    const newPlayer = await db.one(
      "INSERT INTO players (name, position, mins_played, assists, goals, perc_score, rating) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [player.name, player.position, player.mins_played, player.assists, player.goals, player.perc_score, player.rating] 
    );
    return newPlayer;
  } catch (error) {
    throw error;
  }
};


//DELETE
const deletePlayer = async (id) => {
  try {
    const deletedPlayer = await db.one(
      "DELETE FROM players WHERE id = $1 RETURNING *",
      id);
      return deletedPlayer;
  } catch (error) {
    return error;
  }
};


//UPDATE
const updatedPlayer = async (id, player) => {
  try {
    const updatedPlayer = await db.one(
      "UPDATE players SET name=$1, position=$2 where id=$3 RETURNING *",
      [player.name, player.position, id]
    );
    return updatedPlayer;
  } catch (error) {
    return error;
  }
};



module.exports = { getAllPlayers, getPlayer, createPlayer, deletePlayer, updatedPlayer };



//.any() function takes string as SQL statement as first argument. Will accept any return from the database, no rows, one row. etc.

/*
try again.
It depends on where you want your control. throw immediately hands control back to the caller: See MDN: "and control will be passed to the first catch block in the call stack. If no catch block exists among caller functions, the program will terminate.", while if you return a new Error, you have to handle it a different way, in another location.

Return error for operational exceptions. Always check returned errors. Throw an error for non-operational exceptions. Try statement block should guard a single logical unit or a call.

*/