import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser, loginUser } from "../../services/authService";
import { TextField, Button, Container, Typography, Paper } from "@mui/material";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // ✅ Define handleChange function
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    try {
      console.log("📤 Sending Data: ", user);

      // ✅ Step 1: Register User
      const registerResponse = await registerUser(user);
      console.log("✅ Registration Success: ", registerResponse);

      // ✅ Step 2: Wait 1 second before login (to allow DB processing)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // ✅ Step 3: Login with the same credentials
      const loginResponse = await loginUser({
        email: user.email,
        password: user.password,
      });
      console.log("✅ Auto Login Success: ", loginResponse);

      // ✅ Step 4: Redirect to Dashboard
      navigate("/dashboard");
    } catch (err) {
      console.error("❌ Registration/Login failed:", err);
      setError(err.message);
    }
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Typography variant="h4" gutterBottom textAlign="center">
          Register
        </Typography>
        {error && <Typography color="error">{error}</Typography>}
        <TextField
          fullWidth
          label="Full Name"
          name="name"
          margin="normal"
          value={user.name}
          onChange={handleChange} // ✅ Fix: Now defined
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
        <Button
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          onClick={handleRegister}
        >
          Register
        </Button>
      </Paper>
    </Container>
  );
};

export default Register;
