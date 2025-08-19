import React from "react";
import { Box } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";

const PageContainer = ({ children }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#121212",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          maxWidth: "85vw",
          width: "100%",
          mx: "auto",
        }}
      >
        {children}
      </Box>

      <Footer />
    </Box>
  );
};

export default PageContainer;
