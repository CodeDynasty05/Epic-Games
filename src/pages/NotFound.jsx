import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import PageContainer from "../components/PageContainer";

const NotFound = () => {
  return (
    <PageContainer>
      <Box
        sx={{
          position: "relative",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          overflow: "hidden",
          height: "50vh",
        }}
      >
        <Typography
          variant="h1"
          component="div"
          sx={{
            position: "absolute",
            fontSize: "30rem",
            fontWeight: "bold",
            color: "rgba(255, 255, 255, 0.05)",
            zIndex: 1,
            userSelect: "none",
          }}
        >
          404
        </Typography>

        <Box sx={{ zIndex: 2 }}>
          <Typography variant="h2" component="h1" sx={{ fontWeight: "bold" }}>
            Page Not Found
          </Typography>
          <Button
            component={RouterLink}
            to="/"
            variant="contained"
            sx={{
              mt: 4,
              py: 1.5,
              px: 5,
              backgroundColor: "#007aff",
              "&:hover": { backgroundColor: "#005cc8" },
            }}
          >
            Back to Store
          </Button>
        </Box>
      </Box>
    </PageContainer>
  );
};

export default NotFound;
