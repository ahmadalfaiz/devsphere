import fs from "fs";
import csv from "csv-parser";
import { createObjectCsvWriter } from "csv-writer";

const CSV_FILE = "./storage/users.csv";

export const readUsers = () => {
  return new Promise((resolve, reject) => {
    const users = [];

    fs.createReadStream(CSV_FILE)
      .pipe(csv())
      .on("data", (row) => users.push(row))
      .on("end", () => resolve(users))
      .on("error", reject);
  });
};

export const writeUsers = async (users) => {
  const csvWriter = createObjectCsvWriter({
    path: CSV_FILE,
    header: [
      { id: "name", title: "name" },
      { id: "email", title: "email" },
      { id: "password", title: "password" },
      { id: "provider", title: "provider" },
      { id: "picture", title: "picture" },
    ],
  });

  await csvWriter.writeRecords(users);
};