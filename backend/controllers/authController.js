/*import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";*/

/* REGISTER */

/*export const registerUser = async (req,res)=>{

  try{

    const {name,email,password} = req.body;

    const existingUser = await User.findOne({email});

    if(existingUser){

      return res.status(400).json({
        message:"User already exists"
      });

    }

    const hashedPassword =
    await bcrypt.hash(password,10);

    const user = await User.create({

      name,
      email,
      password:hashedPassword

    });

    const token = jwt.sign(

      {id:user._id},

      process.env.JWT_SECRET,

      {expiresIn:"7d"}

    );

    res.status(201).json({

      token,

      user:{
        id:user._id,
        name:user.name,
        email:user.email
      }

    });

  }catch(error){

    res.status(500).json({
      message:error.message
    });

  }

};*/



/* LOGIN */

/*export const loginUser = async (req,res)=>{

  try{

    const {email,password} = req.body;

    const user = await User.findOne({email});

    if(!user){

      return res.status(400).json({
        message:"Invalid credentials"
      });

    }

    const isMatch =
    await bcrypt.compare(password,user.password);

    if(!isMatch){

      return res.status(400).json({
        message:"Invalid credentials"
      });

    }

    const token = jwt.sign(

      {id:user._id},

      process.env.JWT_SECRET,

      {expiresIn:"7d"}

    );

    res.json({

      token,

      user:{
        id:user._id,
        name:user.name,
        email:user.email
      }

    });

  }catch(error){

    res.status(500).json({
      message:error.message
    });

  }

};*/


import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { readUsers, writeUsers,} from "../utils/csvHelper.js";
import { readStats, writeStats,} from "../utils/statsHelper.js";

export const register = async (req, res) => {
  try {
    const { name, password } = req.body;
    const email = req.body.email.trim().toLowerCase();

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const users = await readUsers();

    const existingUser = users.find(
      (user) =>
        user.email.toLowerCase() === email.toLowerCase()
    );

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    users.push({
      name,
      email,
      password: hashedPassword,
      provider: "local",
      picture: "",
    });

    await writeUsers(users);

    const stats =
      await readStats();

    stats.push({
      email,
      coursesCompleted: 0,
      problemsSolved: 0,
      learningStreak: 0,
      followers: 0,
      following: 0,
      certificates: 0,
    });

  await writeStats(stats);

    res.status(201).json({
      success: true,
      message: "Registration successful",
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export const login = async (req, res) => {
  try {
    const email = req.body.email.trim().toLowerCase();
    const { password } = req.body;

    const users = await readUsers();

    const user = users.find(
      (u) =>
        u.email.toLowerCase() === email.toLowerCase()
    );

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const match = await bcrypt.compare(
      password,
      user.password
    );

    if (!match) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign(
      {
        email: user.email,
        name: user.name,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.status(200).json({
      success: true,
      token,
      user: {
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export const googleLogin = async (req, res) => {
  try {

    const {
      email,
      name,
      picture
    } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    }

    const users = await readUsers();

    let user = users.find(
      (u) =>
        u.email.toLowerCase() ===
        email.toLowerCase()
    );

    if (!user) {

      user = {
        name,
        email,
        password: "",
        provider: "google",
        picture,
      };

      users.push(user);

      await writeUsers(users);
    }

    const token = jwt.sign(
      {
        email: user.email,
        name: user.name,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.status(200).json({
      success: true,
      token,
      user: {
        name: user.name,
        email: user.email,
        picture: user.picture,
      },
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      success: false,
      message: "Google Login Failed",
    });

  }
};