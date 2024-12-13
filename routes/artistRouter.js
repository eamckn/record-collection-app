const { Router } = require("express");
const artistRouter = Router();
const artistController = require("../controllers/artistController");

artistRouter.get("/:artist", artistController.displayArtistRecordsGet);
artistRouter.get("/:artist/title", artistController.displayRecordDetailsGet);
artistRouter.get("/:artist/new", artistController.displayNewRecordFormGet);
artistRouter.get("/:artist/update", artistController.updateArtistGet);
artistRouter.get("/:artist/title/update", artistController.updateRecordGet);

module.exports = { artistRouter };
