import React from "react";
import { Typography, Box, Button, Container, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";

const BossDashboard = () => {
  return (
    <MainLayout>
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ padding: 4 }}>
          <Typography variant="h3" gutterBottom>
            Boss Dashboard
          </Typography>
          <Typography variant="body1" paragraph>
            View business performance, manage managers, and oversee financial
            reports.
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/boss/managers"
            >
              Manage Managers
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              component={Link}
              to="/boss/revenue"
            >
              Financial Reports
            </Button>
          </Box>
        </Paper>
      </Container>
    </MainLayout>
  );
};

export default BossDashboard;
