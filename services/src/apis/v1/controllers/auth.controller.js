import { handleErrorServer } from "../helpers/handleErrorServer.js";
import Users from "../models/users.model.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
import { v4 as uuidv4 } from "uuid";
import { hashPassword } from "../helpers/passwordEncryption.js";
export const login = async (req, res) => {
  const { username } = req.body;
  try {
    const user = await Users.login(username);
    if (!user) {
      return res.status(400).json({
        status: "error",
        message: "user not found",
      });
    }
    // jwt
    let accessToken = jwt.sign({ username: username }, process.env.JWT_KEY, {
      expiresIn: "30s",
    });

    return res.status(200).json({
      status: "success",
      data: {
        accessToken,
        user: {
          user_id: user.id,
          username: user.username,
          avatar: user.avatar_url,
          is_vip: user.is_vip,
          status: user.status,
          role: user.role,
          created_at: user.created_at,
          updated_at: user.updated_at,
        },
      },
    });
  } catch (error) {
    handleErrorServer(res, error);
  }
};

export const register = async (req, res) => {
  const { username, password, email } = req.body;
  const id = uuidv4();

  try {
    const user = await Users.register(
      id,
      username,
      await hashPassword(password),
      email
    );
    if (!user) {
      return res.status(400).json({
        status: "error",
        message: "something went wrong",
      });
    }
    return res.status(201).json({
      data: {
        status: "success",
        message: "new user created successfully",
      },
    });
  } catch (error) {
    handleErrorServer(res, error);
  }
};
