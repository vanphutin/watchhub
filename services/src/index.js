import dotenv from "dotenv";
import express from "express";
import database from "./config/database.config.js";
import cors from "cors";
dotenv.config();
import router_v1 from "./apis/v1/routers/index.router.js";

const app = express();
const PORT = process.env.PORT || 8081;

// START CORS =====================================================================

var whitelist = [
  "http://localhost:3000",
  "http://localhost:4000",
  "https://watchhub-vpt.netlify.app/",
];
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};
app.options("*", cors(corsOptions));

// Apply CORS middleware
app.use(cors(corsOptions));

// END CORS =====================================================================

// START Middleware =====================================================================

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// END Middleware =====================================================================

// START CONNECT TO DATABASE  =====================================================================

// Register API routes
router_v1(app);
const connectToDatabase = async () => {
  try {
    const connection = await database.getConnection();

    console.log(
      `Connected to MySQL database || Host: ${
        process.env.MYSQL_HOST || "localhost"
      }, Port: ${process.env.MYSQL_PORT || 3307}`
    );

    connection.release();

    // Start the server
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error connecting to database:", error.message);
    process.exit(1);
  }
};

connectToDatabase();

// END CONNECT TO DATABASE  =====================================================================

app.get("/", (req, res) => {
  res.send("Hello, World!");
});
