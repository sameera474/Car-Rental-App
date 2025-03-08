import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  Paper,
} from "@mui/material";
import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <MainLayout>
      <Container maxWidth="xs">
        <Paper elevation={3} sx={{ padding: 4 }}>
          <Typography variant="h4" gutterBottom textAlign="center">
            Login
          </Typography>
          <TextField
            fullWidth
            label="Email"
            name="email"
            margin="normal"
            value={credentials.email}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            margin="normal"
            value={credentials.password}
            onChange={handleChange}
          />
          <Button fullWidth variant="contained" color="primary" sx={{ mt: 2 }}>
            Login
          </Button>
          <Box textAlign="center" sx={{ mt: 2 }}>
            <Typography variant="body2">
              Don't have an account? <Link to="/register">Register</Link>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </MainLayout>
  );
};

export default Login;
