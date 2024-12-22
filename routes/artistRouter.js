const { Router } = require("express");
const artistRouter = Router();
const artistController = require("../controllers/artistController");

artistRouter.post("/:artist_id", artistController.deleteArtistRecordPost);
artistRouter.get("/:artist_id", artistController.displayArtistRecordsGet);
artistRouter.get("/:artist_id/new", artistController.displayNewRecordFormGet);
artistRouter.post("/:artist_id/new", artistController.addNewRecordPost);
artistRouter.get("/:artist_id/update", artistController.updateArtistGet);
artistRouter.get("/:artist_id/:id", artistController.displayRecordDetailsGet);
artistRouter.get(
  "/:artist_id/:record_id/update",
  artistController.updateRecordGet
);
artistRouter.post(
  "/:artist_id/:record_id/update",
  artistController.updateRecordPost
);

module.exports = { artistRouter };
