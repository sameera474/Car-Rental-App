import React from "react";
import { Container, Typography, Paper, Button } from "@mui/material";
import MainLayout from "../../layouts/MainLayout";

const ResetSystem = () => {
  const handleReset = () => {
    if (
      window.confirm(
        "Are you sure you want to reset the system? This action cannot be undone."
      )
    ) {
      console.log("System Reset Triggered");
      // TODO: Add API Call to Reset System
    }
  };

  return (
    <MainLayout>
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ padding: 4, textAlign: "center" }}>
          <Typography variant="h4" gutterBottom>
            Reset System
          </Typography>
          <Typography variant="body1" gutterBottom>
            This action will reset all system data. Proceed with caution.
          </Typography>
          <Button
            variant="contained"
            color="error"
            onClick={handleReset}
            sx={{ mt: 3 }}
          >
            Reset System
          </Button>
        </Paper>
      </Container>
    </MainLayout>
  );
};

export default ResetSystem;
