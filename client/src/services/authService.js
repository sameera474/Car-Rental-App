import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

// ✅ Register User
export const registerUser = async (userData) => {
  try {
    const requestData = {
      ...userData,
      email: userData.email.trim().toLowerCase(),
      password: userData.password.toString().trim(),
      phone: userData.phone?.toString().trim(),
    };

    console.log("📤 Sending Registration Data:", requestData);
    const response = await axios.post(`${API_URL}/register`, requestData);
    return response.data;
  } catch (error) {
    console.error(
      "❌ Registration Error:",
      error.response?.data || error.message
    );
    throw new Error(error.response?.data?.message || "Registration failed.");
  }
};

// ✅ Login User
export const loginUser = async ({ email, password }) => {
  try {
    const credentials = {
      email: email.trim().toLowerCase(),
      password: password.toString().trim(),
    };

    console.log("📤 Sending Login Data:", credentials);
    const response = await axios.post(`${API_URL}/login`, credentials);

    localStorage.setItem("token", response.data.token);
    localStorage.setItem("user", JSON.stringify(response.data.user));

    return response.data;
  } catch (error) {
    console.error("❌ Login Error:", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "Login failed.");
  }
};

// ✅ Get Logged-in User
export const getLoggedInUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

// ✅ Logout User
export const logoutUser = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};
