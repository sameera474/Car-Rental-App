import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import MainLayout from "../../layouts/MainLayout";

// Dummy Data (Replace with API later)
const carsData = [
  { id: 1, name: "Toyota Corolla", year: 2021, price: 50, status: "Available" },
  { id: 2, name: "BMW X5", year: 2022, price: 120, status: "Rented" },
];

const ManageCars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // TODO: Fetch from API later
    setCars(carsData);
  }, []);

  return (
    <MainLayout>
      <Container>
        <Typography variant="h4" gutterBottom>
          Manage Cars
        </Typography>
        <Button variant="contained" color="primary" sx={{ mb: 2 }}>
          Add New Car
        </Button>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Car Name</TableCell>
                <TableCell>Year</TableCell>
                <TableCell>Price ($/day)</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cars.map((car) => (
                <TableRow key={car.id}>
                  <TableCell>{car.name}</TableCell>
                  <TableCell>{car.year}</TableCell>
                  <TableCell>${car.price}</TableCell>
                  <TableCell>{car.status}</TableCell>
                  <TableCell>
                    <Button variant="outlined" color="secondary" sx={{ mr: 1 }}>
                      Edit
                    </Button>
                    <Button variant="outlined" color="error">
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </MainLayout>
  );
};

export default ManageCars;
