import axios from "axios";

const API_URL = "http://localhost:5000/api/auth"; // Change for production

export const registerUser = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

export const loginUser = async (credentials) => {
  const response = await axios.post(`${API_URL}/login`, credentials);
  return response.data;
};

export const logoutUser = () => {
  localStorage.removeItem("token");
};
