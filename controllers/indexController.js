const db = require("../db/queries");

const displayHomeGet = async (req, res) => {
  const records = await db.getAllRecords();
  res.render("index", { records: records });
};

const addNewArtistGet = (req, res) => {
  res.render("newCategory");
};

module.exports = {
  displayHomeGet,
  addNewArtistGet,
};
