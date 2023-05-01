const router = require("express").Router();
const {
  getThought,
  getSingleThought,
  createThoughts,
  updateThoughts,
  deleteThoughts,
  addReactions,
  removeReactions,
} = require("../../controllers/thought-controller");

// /api/applications
router.route("/").get(getThought).post(createThoughts);

// /api/applications/:applicationId
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThoughts)
  .delete(deleteThoughts);

// /api/applications/:applicationId/tags
router.route("/:thoughtId/tags").post(addReactions);

router.route("/:thoughtId/reactions/:reactionId").delete(removeReactions);

module.exports = router;
