const { Router } = require("express");
const indexRouter = Router();
const indexController = require("../controllers/indexController");

indexRouter.get("/", indexController.displayHomeGet);
indexRouter.get("/new", indexController.addNewArtistGet);
indexRouter.post("/new", indexController.addNewArtistPost);

module.exports = {
  indexRouter,
};
