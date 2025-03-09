import mongoose from "mongoose";

const CarSchema = new mongoose.Schema({
  manufacturer: String,
  model: String,
  year: Number,
  transmission: { type: String, enum: ["Automatic", "Manual"] },
  seats: Number,
  pricePerDay: Number,
  location: String,
  image: String,
  isAvailable: { type: Boolean, default: true },
});

export default mongoose.model("Car", CarSchema);
