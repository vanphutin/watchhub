import Users from "../models/users.model.js";

export const getUsers = async (req, res) => {
  try {
    const users = await Users.getUsers();

    res.status(200).json({
      status: "success",
      data: users,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: error.message || "Internal server error",
      name: error.name || "Error",
    });
  }
};
