require("dotenv").config({ path: __dirname + "/.env" });

const mongoose = require("mongoose");
const User = require("./user");
const Medication = require("./medication");

const uri = process.env.MONGO_URL;

const connectDb = () => {
  return mongoose.connect(uri);
};

const models = { User, Medication };
export { connectDb };
export default models;
