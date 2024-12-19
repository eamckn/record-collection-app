const db = require("../db/queries");

const displayArtistRecordsGet = async (req, res) => {
  const { artist } = req.params;
  //console.log("clicked artist is " + artist);
  const records = await db.getArtistRecords(artist);
  const artists = await db.getAllArtists();
  //records.forEach((record) => console.log(record));
  res.render("category", {
    artist: artist,
    records: records,
    artists: artists,
  });
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
  //console.log(record);
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
  displayNewRecordFormGet,
  updateRecordGet,
  updateArtistGet,
  displayRecordDetailsGet,
};
