import Rental from "../models/Rental.js";

// ✅ Function to get user rental history
export const getUserRentals = async (req, res) => {
  try {
    const rentals = await Rental.find({ user: req.params.userId }).populate(
      "car"
    );
    res.json(rentals);
  } catch (error) {
    res.status(500).json({ message: "Error fetching rental history" });
  }
};

// ✅ Function to rent a car
export const rentCar = async (req, res) => {
  try {
    const { carId, startDate, endDate, totalCost } = req.body;
    const newRental = new Rental({
      user: req.user.userId,
      car: carId,
      startDate,
      endDate,
      totalCost,
      status: "active",
    });

    await newRental.save();
    res.status(201).json(newRental);
  } catch (error) {
    res.status(500).json({ message: "Error processing rental" });
  }
};

// ✅ Function to return a car
export const returnCar = async (req, res) => {
  try {
    const rental = await Rental.findById(req.body.rentalId);
    if (!rental) return res.status(404).json({ message: "Rental not found" });

    rental.status = "completed";
    await rental.save();

    res.json({ message: "Car returned successfully", rental });
  } catch (error) {
    res.status(500).json({ message: "Error processing return" });
  }
};
