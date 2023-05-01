const router = require('express').Router();
const {
    getThought,
    getSingleThought,
    createThoughts,
    updateThoughts,
    deleteThoughts,
    addReaction,
    removeReaction,
} = require('../../controllers/thought-controller');

// /api/applications
router.route('/').get(getThought).post(createThoughts);

// /api/applications/:applicationId
router.route('/:thoughtId').get(getSingleThought).put(updateThoughts).delete(deleteThoughts);


// /api/applications/:applicationId/tags
router.route('/:thoughtId/tags').post(addReaction);


router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;