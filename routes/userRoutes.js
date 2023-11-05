const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// @route  GET /user
// @desc   Get all users
// @access Private (You can add authentication middleware here)
router.get('/', userController.getAllUsers);

// @route  GET /user/:id
// @desc   Get user by ID
// @access Private (You can add authentication middleware here)
router.get('/:id', userController.getUserById);

// @route  PUT /user/:id
// @desc   Update user by ID
// @access Private (You can add authentication middleware here)
router.put('/:id', userController.updateUser);

// @route  DELETE /user/:id
// @desc   Delete user by ID
// @access Private (You can add authentication middleware here)
router.delete('/:id', userController.deleteUser);

// Add more routes if necessary

module.exports = router;
