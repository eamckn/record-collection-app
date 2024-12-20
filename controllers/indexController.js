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
  //console.log("post request sent from modal");
  const { new_artist } = req.body;
  await db.addNewArtist(new_artist);
  res.redirect("/");
};

const deleteArtistPost = async (req, res) => {
  const { artist } = req.body;
  await db.deleteArtist(artist);
  res.redirect("/");
};

module.exports = {
  displayHomeGet,
  addNewArtistGet,
  addNewArtistPost,
  deleteArtistPost,
};
