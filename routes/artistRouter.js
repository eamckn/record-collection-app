const { Router } = require("express");
const artistRouter = Router();
const artistController = require("../controllers/artistController");

artistRouter.get("/", artistController.displayArtistRecordsGet);
artistRouter.get("/title", artistController.displayRecordDetailsGet);
artistRouter.get("/new", artistController.displayNewRecordFormGet);
artistRouter.get("/update", artistController.updateArtistGet);
artistRouter.get("/title/update", artistController.updateRecordGet);

module.exports = { artistRouter };
