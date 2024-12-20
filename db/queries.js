const pool = require("./pool");

const getAllRecords = async () => {
  const { rows } = await pool.query("SELECT * FROM records");
  return rows;
};

const getAllArtists = async () => {
  const { rows } = await pool.query("SELECT DISTINCT artist FROM records");
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

module.exports = {
  getAllRecords,
  getAllArtists,
  getArtistRecords,
  getRecordDetails,
  deleteRecord,
  getArtistFromRecordId,
};
