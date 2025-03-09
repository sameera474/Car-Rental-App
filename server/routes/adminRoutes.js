import express from "express";
import { resetSystem, manageBosses } from "../controllers/adminController.js";
import { authenticate, isAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/reset-system", authenticate, isAdmin, resetSystem);
router.post("/manage-bosses", authenticate, isAdmin, manageBosses);

export default router;
