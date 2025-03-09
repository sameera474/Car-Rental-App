import bcrypt from "bcryptjs";
import User from "../models/User.js";
import { generateToken } from "../utils/generateToken.js";

export const register = async (req, res) => {
  try {
    let { name, email, phone, password } = req.body;

    // ✅ Normalize Data
    email = email.toLowerCase().trim();
    phone = phone ? phone.toString().trim() : "";
    name = name.trim();

    // ✅ Validate password security
    if (!password || password.length < 6) {
      return res.status(400).json({
        message: "Password must be at least 6 characters long.",
      });
    }

    if (!/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
      return res.status(400).json({
        message:
          "Password must contain at least one uppercase letter and one number.",
      });
    }

    // ✅ Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // ❌ Remove manual password hashing (Mongoose schema handles it)
    const user = new User({ name, email, phone, password });

    // ✅ Save user (Mongoose will hash password automatically)
    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// ✅ Login User (Updated)
export const login = async (req, res) => {
  try {
    let { email, password } = req.body;

    // ✅ Normalize Input
    email = email.toLowerCase().trim();
    password = password.trim();

    // ✅ Find User
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    console.log("🔍 Stored Hashed Password in DB:", user.password);
    console.log("🔍 User Input Password:", password);

    // ✅ Compare Passwords
    const isMatch = await bcrypt.compare(password, user.password);
    console.log("🔍 bcrypt.compare() Result:", isMatch);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // ✅ Generate JWT Token
    const token = generateToken(user);

    res.json({
      message: "Login successful!",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("❌ Login Error:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
