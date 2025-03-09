import React, { useState } from "react";
import { TextField, Button, Box, Typography, Container } from "@mui/material";
import { Link } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <MainLayout>
      <Container maxWidth="xs">
        <Typography variant="h4" gutterBottom textAlign="center">
          Register
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
        />
        <TextField
          fullWidth
          label="Phone"
          name="phone"
          margin="normal"
          value={user.phone}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="Password"
          name="password"
          type="password"
          margin="normal"
          value={user.password}
          onChange={handleChange}
        />
        <Button fullWidth variant="contained" color="primary" sx={{ mt: 2 }}>
          Register
        </Button>
        <Box textAlign="center" sx={{ mt: 2 }}>
          <Typography variant="body2">
            Already have an account? <Link to="/login">Login</Link>
          </Typography>
        </Box>
      </Container>
    </MainLayout>
  );
};

export default Register;
