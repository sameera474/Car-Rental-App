import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Paper,
  CircularProgress,
} from "@mui/material";
import { useAuth } from "../../context/AuthContext";
import MainLayout from "../../layouts/MainLayout";

const Login = () => {
  const { login } = useAuth(); // ✅ Use login function from AuthContext
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    setError("");
    setLoading(true);

    if (!credentials.email || !credentials.password) {
      setError("Email and Password are required.");
      setLoading(false);
      return;
    }

    try {
      await login(credentials.email, credentials.password);
    } catch (err) {
      setError(err.message || "Invalid credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>
      <Container maxWidth="xs">
        <Paper elevation={3} sx={{ padding: 4, textAlign: "center" }}>
          <Typography variant="h4" gutterBottom>
            Login
          </Typography>

          {error && <Typography color="error">{error}</Typography>}

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

          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : "Login"}
          </Button>
        </Paper>
      </Container>
    </MainLayout>
  );
};

export default Login;
