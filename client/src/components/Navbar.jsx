import React, { useState, useEffect } from "react";
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
  Menu,
  MenuItem,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  // ✅ Update navbar when user logs in or out
  useEffect(() => {}, [user]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    logout();
    setMobileOpen(false);
    setAnchorEl(null);
    navigate("/");
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Car Rental
          </Typography>

          <Box
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/about">
              About Us
            </Button>
            <Button color="inherit" component={Link} to="/contact">
              Contact Us
            </Button>

            {user ? (
              <>
                <Button color="inherit" component={Link} to="/dashboard">
                  Dashboard
                </Button>
                <Button color="inherit" component={Link} to="/rentals">
                  My Rentals
                </Button>
                <Button color="inherit" component={Link} to="/cars">
                  Available Cars
                </Button>

                {/* ✅ Profile Avatar */}
                <IconButton onClick={handleProfileMenuOpen} color="inherit">
                  <Avatar sx={{ bgcolor: "secondary.main" }}>
                    {user.name ? user.name.charAt(0).toUpperCase() : "U"}
                  </Avatar>
                </IconButton>

                {/* ✅ Profile Dropdown Menu */}
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleProfileMenuClose}
                >
                  <MenuItem
                    component={Link}
                    to="/profile"
                    onClick={handleProfileMenuClose}
                  >
                    My Profile
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </>
            ) : (
              <>
                <Button color="inherit" component={Link} to="/login">
                  Login
                </Button>
                <Button color="inherit" component={Link} to="/register">
                  Register
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* ✅ Mobile Drawer (Sidebar) */}
      <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle}>
        <List sx={{ width: 250 }}>
          <ListItem component={Link} to="/" onClick={handleDrawerToggle}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem component={Link} to="/about" onClick={handleDrawerToggle}>
            <ListItemText primary="About Us" />
          </ListItem>
          <ListItem component={Link} to="/contact" onClick={handleDrawerToggle}>
            <ListItemText primary="Contact Us" />
          </ListItem>

          {user ? (
            <>
              <ListItem
                component={Link}
                to="/dashboard"
                onClick={handleDrawerToggle}
              >
                <ListItemText primary="Dashboard" />
              </ListItem>
              <ListItem
                component={Link}
                to="/rentals"
                onClick={handleDrawerToggle}
              >
                <ListItemText primary="My Rentals" />
              </ListItem>
              <ListItem
                component={Link}
                to="/cars"
                onClick={handleDrawerToggle}
              >
                <ListItemText primary="Available Cars" />
              </ListItem>
              <ListItem
                component={Link}
                to="/profile"
                onClick={handleDrawerToggle}
              >
                <ListItemText primary="My Profile" />
              </ListItem>
              <ListItem button onClick={handleLogout}>
                <ListItemText primary="Logout" />
              </ListItem>
            </>
          ) : (
            <>
              <ListItem
                component={Link}
                to="/login"
                onClick={handleDrawerToggle}
              >
                <ListItemText primary="Login" />
              </ListItem>
              <ListItem
                component={Link}
                to="/register"
                onClick={handleDrawerToggle}
              >
                <ListItemText primary="Register" />
              </ListItem>
            </>
          )}
        </List>
      </Drawer>
    </>
  );
};
export default Navbar;
