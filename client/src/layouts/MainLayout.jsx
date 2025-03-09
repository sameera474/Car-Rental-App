import React from "react";
import { Container } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      {/* <Navbar /> */}
      <Container sx={{ minHeight: "80vh", mt: 4 }}>{children}</Container>
      {/* <Footer /> */}
    </>
  );
};

export default MainLayout; // ✅ Ensure default export
