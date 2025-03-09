import { createContext, useState, useEffect, useContext } from "react";
import {
  loginUser,
  logoutUser,
  getLoggedInUser,
} from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // ✅ Load user from localStorage when the app starts
  useEffect(() => {
    const storedUser = getLoggedInUser();
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  // ✅ Login function (Auto Updates UI & Redirects)
  const login = async (email, password) => {
    try {
      const response = await loginUser({ email, password });
      setUser(response.user);

      // ✅ Trigger Navbar Update
      window.dispatchEvent(new Event("authChange"));

      // ✅ Redirect & Refresh UI
      window.location.href = "/";
    } catch (error) {
      console.error("❌ Login Error:", error.message);
      throw error;
    }
  };

  // ✅ Logout function (Auto Updates UI & Redirects)
  const logout = () => {
    logoutUser();
    setUser(null);

    // ✅ Trigger Navbar Update
    window.dispatchEvent(new Event("authChange"));

    // ✅ Redirect & Refresh UI
    window.location.href = "/";
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// ✅ Custom hook to use AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
