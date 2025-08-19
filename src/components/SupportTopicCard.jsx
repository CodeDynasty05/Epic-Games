import React from "react";
import { Box, Typography, Paper } from "@mui/material";

const SupportTopicCard = ({ title, description, image }) => {
  return (
    <Paper
      sx={{
        position: "relative",
        height: "250px",
        color: "white",
        borderRadius: "16px",
        overflow: "hidden",
        cursor: "pointer",
        "&:hover .topic-image": {
          transform: "scale(1.1)",
        },
      }}
    >
      <Box
        className="topic-image"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "transform 0.3s ease-in-out",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          p: 2,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {title}
        </Typography>
        {description && <Typography variant="body2">{description}</Typography>}
      </Box>
    </Paper>
  );
};

export default SupportTopicCard;
