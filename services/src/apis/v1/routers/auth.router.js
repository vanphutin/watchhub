import express from "express";
import { validateLogin } from "../middlewares/validate.middleware.js";
import { login } from "../controllers/auth.controller.js";
const router = express.Router();
router.post("/login", validateLogin, login);
export default router;
