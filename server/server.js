import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import carRoutes from "./routes/carRoutes.js";
import rentalRoutes from "./routes/rentalRoutes.js"; // ✅ Ensure correct import
import { errorHandler } from "./middleware/errorMiddleware.js";
import { PORT } from "./config/envConfig.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/cars", carRoutes);
app.use("/api/rentals", rentalRoutes); // ✅ Ensure rentalRoutes is used

app.use(errorHandler);

// ✅ Connect to MongoDB only once
connectDB().then(() => {
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
});
