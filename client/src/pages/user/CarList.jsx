import React, { useEffect, useState } from "react";
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
import { getAvailableCars } from "../../services/carService";
import MainLayout from "../../layouts/MainLayout";

const CarList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const data = await getAvailableCars();
        setCars(data);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };
    fetchCars();
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
