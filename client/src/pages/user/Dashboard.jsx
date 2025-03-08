import React from "react";
import { Typography, Box, Button, Container, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";

const Dashboard = () => {
  return (
    <MainLayout>
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ padding: 4 }}>
          <Typography variant="h3" gutterBottom>
            Welcome, User!
          </Typography>
          <Typography variant="body1" paragraph>
            Here you can view your active rentals, browse available cars, and
            manage your profile.
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/cars"
            >
              Browse Cars
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              component={Link}
              to="/my-rentals"
            >
              View My Rentals
            </Button>
          </Box>
        </Paper>
      </Container>
    </MainLayout>
  );
};

export default Dashboard;
