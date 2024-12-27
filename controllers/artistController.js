const db = require("../db/queries");
const { body, validationResult } = require("express-validator");

const blankMsg = "cannot be left blank";

const validateArtist = [
  body("artist_name")
    .trim()
    .notEmpty()
    .withMessage("Artist name " + blankMsg),
  body("artist_img")
    .trim()
    .notEmpty()
    .withMessage("This field " + blankMsg)
    .isURL()
    .withMessage("Please enter a valid URL for the artist image"),
];

const validateRecord = [
  body("record_title")
    .trim()
    .notEmpty()
    .withMessage("Record title " + blankMsg),
  body("record_year")
    .trim()
    .notEmpty()
    .withMessage("Release year " + blankMsg)
    .isInt()
    .withMessage("Release year must be an integer"),
  body("record_label")
    .trim()
    .notEmpty()
    .withMessage("Label field " + blankMsg),
  body("record_genre")
    .trim()
    .notEmpty()
    .withMessage("Genre " + blankMsg),
  body("record_art")
    .trim()
    .notEmpty()
    .withMessage("This field " + blankMsg)
    .isURL()
    .withMessage("Please enter a valid URL for the artist image"),
];

const displayArtistRecordsGet = async (req, res) => {
  const { artist_id } = req.params;
  const artist = await db.getArtistByArtistID(artist_id);
  const records = await db.getArtistRecords(artist_id);
  const artists = await db.getAllArtists();
  res.render("category", {
    artist: artist,
    records: records,
    artists: artists,
  });
};

const displayRecordDetailsGet = async (req, res) => {
  const { id } = req.params;
  const record = await db.getRecordDetails(id);
  const artists = await db.getAllArtists();
  res.render("details", { record: record, artists: artists });
};

const displayNewRecordFormGet = async (req, res) => {
  const { artist_id } = req.params;
  const artist = await db.getArtistByArtistID(artist_id);
  const artists = await db.getAllArtists();
  res.render("newRecord", { artist: artist, artists: artists });
};

const addNewRecordPost = [
  validateRecord,
  async (req, res) => {
    const {
      record_title,
      record_artist_id,
      record_year,
      record_genre,
      record_label,
      record_art,
    } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const artists = await db.getAllArtists();
      const artist = await db.getArtistByArtistID(record_artist_id);
      return res.status(400).render("newRecord", {
        artist: artist,
        artists: artists,
        errors: errors.array(),
      });
    }
    await db.addNewRecord(
      record_title,
      record_artist_id,
      record_year,
      record_genre,
      record_label,
      record_art
    );
    res.redirect(`/artists/${record_artist_id}`);
  },
];

const updateRecordGet = async (req, res) => {
  const { record_id } = req.params;
  const record = await db.getRecordDetails(record_id);
  const artists = await db.getAllArtists();
  res.render("updateRecord", { record: record, artists: artists });
};

const updateRecordPost = [
  validateRecord,
  async (req, res) => {
    const {
      record_title,
      record_year,
      record_label,
      record_genre,
      record_art,
      record_id,
    } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const record = await db.getRecordDetails(record_id);
      const artists = await db.getAllArtists();
      return res.status(400).render("updateRecord", {
        record: record,
        artists: artists,
        errors: errors.array(),
      });
    }
    await db.updateRecord(
      record_title,
      record_year,
      record_genre,
      record_label,
      record_art,
      record_id
    );
    const artist_id = await db.getArtistIdFromRecordID(record_id);
    res.redirect(`/artists/${artist_id}/${record_id}`);
  },
];

const updateArtistGet = async (req, res) => {
  const { artist_id } = req.params;
  const artists = await db.getAllArtists();
  const artist = await db.getArtistByArtistID(artist_id);
  res.render("updateCategory", { artist: artist, artists: artists });
};

const updateArtistPost = [
  validateArtist,
  async (req, res) => {
    const errors = validationResult(req);
    const { artist_name, artist_img, artist_id } = req.body;
    if (!errors.isEmpty()) {
      const artists = await db.getAllArtists();
      const artist = await db.getArtistByArtistID(artist_id);
      return res.status(400).render("updateCategory", {
        artist: artist,
        artists: artists,
        errors: errors.array(),
      });
    }
    await db.updateArtist(artist_name, artist_img, artist_id);
    res.redirect(`/artists/${artist_id}`);
  },
];

const deleteArtistRecordPost = async (req, res) => {
  const { record_id } = req.body;
  const artist_id = await db.getArtistIdFromRecordID(record_id);
  await db.deleteRecord(record_id);
  res.redirect(`/artists/${artist_id}`);
};

const deleteArtistPost = async (req, res) => {
  const { artist_id } = req.body;
  await db.deleteArtist(artist_id);
  res.redirect("/");
};

module.exports = {
  validateArtist,
  displayArtistRecordsGet,
  displayRecordDetailsGet,
  displayNewRecordFormGet,
  addNewRecordPost,
  updateRecordGet,
  updateRecordPost,
  updateArtistGet,
  updateArtistPost,
  deleteArtistRecordPost,
  deleteArtistPost,
};
