import db from "../../../config/database.config.js";
import { handleErrorSQL } from "../helpers/handleErrorSQL.js";

const Users = {
  getUsers: async () => {
    const sql_getUsers =
      "SELECT users.id, users.username ,users.avatar_url, users.is_vip, users.status, users.created_at, users.created_at, users.updated_at, users.role  FROM users";
    try {
      const [rows] = await db.query(sql_getUsers);
      return rows;
    } catch (error) {
      handleErrorSQL(error);
    }
  },
  login: async (username) => {
    const sql_login = "SELECT * FROM users WHERE username=?";
    try {
      const [rows] = await db.query(sql_login, username);
      return rows[0];
    } catch (error) {
      handleErrorSQL(error);
    }
  },
  checkUsername: async (username) => {
    const sql_checkUserName = "SELECT * FROM users where username=?";
    try {
      const [rows] = await db.query(sql_checkUserName, username);

      return rows[0];
    } catch (error) {
      handleErrorSQL(error);
    }
  },
  checkEmail: async (username) => {
    const sql_checkUserName = "SELECT * FROM users where email=?";
    try {
      const [rows] = await db.query(sql_checkUserName, username);

      return rows[0];
    } catch (error) {
      handleErrorSQL(error);
    }
  },
  checkPassword: async (password) => {
    const sql_checkPassword = "SELECT * FROM users where password=?";
    try {
      const [rows] = await db.query(sql_checkPassword, password);
      return rows[0];
    } catch (error) {
      handleErrorSQL(error);
    }
  },
  register: async (id, username, password, email) => {
    const sql_register =
      "INSERT INTO users (id, username,password,email) VALUES (?, ?, ?, ?)";
    try {
      const [rows] = await db.query(sql_register, [
        id,
        username,
        password,
        email,
      ]);
      return rows;
    } catch (error) {
      handleErrorSQL(error);
    }
  },
};

export default Users;
