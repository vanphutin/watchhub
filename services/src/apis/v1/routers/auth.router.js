import express from "express";
import {
  validateLogin,
  validateRegister,
} from "../middlewares/validate.middleware.js";
import { login, register } from "../controllers/auth.controller.js";
const router = express.Router();
router.post("/login", validateLogin, login);
router.post("/register", validateRegister, register);
export default router;
