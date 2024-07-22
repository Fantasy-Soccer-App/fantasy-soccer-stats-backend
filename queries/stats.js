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



//.any() function takes string as SQL statement as first argument. Will accept any return from the database, no rows, one row. etc.

module.exports = { getAllStats };