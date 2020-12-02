const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const userSchema = new Mongoose.Schema(
  {
    username: { type: String, unique: true, required: true },
    password: { type: String, unique: true, required: true },
    first: {
      type: String,
      unique: true,
      required: true,
    },
    last: {
      type: String,
      unique: true,
      required: true,
    },
    medicationList: [
      {
        text: String,
        _medication: { type: Mongoose.Types.ObjectId, ref: "medicationSchema" },
      },
    ],
    createdOn: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

userSchema.methods.fullName = function () {
  return this.first.trim() + " " + this.last.trim();
};

module.exports = Mongoose.model("User", userSchema);
