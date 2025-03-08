import React from "react";
import { Typography, Box, Button, Container, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";

const ManagerDashboard = () => {
  return (
    <MainLayout>
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ padding: 4 }}>
          <Typography variant="h3" gutterBottom>
            Manager Dashboard
          </Typography>
          <Typography variant="body1" paragraph>
            Manage cars, approve rentals, and oversee returned cars.
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/manager/cars"
            >
              Manage Cars
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              component={Link}
              to="/manager/rentals"
            >
              Approve Rentals
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              component={Link}
              to="/manager/returned"
            >
              View Returned Cars
            </Button>
          </Box>
        </Paper>
      </Container>
    </MainLayout>
  );
};

export default ManagerDashboard;
