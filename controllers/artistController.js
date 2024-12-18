const db = require("../db/queries");

const displayArtistRecordsGet = async (req, res) => {
  const { artist } = req.params;
  //console.log("clicked artist is " + artist);
  const records = await db.getArtistRecords(artist);
  //records.forEach((record) => console.log(record));
  res.render("category", { artist: artist, records: records });
};

const displayNewRecordFormGet = (req, res) => {
  res.render("newRecord");
};

const updateRecordGet = async (req, res) => {
  const { id } = req.params;
  const [record] = await db.getRecordDetails(id);
  //console.log(record);
  res.render("updateRecord", { record: record });
};

const updateArtistGet = (req, res) => {
  res.render("updateCategory");
};

const displayRecordDetailsGet = async (req, res) => {
  const { id } = req.params;
  const [record] = await db.getRecordDetails(id);
  res.render("details", { record: record });
};

module.exports = {
  displayArtistRecordsGet,
  displayNewRecordFormGet,
  updateRecordGet,
  updateArtistGet,
  displayRecordDetailsGet,
};
