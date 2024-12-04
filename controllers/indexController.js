const displayHomeGet = (req, res) => {
  res.render("index");
};

const addNewArtistGet = (req, res) => {
  res.render("newCategory");
};

module.exports = {
  displayHomeGet,
  addNewArtistGet,
};
