const pool = require("./pool");

const getAllRecords = async () => {
  const { rows } = await pool.query(
    "SELECT title, artists.name AS artist, yr, genre, label FROM records INNER JOIN artists ON records.artist_id = artists.artist_id"
  );
  return rows;
};

const getRecordDetails = async (id) => {
  const { rows } = await pool.query("SELECT * FROM records WHERE id = $1", [
    id,
  ]);
  return rows[0];
};

const getArtistRecords = async (id) => {
  const { rows } = await pool.query(
    "SELECT id, title, yr, genre, label FROM records WHERE artist_id = $1",
    [id]
  );
  return rows;
};

const getAllArtists = async () => {
  const { rows } = await pool.query("SELECT * FROM artists");
  return rows;
};

const getArtistByArtistID = async (id) => {
  const { rows } = await pool.query(
    "SELECT * FROM artists WHERE artist_id = $1",
    [id]
  );
  return rows[0];
};

const getArtistFromRecordId = async (id) => {
  const { rows } = await pool.query(
    "SELECT artist FROM records WHERE id = $1",
    [id]
  );
  return rows[0].artist;
};

const getArtistIdFromRecordID = async (id) => {
  const { rows } = await pool.query(
    "SELECT artist_id FROM records WHERE id = $1",
    [id]
  );
  return rows[0].artist_id;
};

const addNewRecord = async (title, artist_id, yr, genre, label) => {
  await pool.query(
    "INSERT INTO records (title, artist_id, yr, genre, label) VALUES ($1, $2, $3, $4, $5)",
    [title, artist_id, yr, genre, label]
  );
};

const addNewArtist = async (name) => {
  await pool.query("INSERT INTO artists (name) VALUES ($1)", [name]);
};

const updateRecord = async (title, yr, genre, label, id) => {
  await pool.query(
    "UPDATE records SET title = $1, yr = $2, genre = $3, label = $4 WHERE id = $5",
    [title, yr, genre, label, id]
  );
};

const updateArtist = async (name, id) => {
  await pool.query("UPDATE artists SET name = $1 WHERE artist_id = $2", [
    name,
    id,
  ]);
};

const deleteRecord = async (id) => {
  await pool.query("DELETE FROM records WHERE id = $1", [id]);
};

const deleteArtist = async (id) => {
  await pool.query("DELETE FROM records WHERE artist_id = $1", [id]);
  await pool.query("DELETE FROM artists WHERE artist_id = $1", [id]);
};

module.exports = {
  getAllRecords,
  getRecordDetails,
  getArtistRecords,
  getAllArtists,
  getArtistByArtistID,
  getArtistFromRecordId,
  getArtistIdFromRecordID,
  addNewRecord,
  addNewArtist,
  updateRecord,
  updateArtist,
  deleteRecord,
  deleteArtist,
};
