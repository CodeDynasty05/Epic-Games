import React from "react";
import { Button, Typography } from "@mui/material";

const SelfServiceButton = ({ text, icon }) => {
  return (
    <Button
      startIcon={icon}
      sx={{
        backgroundColor: "#2a2a2a",
        color: "white",
        borderRadius: "8px",
        p: 2,
        textTransform: "none",
        justifyContent: "flex-start",
        width: "100%",
        "&:hover": {
          backgroundColor: "#3a3a3a",
        },
      }}
    >
      <Typography>{text}</Typography>
    </Button>
  );
};

export default SelfServiceButton;
