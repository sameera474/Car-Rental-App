import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/public/Home";
import Login from "../pages/public/Login";
import Register from "../pages/public/Register";
import About from "../pages/public/About";
import CompanyLogin from "../pages/company/CompanyLogin";

// User Pages
import Dashboard from "../pages/user/Dashboard";
import CarList from "../pages/user/CarList";
import CarDetails from "../pages/user/CarDetails";
import MyRentals from "../pages/user/MyRentals";
import ReviewCar from "../pages/user/ReviewCar";
import Profile from "../pages/user/Profile";

// Manager Pages
import ManagerDashboard from "../pages/manager/Dashboard";
import ManageCars from "../pages/manager/ManageCars";
import RentalRequests from "../pages/manager/RentalRequests";
import ReturnedCars from "../pages/manager/ReturnedCars";

// Boss Pages
import BossDashboard from "../pages/boss/Dashboard";
import ManageManagers from "../pages/boss/ManageManagers";
import FinancialReport from "../pages/boss/FinancialReport";

// Admin Pages
import AdminDashboard from "../pages/admin/Dashboard";
import ManageBosses from "../pages/admin/ManageBosses";
import ResetSystem from "../pages/admin/ResetSystem";
import AddStaff from "../pages/admin/AddStaff";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<About />} />
      <Route path="/company-login" element={<CompanyLogin />} />
      {/* User Routes */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/cars" element={<CarList />} />
      <Route path="/cars/:id" element={<CarDetails />} />
      <Route path="/my-rentals" element={<MyRentals />} />
      <Route path="/review/:id" element={<ReviewCar />} />
      <Route path="/profile" element={<Profile />} />
      {/* Manager Routes */}
      <Route path="/manager/dashboard" element={<ManagerDashboard />} />
      <Route path="/manager/cars" element={<ManageCars />} />
      <Route path="/manager/rentals" element={<RentalRequests />} />
      <Route path="/manager/returned" element={<ReturnedCars />} />
      {/* Boss Routes */}
      <Route path="/boss/dashboard" element={<BossDashboard />} />
      <Route path="/boss/managers" element={<ManageManagers />} />
      <Route path="/boss/revenue" element={<FinancialReport />} />
      {/* Admin Routes */}
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/admin/bosses" element={<ManageBosses />} />
      <Route path="/admin/reset" element={<ResetSystem />} />
      <Route path="/admin/add-staff" element={<AddStaff />} />
    </Routes>
  );
};

export default AppRoutes;
