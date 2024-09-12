const express = require('express');
const router = express.Router();
const isAuthorised = require('../middlewares/isAuth.middleware');
const { getAllApprovedPosts, getPostsByCategory, searchApprovedPosts } = require('../controllers/general.controller');

// to get all the posts and display who has made what post
router.get('/posts', isAuthorised, getAllApprovedPosts);
// to get posts filtered by category. people can upload posts in different categories
router.get('/posts/:category',isAuthorised, getPostsByCategory);
// to search among all the posts and find relevant posts
router.get('/search',isAuthorised, searchApprovedPosts);

module.exports = router;