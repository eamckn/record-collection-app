const pool = require("./pool");

const getAllRecords = async () => {
  const { rows } = await pool.query("SELECT * FROM records");
  console.log(rows);
  return rows;
};

const getAllArtists = async () => {
  const { rows } = await pool.query("SELECT DISTINCT artist FROM records");
  console.log(rows);
  return rows;
};

const getArtistRecords = async (artist) => {
  const { rows } = await pool.query("SELECT * FROM records WHERE artist = $1", [
    artist,
  ]);
  return rows;
};

module.exports = {
  getAllRecords,
  getAllArtists,
  getArtistRecords,
};
