const displayArtistRecordsGet = (req, res) => {
  res.send("This will show all of the records owned by a given artist");
};

const displayRecordDetailsGet = (req, res) => {
  res.send("This page would display the details for an artist's record.");
};

module.exports = {
  displayArtistRecordsGet,
  displayRecordDetailsGet,
};
