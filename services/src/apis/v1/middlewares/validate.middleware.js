import Users from "../models/users.model.js";
import bcrypt from "bcryptjs";

export const validateLogin = async (req, res, next) => {
  const { username, password } = req.body;
  // Kiểm tra các trường theo yêu cầu
  const requiredFields = ["username", "password"];
  for (const field of requiredFields) {
    if (!req.body[field]) {
      return res.status(400).json({
        status: "error",
        message: ` Missing required field ${field}`,
      });
    }
  }

  // check user
  const user = await Users.checkUsername(username);
  if (!user) {
    return res.status(400).json({
      codeStatus: 400,
      message: "username does not exist",
    });
  }

  //check password
  const checkPassword = await bcrypt.compare(password, user.password);
  if (!checkPassword) {
    return res.status(400).json({
      codeStatus: 400,
      message: "Invalid password",
    });
  }

  //pass
  next();
};
