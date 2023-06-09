const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriends,
  removeFriends,
} = require('../../controllers/user-controller');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);


router.route('/:userId/friends/:friendId').post(addFriends).delete(removeFriends);

module.exports = router;
