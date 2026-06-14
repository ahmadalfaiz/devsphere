import fs from "fs";
import csv from "csv-parser";
import { createObjectCsvWriter }
from "csv-writer";

const STATS_FILE =
"./storage/userStats.csv";

export const readStats = () => {

  return new Promise(
    (resolve, reject) => {

      const stats = [];

      fs.createReadStream(
        STATS_FILE
      )
      .pipe(csv())
      .on(
        "data",
        row => stats.push(row)
      )
      .on(
        "end",
        () => resolve(stats)
      )
      .on(
        "error",
        reject
      );

    }
  );

};

export const writeStats =
async (stats) => {

  const csvWriter =
    createObjectCsvWriter({

      path: STATS_FILE,

      header: [

        {
          id:"email",
          title:"email"
        },

        {
          id:"coursesCompleted",
          title:"coursesCompleted"
        },

        {
          id:"problemsSolved",
          title:"problemsSolved"
        },

        {
          id:"learningStreak",
          title:"learningStreak"
        },

        {
          id:"followers",
          title:"followers"
        },

        {
          id:"following",
          title:"following"
        },

        {
          id:"certificates",
          title:"certificates"
        },

      ],
    });

  await csvWriter.writeRecords(
    stats
  );

};