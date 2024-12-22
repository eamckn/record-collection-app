const db = require("../db/queries");

const displayHomeGet = async (req, res) => {
  const records = await db.getAllRecords();
  const artists = await db.getAllArtists();
  res.render("index", { records: records, artists: artists });
};

const addNewArtistGet = async (req, res) => {
  const artists = await db.getAllArtists();
  res.render("newCategory", { artists: artists });
};

const addNewArtistPost = async (req, res) => {
  const { new_artist } = req.body;
  await db.addNewArtist(new_artist);
  res.redirect("/");
};

module.exports = {
  displayHomeGet,
  addNewArtistGet,
  addNewArtistPost,
};
