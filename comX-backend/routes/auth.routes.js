const express = require('express');
const router = express.Router();

const isAuthorised = require("../middlewares/isAuth.middleware");
const { register, login, logout, verifyEmail } = require('../controllers/auth.controller');

// to register as the user, it has different flows for user and admin inside the controller
router.post('/register', register);
// login route only possible if email is verified
router.post('/login', login);
// logout route 
router.post('/logout', isAuthorised, logout);
// to verify email requires otp sent on email
router.post('/verifyEmail', verifyEmail);


// router.post('/reset-password', resetPassword);

module.exports = router;
