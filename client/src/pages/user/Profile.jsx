import React, { useState } from "react";
import { Container, TextField, Button, Typography, Paper } from "@mui/material";
import MainLayout from "../../layouts/MainLayout";

const Profile = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <MainLayout>
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ padding: 4 }}>
          <Typography variant="h4" gutterBottom>
            My Profile
          </Typography>
          <TextField
            fullWidth
            label="Full Name"
            name="name"
            margin="normal"
            value={user.name}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            margin="normal"
            value={user.email}
            onChange={handleChange}
            disabled
          />
          <TextField
            fullWidth
            label="Phone"
            name="phone"
            margin="normal"
            value={user.phone}
            onChange={handleChange}
          />
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>
            Update Profile
          </Button>
        </Paper>
      </Container>
    </MainLayout>
  );
};

export default Profile;
