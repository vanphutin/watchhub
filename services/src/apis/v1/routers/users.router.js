import express from "express";
import { getUsers } from "../controllers/users.controller.js";
import { authenToken } from "../middlewares/checkPermisson.middleware.js";

const router = express.Router();

router.get("/", authenToken, getUsers);

export default router;
