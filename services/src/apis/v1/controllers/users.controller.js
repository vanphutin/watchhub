import { handleErrorServer } from "../helpers/handleErrorServer.js";
import Users from "../models/users.model.js";

export const getUsers = async (req, res) => {
  try {
    const users = await Users.getUsers();

    res.status(200).json({
      status: "success",
      data: {
        users,
      },
    });
  } catch (error) {
    handleErrorServer(error);
  }
};
