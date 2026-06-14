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


import dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config();

import authRoutes from "./routes/authRoutes.js";

import profileRoutes from "./routes/profileRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.use(
  "/api/profile",
  profileRoutes
);

app.get("/", (req, res) => {
  res.send("CodePilot Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});