import express from "express";
import {
  getAvailableCars,
  getCarById,
  addCar,
  updateCar,
  deleteCar,
} from "../controllers/carController.js";
import { authenticateUser, isManager } from "../middleware/authMiddleware.js"; // ✅ Fixed Import Names

const router = express.Router();

router.get("/", getAvailableCars);
router.get("/:id", getCarById);
router.post("/", authenticateUser, isManager, addCar);
router.put("/:id", authenticateUser, isManager, updateCar);
router.delete("/:id", authenticateUser, isManager, deleteCar);

export default router;
