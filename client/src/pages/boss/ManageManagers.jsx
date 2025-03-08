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
const managersData = [
  { id: 1, name: "Alice Brown", email: "alice@example.com" },
  { id: 2, name: "Mark Johnson", email: "mark@example.com" },
];

const ManageManagers = () => {
  const [managers, setManagers] = useState([]);

  useEffect(() => {
    // TODO: Fetch from API later
    setManagers(managersData);
  }, []);

  return (
    <MainLayout>
      <Container>
        <Typography variant="h4" gutterBottom>
          Manage Managers
        </Typography>
        <Button variant="contained" color="primary" sx={{ mb: 2 }}>
          Add New Manager
        </Button>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {managers.map((manager) => (
                <TableRow key={manager.id}>
                  <TableCell>{manager.name}</TableCell>
                  <TableCell>{manager.email}</TableCell>
                  <TableCell>
                    <Button variant="outlined" color="error">
                      Remove
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

export default ManageManagers;
