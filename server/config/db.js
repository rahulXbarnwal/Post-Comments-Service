import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(async () => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log("Error while connecting Database", err);
  });
