import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql.createPool({
  queueLimit: 10,
  host: process.env.MYSQL_HOST || "localhost",
  port: process.env.MYSQL_PORT || 3307,
  database: process.env.MYSQL_DB || "watchhub",
  user: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "",
});

const promisePool = pool;

export default promisePool;
