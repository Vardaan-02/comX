const express = require('express');
const { uploadImages, viewProfile, deletePost, getUserPostsByStatus } = require('../controllers/user.controller');
const isAuthorised = require('../middlewares/isAuth.middleware');
const router = express.Router();

// to upload images and make a post
router.post('/uploadImages', isAuthorised, upload.array('files', 10), uploadImages);
// for user to view anyone's profile and the posts he has made
router.get('/viewProfile/:id', isAuthorised, viewProfile);
// for user to delete a post he has made
router.delete('/deletePost/:id', isAuthorised, deletePost);
// for user to see his own posts according to status
router.get('/getPostsByStatus', isAuthorised, getUserPostsByStatus);

module.exports = router;