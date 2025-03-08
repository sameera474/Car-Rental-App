import React from "react";
import { Container, Typography, Paper, Box } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";
import MainLayout from "../../layouts/MainLayout";

// Dummy Data (Replace with API later)
const revenueData = [
  { month: "Jan", revenue: 10000 },
  { month: "Feb", revenue: 12000 },
  { month: "Mar", revenue: 15000 },
];

const FinancialReport = () => {
  return (
    <MainLayout>
      <Container>
        <Typography variant="h4" gutterBottom>
          Financial Report
        </Typography>
        <Paper elevation={3} sx={{ padding: 4 }}>
          <Typography variant="h6">Monthly Revenue</Typography>
          <Box sx={{ width: "100%", height: 300 }}>
            <BarChart
              xAxis={[
                { scaleType: "band", data: revenueData.map((d) => d.month) },
              ]}
              series={[{ data: revenueData.map((d) => d.revenue) }]}
              width={600}
              height={300}
            />
          </Box>
        </Paper>
      </Container>
    </MainLayout>
  );
};

export default FinancialReport;
