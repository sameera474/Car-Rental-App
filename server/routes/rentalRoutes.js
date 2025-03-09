import express from "express";
import {
  rentCar,
  returnCar,
  getUserRentals,
} from "../controllers/rentalController.js";
import { authenticateUser } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/rent", authenticateUser, rentCar);
router.post("/return", authenticateUser, returnCar);
router.get("/history/:userId", authenticateUser, getUserRentals);

export default router;
