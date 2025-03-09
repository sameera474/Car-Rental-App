import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/envConfig.js";

// ✅ Export the authenticate function
export const authenticate = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(403).json({ message: "Invalid token" });
  }
};

// ✅ Export the isManager function
export const isManager = (req, res, next) => {
  if (!req.user || (req.user.role !== "manager" && req.user.role !== "admin")) {
    return res.status(403).json({ message: "Access denied" });
  }
  next();
};
