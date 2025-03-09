import axios from "axios";

const API_URL = "http://localhost:5000/api/rentals";

// Rent a Car
export const rentCar = async (carId, userId) => {
  const response = await axios.post(`${API_URL}/rent`, { carId, userId });
  return response.data;
};

// Get User Rental History
export const getUserRentals = async (userId) => {
  const response = await axios.get(`${API_URL}/history/${userId}`);
  return response.data;
};

// Return a Car
export const returnCar = async (rentalId) => {
  const response = await axios.post(`${API_URL}/return`, { rentalId });
  return response.data;
};
