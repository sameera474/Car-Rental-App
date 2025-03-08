import React from "react";
import { Typography, Box, Button, Container, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";

const AdminDashboard = () => {
  return (
    <MainLayout>
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ padding: 4 }}>
          <Typography variant="h3" gutterBottom>
            Admin Dashboard
          </Typography>
          <Typography variant="body1" paragraph>
            Manage bosses, oversee system settings, and reset the platform if
            needed.
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mt: 3 }}>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/admin/bosses"
            >
              Manage Bosses
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              component={Link}
              to="/admin/reset"
            >
              Reset System
            </Button>
          </Box>
        </Paper>
      </Container>
    </MainLayout>
  );
};

export default AdminDashboard;
