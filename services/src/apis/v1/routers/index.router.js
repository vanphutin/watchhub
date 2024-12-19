import express from "express";
import userRouter from "./users.router.js"; // Import userRouter
import authRouter from "./auth.router.js"; // Import userRouter

export default (app) => {
  const router = express.Router();
  router.use("/users", userRouter);
  router.use("/auth", authRouter);
  app.use("/api/v1", router);
};
