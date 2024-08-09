import { Router } from "express";

import {register, login, logout, validCredentials} from "../controllers/auth.controller";

const router = Router();

router.post("/validCredentials", validCredentials)
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

export default router;