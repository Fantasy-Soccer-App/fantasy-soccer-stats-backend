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


//.any() function takes string as SQL statement as first argument. Will accept any return from the database, no rows, one row. etc.

module.exports = { getAllStats, getStat, createStat };