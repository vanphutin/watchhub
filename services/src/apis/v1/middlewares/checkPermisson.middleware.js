import jwt from "jsonwebtoken";

import dotenv from "dotenv";
dotenv.config();

export const authenToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Kiểm tra xem header có tồn tại hay không
  if (!authHeader) {
    return res.status(401).json({ message: "Authorization header is missing" });
  }

  // Lấy token từ header
  const token = authHeader.split(" ")[1];
  if (!token) {
    return res
      .status(401)
      .json({ status: "error", message: "Token is missing" });
  }

  // Xác minh token
  jwt.verify(token, process.env.JWT_KEY, (error, data) => {
    if (error) {
      return res
        .status(403)
        .json({ status: "error", message: "Invalid or expired token" });
    }

    req.user = data;

    next();
  });
};
