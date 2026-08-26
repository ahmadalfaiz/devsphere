/*import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/auth",authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{

  console.log(
    `Server running on port ${PORT}`
  );

});*/


import "dotenv/config";
import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://devspherehq.pages.dev",
  "https://devspherehq.com",
  "https://www.devspherehq.com",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests without an Origin header
      // (for example, server-to-server requests or tools like Postman)
      if (!origin) {
        return callback(null, true);
      }

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/auth", authRoutes);

app.use("/api/profile", profileRoutes);

app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
  res.send("CodePilot Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
