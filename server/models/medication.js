const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const medicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dosage_size: { type: Number, default: 0, required: true },
  dosage_unit: { type: String, required: true },
  dosage: { type: Number, default: 0, required: true },
  type: { type: String, required: true },
  taken: { type: Boolean, required: true },
  duration: { type: Number, default: 0, required: true },
  duration_unit: { type: String, required: true },
  morning: { type: Boolean, required: true },
  afternoon: { type: Boolean, required: true },
  evening: { type: Boolean, required: true },
  createdAt: { type: Number, default: Date.now() },
});

module.exports = mongoose.model("medication", medicationSchema);
