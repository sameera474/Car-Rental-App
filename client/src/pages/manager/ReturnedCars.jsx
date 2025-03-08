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
const returnedCarsData = [
  {
    id: 1,
    car: "Toyota Corolla",
    user: "John Doe",
    returnDate: "2025-03-05",
    status: "Pending Inspection",
  },
];

const ReturnedCars = () => {
  const [returnedCars, setReturnedCars] = useState([]);

  useEffect(() => {
    // TODO: Fetch from API later
    setReturnedCars(returnedCarsData);
  }, []);

  return (
    <MainLayout>
      <Container>
        <Typography variant="h4" gutterBottom>
          Returned Cars
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Car</TableCell>
                <TableCell>User</TableCell>
                <TableCell>Return Date</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {returnedCars.map((car) => (
                <TableRow key={car.id}>
                  <TableCell>{car.car}</TableCell>
                  <TableCell>{car.user}</TableCell>
                  <TableCell>{car.returnDate}</TableCell>
                  <TableCell>
                    <Button variant="contained" color="primary">
                      Mark as Available
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

export default ReturnedCars;
