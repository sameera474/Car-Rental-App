import express from "express";
import {
  rentCar,
  returnCar,
  getUserRentals,
} from "../controllers/rentalController.js"; // ✅ Ensure correct import
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/rent", authenticate, rentCar);
router.post("/return", authenticate, returnCar);
router.get("/history/:userId", authenticate, getUserRentals);

export default router; // ✅ Ensure default export
