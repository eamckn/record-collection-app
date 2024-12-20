const pool = require("./pool");

const getAllRecords = async () => {
  const { rows } = await pool.query("SELECT * FROM records");
  return rows;
};

const getAllArtists = async () => {
  const { rows } = await pool.query("SELECT name FROM artists");
  return rows;
};

const getArtistRecords = async (artist) => {
  const { rows } = await pool.query("SELECT * FROM records WHERE artist = $1", [
    artist,
  ]);
  return rows;
};

const getRecordDetails = async (id) => {
  const { rows } = await pool.query("SELECT * FROM records WHERE id = $1", [
    id,
  ]);
  return rows;
};

const addNewArtist = async (name) => {
  //console.log(name);
  await pool.query("INSERT INTO artists (name) VALUES ($1)", [name]);
};

const deleteRecord = async (id) => {
  await pool.query("DELETE FROM records WHERE id = $1", [id]);
};

const getArtistFromRecordId = async (id) => {
  const { rows } = await pool.query(
    "SELECT artist FROM records WHERE id = $1",
    [id]
  );
  return rows[0].artist;
};

const deleteArtist = async (artist) => {
  await pool.query("DELETE FROM artists WHERE name = $1", [artist]);
  await pool.query("DELETE FROM records WHERE artist = $1", [artist]);
};

module.exports = {
  getAllRecords,
  getAllArtists,
  getArtistRecords,
  getRecordDetails,
  addNewArtist,
  deleteRecord,
  getArtistFromRecordId,
  deleteArtist,
};
