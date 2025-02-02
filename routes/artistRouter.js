const { Router } = require("express");
const artistRouter = Router();
const artistController = require("../controllers/artistController");

artistRouter.get("/:artist_id", artistController.displayArtistRecordsGet);
artistRouter.post(
  "/:artist_id/:record_id/delete",
  artistController.deleteArtistRecordPost
);
artistRouter.post("/:artist_id/delete", artistController.deleteArtistPost);
artistRouter.get("/:artist_id/new", artistController.displayNewRecordFormGet);
artistRouter.post("/:artist_id/new", artistController.addNewRecordPost);
artistRouter.get("/:artist_id/update", artistController.updateArtistGet);
artistRouter.post("/:artist_id/update", artistController.updateArtistPost);
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
