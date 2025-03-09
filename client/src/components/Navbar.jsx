import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false); // ✅ Toggle for Mobile Drawer

  // ✅ Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  // ✅ Toggle Drawer
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // ✅ Navigation Links
  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    ...(user
      ? [
          { label: "Dashboard", path: "/dashboard" },
          { label: "Logout", action: handleLogout },
        ]
      : [
          { label: "Login", path: "/login" },
          { label: "Register", path: "/register" },
        ]),
  ];

  return (
    <>
      {/* ✅ AppBar for Navbar */}
      <AppBar position="static">
        <Toolbar>
          {/* ✅ Mobile Menu Button */}
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: "block", md: "none" } }} // Hide on desktop
          >
            <MenuIcon />
          </IconButton>

          {/* ✅ Brand Name */}
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Car Rental
          </Typography>

          {/* ✅ Desktop Navigation (Hidden on Mobile) */}
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {navLinks.map((link, index) =>
              link.action ? (
                <Button key={index} color="inherit" onClick={link.action}>
                  {link.label}
                </Button>
              ) : (
                <Button
                  key={index}
                  color="inherit"
                  component={Link}
                  to={link.path}
                >
                  {link.label}
                </Button>
              )
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* ✅ Mobile Drawer */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <List sx={{ width: 250 }}>
          {navLinks.map((link, index) => (
            <ListItem
              button
              key={index}
              component={link.path ? Link : "div"}
              to={link.path}
              onClick={() => {
                if (link.action) link.action();
                handleDrawerToggle();
              }}
            >
              <ListItemText primary={link.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
