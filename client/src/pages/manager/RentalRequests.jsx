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
const rentalRequestsData = [
  {
    id: 1,
    user: "John Doe",
    car: "Toyota Corolla",
    date: "2025-03-10",
    status: "Pending",
  },
  {
    id: 2,
    user: "Jane Smith",
    car: "BMW X5",
    date: "2025-03-12",
    status: "Pending",
  },
];

const RentalRequests = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // TODO: Fetch from API later
    setRequests(rentalRequestsData);
  }, []);

  return (
    <MainLayout>
      <Container>
        <Typography variant="h4" gutterBottom>
          Rental Requests
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>User</TableCell>
                <TableCell>Car</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {requests.map((request) => (
                <TableRow key={request.id}>
                  <TableCell>{request.user}</TableCell>
                  <TableCell>{request.car}</TableCell>
                  <TableCell>{request.date}</TableCell>
                  <TableCell>
                    <Button variant="contained" color="primary" sx={{ mr: 1 }}>
                      Approve
                    </Button>
                    <Button variant="contained" color="error">
                      Reject
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

export default RentalRequests;
