const db = require("../db/queries");

const displayArtistRecordsGet = async (req, res) => {
  const { artist_id } = req.params;
  const artist = await db.getArtistById(artist_id);
  const records = await db.getArtistRecords(artist_id);
  const artists = await db.getAllArtists();
  res.render("category", {
    artist: artist,
    records: records,
    artists: artists,
  });
};

const deleteArtistRecordPost = async (req, res) => {
  const { record_id } = req.body;
  const artist_id = await db.getArtistIdFromRecordID(record_id);
  await db.deleteRecord(record_id);
  res.redirect(`/artists/${artist_id}`);
};

const displayNewRecordFormGet = async (req, res) => {
  const { artist_id } = req.params;
  const artist = await db.getArtistById(artist_id);
  const artists = await db.getAllArtists();
  res.render("newRecord", { artist: artist, artists: artists });
};

const addNewRecordPost = async (req, res) => {
  const {
    record_title,
    record_artist_id,
    record_year,
    record_genre,
    record_label,
  } = req.body;
  await db.addNewRecord(
    record_title,
    record_artist_id,
    record_year,
    record_genre,
    record_label
  );
  res.redirect(`/artists/${record_artist_id}`);
};

const updateRecordGet = async (req, res) => {
  const { record_id } = req.params;
  const record = await db.getRecordDetails(record_id);
  const artists = await db.getAllArtists();
  res.render("updateRecord", { record: record, artists: artists });
};

const updateRecordPost = async (req, res) => {
  const {
    update_title,
    update_release_year,
    update_genre,
    update_label,
    update_id,
  } = req.body;
  await db.updateRecord(
    update_title,
    update_release_year,
    update_genre,
    update_label,
    update_id
  );
  const artist_id = await db.getArtistIdFromRecordID(update_id);
  res.redirect(`/artists/${artist_id}`);
};

const updateArtistGet = async (req, res) => {
  const { artist } = req.params;
  const artists = await db.getAllArtists();
  res.render("updateCategory", { artist: artist, artists: artists });
};

const displayRecordDetailsGet = async (req, res) => {
  const { id } = req.params;
  const [record] = await db.getRecordDetails(id);
  const artists = await db.getAllArtists();
  res.render("details", { record: record, artists: artists });
};

module.exports = {
  displayArtistRecordsGet,
  deleteArtistRecordPost,
  displayNewRecordFormGet,
  addNewRecordPost,
  updateRecordGet,
  updateRecordPost,
  updateArtistGet,
  displayRecordDetailsGet,
};
