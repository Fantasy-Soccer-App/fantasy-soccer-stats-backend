const db = require("../db/dbConfig.js");

//SQL query

const getAllStats = async () => {
    try {
        const allStats = await db.any("SELECT * FROM stats");
        return allStats;
    } catch (error) {
      return error;
    }
  };


const getStat = async (id) => {
  try {
      const stat = await db.one("SELECT * FROM stats WHERE id=$1", id);
      return stat;
  } catch (error) {
    return error;
  }
};

//CREATE
const createStat = async (stat) => {
  try {
    const newStat = await db.one(
      "INSERT INTO stats (name, position, mins_played, assists, goals, perc_score, rating) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [stat.name, stat.position, stat.mins_played, stat.assists, stat.goals, stat.perc_score, stat.rating] 
    );
    return newStat;
  } catch (error) {
    throw error;
  }
};


//DELETE
const deleteStat = async (id) => {
  try {
    const deletedStat = await db.one(
      "DELETE FROM stats WHERE id = $1 RETURNING *",
      id);
      return deletedStat;
  } catch (error) {
    return error;
  }
};




module.exports = { getAllStats, getStat, createStat, deleteStat, };

//.any() function takes string as SQL statement as first argument. Will accept any return from the database, no rows, one row. etc.

/*

It depends on where you want your control. throw immediately hands control back to the caller: See MDN: "and control will be passed to the first catch block in the call stack. If no catch block exists among caller functions, the program will terminate.", while if you return a new Error, you have to handle it a different way, in another location.

Return error for operational exceptions. Always check returned errors. Throw an error for non-operational exceptions. Try statement block should guard a single logical unit or a call.

*/