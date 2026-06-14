import fs from "fs";
import csv from "csv-parser";
import { createObjectCsvWriter } from "csv-writer";

const LEARNING_FILE =
  "./storage/userLearning.csv";

/* READ ALL LEARNING DATA */

export const readLearning = () => {

  return new Promise(
    (resolve, reject) => {

      const learning = [];

      fs.createReadStream(
        LEARNING_FILE
      )
        .pipe(csv())
        .on(
          "data",
          (row) => learning.push(row)
        )
        .on(
          "end",
          () => resolve(learning)
        )
        .on(
          "error",
          reject
        );

    }
  );

};

/* WRITE ALL LEARNING DATA */

export const writeLearning =
  async (learning) => {

    const csvWriter =
      createObjectCsvWriter({

        path: LEARNING_FILE,

        header: [

          {
            id: "email",
            title: "email",
          },

          {
            id: "technology",
            title: "technology",
          },

          {
            id: "progress",
            title: "progress",
          },

          {
            id: "status",
            title: "status",
          },

        ],

      });

    await csvWriter.writeRecords(
      learning
    );

  };

/* ADD NEW LEARNING TRACK */

export const addLearningTrack =
  async (
    email,
    technology
  ) => {

    const learning =
      await readLearning();

    const exists =
      learning.find(
        (item) =>
          item.email.toLowerCase() ===
            email.toLowerCase() &&
          item.technology ===
            technology
      );

    if (exists) return;

    learning.push({

      email,

      technology,

      progress: 0,

      status: "Started",

    });

    await writeLearning(
      learning
    );

  };

/* UPDATE PROGRESS */

export const updateProgress =
  async (
    email,
    technology,
    progressIncrease
  ) => {

    const learning =
      await readLearning();

    const track =
      learning.find(
        (item) =>
          item.email.toLowerCase() ===
            email.toLowerCase() &&
          item.technology ===
            technology
      );

    if (!track) return;

    let progress =
      Number(
        track.progress
      );

    progress +=
      progressIncrease;

    if (progress > 100) {
      progress = 100;
    }

    track.progress =
      progress;

    if (progress >= 100) {

      track.status =
        "Completed";

    } else if (
      progress >= 50
    ) {

      track.status =
        "In Progress";

    } else {

      track.status =
        "Learning";

    }

    await writeLearning(
      learning
    );

  };

/* GET ONE USER'S LEARNING JOURNEY */

export const getUserLearning =
  async (email) => {

    const learning =
      await readLearning();

    return learning.filter(
      (item) =>
        item.email.toLowerCase() ===
        email.toLowerCase()
    );

  };