import { Router } from "express";
import { login, loginRequired, logout, profile, register } from "../controllers/auth.controller.js";
const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", loginRequired, logout);
router.get("/profile", loginRequired, profile);

export const authRouter = router;
