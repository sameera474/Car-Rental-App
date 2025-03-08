import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Typography, TextField, Button, Paper } from "@mui/material";
import MainLayout from "../../layouts/MainLayout";

const ReviewCar = () => {
  const { id } = useParams();
  const [review, setReview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Review Submitted:", review);
    // TODO: Send review to backend API
  };

  return (
    <MainLayout>
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ padding: 4 }}>
          <Typography variant="h4" gutterBottom>
            Leave a Review
          </Typography>
          <Typography variant="body1" gutterBottom>
            Share your experience with Car ID: {id}
          </Typography>
          <TextField
            fullWidth
            label="Your Review"
            multiline
            rows={4}
            value={review}
            onChange={(e) => setReview(e.target.value)}
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            sx={{ mt: 2 }}
          >
            Submit Review
          </Button>
        </Paper>
      </Container>
    </MainLayout>
  );
};

export default ReviewCar;
