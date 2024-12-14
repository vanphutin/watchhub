import db from "../../../config/database.config.js";

const Users = {
  getUsers: async () => {
    const sql_getUsers = "SELECT * FROM users";
    try {
      const [rows] = await db.query(sql_getUsers);
      return rows;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};

export default Users;
