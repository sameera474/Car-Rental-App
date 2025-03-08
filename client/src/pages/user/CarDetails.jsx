import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Typography, Button, Paper } from "@mui/material";
import MainLayout from "../../layouts/MainLayout";

// Dummy Data (Replace with API call later)
const carData = {
  1: {
    id: 1,
    name: "Toyota Corolla",
    description: "A comfortable sedan with great fuel efficiency.",
    price: 50,
  },
  2: {
    id: 2,
    name: "BMW X5",
    description: "A luxury SUV with premium features.",
    price: 120,
  },
  3: {
    id: 3,
    name: "Honda Civic",
    description: "A stylish compact car.",
    price: 45,
  },
};

const CarDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    // TODO: Fetch from API later
    setCar(carData[id]);
  }, [id]);

  if (!car) return <Typography>Loading...</Typography>;

  return (
    <MainLayout>
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ padding: 4 }}>
          <Typography variant="h3">{car.name}</Typography>
          <Typography variant="body1">{car.description}</Typography>
          <Typography variant="h6">Price: ${car.price} per day</Typography>
          <Button variant="contained" color="primary" sx={{ mt: 3 }}>
            Rent This Car
          </Button>
        </Paper>
      </Container>
    </MainLayout>
  );
};

export default CarDetails;
