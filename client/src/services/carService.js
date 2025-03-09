import axios from "axios";

const API_URL = "http://localhost:5000/api/cars";

// Get All Available Cars
export const getAvailableCars = async () => {
  const response = await axios.get(`${API_URL}/available`);
  return response.data;
};

// Get Car Details by ID
export const getCarDetails = async (carId) => {
  const response = await axios.get(`${API_URL}/${carId}`);
  return response.data;
};
