import express from "express";
import userRouter from "./users.router.js"; // Import userRouter

export default (app) => {
  const router = express.Router();
  router.use("/users", userRouter);
  app.use("/api/v1", router);
};
