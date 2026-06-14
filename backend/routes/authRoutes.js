/*import express from "express";

import {
  registerUser,
  loginUser
}
from "../controllers/authController.js";

const router = express.Router();

router.post("/register",registerUser);

router.post("/login",loginUser);

export default router;*/


import express from "express";

const router = express.Router();

import {
  register,
  login,
  googleLogin,
} from "../controllers/authController.js";

router.post("/register", register);
router.post("/login", login);
router.post("/google", googleLogin);

export default router;