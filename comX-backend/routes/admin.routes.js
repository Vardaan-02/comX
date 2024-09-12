const express = require('express');
const router = express.Router();
const isAuthorised = require('../middlewares/isAuth.middleware');
const isAdmin = require('../middlewares/isAdmin.middleware');
const { getPendingPosts, verifyPost } = require('../controllers/admin.controller');

// admin's only special task is to approve posts by students
router.get('/pendingPosts', isAuthorised, isAdmin, getPendingPosts);
// admin can either accept or reject the post
router.put('/verify/:id', isAuthorised, isAdmin, verifyPost);
// admin can use all other simple routes that are used by user
module.exports = router;
