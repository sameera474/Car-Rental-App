import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
  Container,
} from "@mui/material";
import { Link } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";

// Dummy Data (Replace with API call later)
const carData = [
  { id: 1, name: "Toyota Corolla", image: "/cars/corolla.jpg", price: 50 },
  { id: 2, name: "BMW X5", image: "/cars/bmw.jpg", price: 120 },
  { id: 3, name: "Honda Civic", image: "/cars/civic.jpg", price: 45 },
];

const CarList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // TODO: Fetch from API later
    setCars(carData);
  }, []);

  return (
    <MainLayout>
      <Container>
        <Typography variant="h4" gutterBottom>
          Available Cars
        </Typography>
        <Grid container spacing={3}>
          {cars.map((car) => (
            <Grid item xs={12} sm={6} md={4} key={car.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={car.image}
                  alt={car.name}
                />
                <CardContent>
                  <Typography variant="h6">{car.name}</Typography>
                  <Typography variant="body2">
                    Price: ${car.price}/day
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to={`/cars/${car.id}`}
                    sx={{ mt: 2 }}
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </MainLayout>
  );
};

export default CarList;
