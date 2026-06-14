import { readUsers } from "../utils/csvHelper.js";
import { readStats } from "../utils/statsHelper.js";
import { getUserLearning } from "../utils/learningHelper.js";

export const getProfile = async (
  req,
  res
) => {

  try {

    const email =
      req.query.email;

    const users =
      await readUsers();

    const user =
      users.find(
        (u) =>
          u.email.toLowerCase() ===
          email.toLowerCase()
      );

    if (!user) {

      return res.status(404).json({
        success: false,
        message: "User not found",
      });

    }

    const stats =
      await readStats();

    const userStats =
      stats.find(
        s =>
          s.email.toLowerCase() ===
          email.toLowerCase()
      );

    

    const learningJourney =
      await getUserLearning(
        email
      );

    res.status(200).json({
      success: true,

      user: {
        name: user.name,
        email: user.email,

        picture:
          user.picture || "",

        role:
          user.role ||
          "New Developer",

        location:
          user.location ||
          "India",

        joined:
          user.joined ||
          "Recently",

        coursesCompleted:
          Number(
            userStats?.coursesCompleted || 0
          ),

        problemsSolved:
          Number(
            userStats?.problemsSolved || 0
          ),

        learningStreak:
          Number(
            userStats?.learningStreak || 0
          ),

        followers:
          Number(
            userStats?.followers || 0
          ),

        following:
          Number(
            userStats?.following || 0
          ),

        certificates:
          Number(
            userStats?.certificates || 0
          ),

        learning:
          user.learning
            ? user.learning.split("|")
            : [],
      },

      learningJourney,
      
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }
};