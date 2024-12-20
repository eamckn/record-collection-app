const { Router } = require("express");
const artistRouter = Router();
const artistController = require("../controllers/artistController");

artistRouter.post("/:artist", artistController.deleteArtistRecordPost);
artistRouter.get("/:artist", artistController.displayArtistRecordsGet);
artistRouter.get("/:artist/new", artistController.displayNewRecordFormGet);
artistRouter.get("/:artist/update", artistController.updateArtistGet);
artistRouter.get("/:artist/:id", artistController.displayRecordDetailsGet);
artistRouter.get("/:artist/:id/update", artistController.updateRecordGet);

module.exports = { artistRouter };
