import express from "express";
import {
  getAvailableCars,
  getCarById,
  addCar,
  updateCar,
  deleteCar,
} from "../controllers/carController.js";
import { authenticate, isManager } from "../middleware/authMiddleware.js"; // ✅ Ensure correct import

const router = express.Router();

router.get("/", getAvailableCars);
router.get("/:id", getCarById);
router.post("/", authenticate, isManager, addCar);
router.put("/:id", authenticate, isManager, updateCar);
router.delete("/:id", authenticate, isManager, deleteCar);

export default router;
