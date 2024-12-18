const db = require("../db/queries");

const displayHomeGet = async (req, res) => {
  const records = await db.getAllRecords();
  const artists = await db.getAllArtists();
  res.render("index", { records: records, artists: artists });
};

// const addNewArtistGet = (req, res) => {
//   res.render("newCategory");
// };

const addNewArtistPost = (req, res) => {
  console.log("post request sent from modal");
  res.redirect("/");
};

module.exports = {
  displayHomeGet,
  //addNewArtistGet,
  addNewArtistPost,
};
