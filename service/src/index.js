import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT || 8081;
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(PORT, () => {
  console.log(`Server đang chạy trên port ${PORT}`);
});
