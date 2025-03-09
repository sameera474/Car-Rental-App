import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/envConfig.js";

export const generateToken = (user) => {
  return jwt.sign(
    { userId: user._id, role: user.role },
    JWT_SECRET,
    { expiresIn: "1h" }
  );
};