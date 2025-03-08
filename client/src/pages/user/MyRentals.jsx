import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
  Paper,
} from "@mui/material";
import MainLayout from "../../layouts/MainLayout";

// Dummy Rental Data (Replace with API fetch later)
const rentalData = [
  {
    id: 1,
    car: "Toyota Corolla",
    date: "2025-03-01",
    price: 150,
    status: "Active",
  },
  { id: 2, car: "BMW X5", date: "2025-02-15", price: 300, status: "Completed" },
];

const MyRentals = () => {
  const [rentals, setRentals] = useState([]);

  useEffect(() => {
    // TODO: Fetch from API later
    setRentals(rentalData);
  }, []);

  return (
    <MainLayout>
      <Container>
        <Typography variant="h4" gutterBottom>
          My Rentals
        </Typography>
        <Grid container spacing={3}>
          {rentals.map((rental) => (
            <Grid item xs={12} sm={6} md={4} key={rental.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{rental.car}</Typography>
                  <Typography variant="body2">
                    Rented on: {rental.date}
                  </Typography>
                  <Typography variant="body2">
                    Total Cost: ${rental.price}
                  </Typography>
                  <Typography variant="body2">
                    Status: {rental.status}
                  </Typography>
                  {rental.status === "Completed" && (
                    <Button
                      variant="outlined"
                      color="primary"
                      sx={{ mt: 2 }}
                      href={`/review/${rental.id}`}
                    >
                      Leave a Review
                    </Button>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </MainLayout>
  );
};

export default MyRentals;
