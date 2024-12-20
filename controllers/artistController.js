const db = require("../db/queries");

const displayArtistRecordsGet = async (req, res) => {
  const { artist } = req.params;
  const records = await db.getArtistRecords(artist);
  const artists = await db.getAllArtists();
  res.render("category", {
    artist: artist,
    records: records,
    artists: artists,
  });
};

const deleteArtistRecordPost = async (req, res) => {
  const { id } = req.body;
  const artist = await db.getArtistFromRecordId(id);
  await db.deleteRecord(id);
  res.redirect(`/artists/${artist}`);
};

const displayNewRecordFormGet = async (req, res) => {
  const { artist } = req.params;
  const artists = await db.getAllArtists();
  res.render("newRecord", { artist: artist, artists: artists });
};

const updateRecordGet = async (req, res) => {
  const { id } = req.params;
  const [record] = await db.getRecordDetails(id);
  const artists = await db.getAllArtists();
  res.render("updateRecord", { record: record, artists: artists });
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
  updateRecordGet,
  updateArtistGet,
  displayRecordDetailsGet,
};
