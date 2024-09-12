const express = require('express');
const router = express.Router();

const isAuthorised = require("../middlewares/isAuth.middleware");
const isSuperAdmin = require("../middlewares/isAuth.middleware");
const {listAdmins, verifyAdmin, forbidAdmin} = require("../controllers/superAdmin.controller");

// listing all the admins before superadmin who want to register themselves
router.get("/listAdmins", isAuthorised, isSuperAdmin, listAdmins);
// to verify the admin
router.put("/verifyAdmin/:id", isAuthorised, isSuperAdmin, verifyAdmin);
// to forbid the admin
router.put("/forbidAdmin/:id", isAuthorised, isSuperAdmin, forbidAdmin);
// superAdmin can access all user and admin routes

module.exports = router;
