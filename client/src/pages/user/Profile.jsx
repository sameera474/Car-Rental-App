import React from "react";
import { Container, Typography, Paper, Avatar, Button } from "@mui/material";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    navigate("/login"); // Redirect if not logged in
    return null;
  }

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, textAlign: "center" }}>
        <Avatar
          sx={{
            bgcolor: "secondary.main",
            width: 80,
            height: 80,
            margin: "auto",
          }}
        >
          {user.name ? user.name.charAt(0).toUpperCase() : "U"}
        </Avatar>

        <Typography variant="h5" sx={{ mt: 2 }}>
          {user.name}
        </Typography>
        <Typography variant="body1">{user.email}</Typography>

        <Button
          variant="contained"
          color="error"
          sx={{ mt: 3 }}
          onClick={() => {
            logout();
            navigate("/");
          }}
        >
          Logout
        </Button>
      </Paper>
    </Container>
  );
};

export default Profile;
