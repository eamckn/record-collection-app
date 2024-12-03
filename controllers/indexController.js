const displayHomeGet = (req, res) => {
  res.send(
    "This is the home page! This will render the home view which will show all records."
  );
};

const addNewArtistGet = (req, res) => {
  res.send(
    "This is the page that will display the form/modal to add a new artist category."
  );
};

module.exports = {
  displayHomeGet,
  addNewArtistGet,
};
