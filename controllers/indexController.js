const db = require("../db/queries");
const { validationResult } = require("express-validator");
const { validateArtist } = require("./artistController");

const displayHomeGet = async (req, res) => {
  const records = await db.getAllRecords();
  const artists = await db.getAllArtists();
  res.render("index", { records: records, artists: artists });
};

const addNewArtistGet = async (req, res) => {
  const artists = await db.getAllArtists();
  res.render("newCategory", { artists: artists });
};

const addNewArtistPost = [
  validateArtist,
  async (req, res) => {
    const { artist_name, artist_img } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const artists = await db.getAllArtists();
      return res.status(400).render("newCategory", {
        artists: artists,
        errors: errors.array(),
      });
    }
    await db.addNewArtist(artist_name, artist_img);
    res.redirect("/");
  },
];

module.exports = {
  displayHomeGet,
  addNewArtistGet,
  addNewArtistPost,
};
