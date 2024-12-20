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

// func validate Email
const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailRegex.test(email);
};

export const validateRegister = async (req, res, next) => {
  const { username, password, email } = req.body;
  // Kiểm tra các trường theo yêu cầu
  const requiredFields = ["username", "password", "email"];
  for (const field of requiredFields) {
    if (!req.body[field]) {
      return res.status(400).json({
        status: "error",
        message: ` Missing required field ${field}`,
      });
    }
  }
  //check password
  if (password.length < 6) {
    return res.status(400).json({
      status: "error",
      message: "password to short",
    });
  }

  // check username
  const checkUsername = await Users.checkUsername(username);
  if (checkUsername) {
    return res.status(400).json({
      status: "error",
      message: "username already exists",
    });
  }
  // check email
  const checkEmail = await Users.checkEmail(email);

  if (!validateEmail(email)) {
    return res.status(400).json({
      status: "error",
      message: "email is invalid",
    });
  }

  if (checkEmail) {
    return res.status(400).json({
      status: "error",
      message: "email already exists",
    });
  }

  //pass
  next();
};
