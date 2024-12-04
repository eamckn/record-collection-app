const displayArtistRecordsGet = (req, res) => {
  res.render("category");
};

const displayNewRecordFormGet = (req, res) => {
  res.render("newRecord");
};

const updateRecordGet = (req, res) => {
  res.render("updateRecord");
};

const updateArtistGet = (req, res) => {
  res.render("updateCategory");
};

const displayRecordDetailsGet = (req, res) => {
  res.render("details");
};

module.exports = {
  displayArtistRecordsGet,
  displayNewRecordFormGet,
  updateRecordGet,
  updateArtistGet,
  displayRecordDetailsGet,
};
