const { Router } = require("express");
const artistRouter = Router();
const artistController = require("../controllers/artistController");

artistRouter.get("/", artistController.displayArtistRecordsGet);
artistRouter.get("/title", artistController.displayRecordDetailsGet);

module.exports = { artistRouter };
