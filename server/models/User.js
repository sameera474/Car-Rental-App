import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: {
    type: String,
    enum: ["user", "manager", "boss", "admin"],
    default: "user",
  },
});

// ✅ Ensure password is hashed BEFORE saving to DB
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next(); // ✅ Prevent re-hashing
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

export default mongoose.model("User", UserSchema);
