import React from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const GameCard = ({ game }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/store/${game.id}`);
  };

  const renderPrice = () => {
    if (game.status) {
      // For Free Games section
      return (
        <Box>
          <Typography
            variant="body2"
            sx={{
              backgroundColor: "#007aff",
              display: "inline-block",
              px: 1,
              borderRadius: "4px",
              textTransform: "uppercase",
              fontSize: "0.75rem",
            }}
          >
            {game.status}
          </Typography>
          <Typography variant="body2" sx={{ color: "#aaaaaa", mt: 1 }}>
            {game.availability}
          </Typography>
        </Box>
      );
    }
    if (game.discount) {
      return (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography
            variant="body2"
            sx={{ backgroundColor: "#007aff", px: 1, borderRadius: "4px" }}
          >
            {game.discount}
          </Typography>
          <Typography
            variant="body2"
            sx={{ textDecoration: "line-through", color: "#aaaaaa" }}
          >
            {game.originalPrice}
          </Typography>
          <Typography variant="body1">{game.price}</Typography>
        </Box>
      );
    }
    return <Typography variant="body1">{game.price || "Free"}</Typography>;
  };

  return (
    <Box
      onClick={handleCardClick}
      sx={{
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        gap: 1.5,
        "&:hover .game-image": {
          transform: "scale(1.05)",
          filter: "brightness(1.1)",
        },
      }}
    >
      <Box sx={{ overflow: "hidden", borderRadius: "8px" }}>
        <Box
          className="game-image"
          component="img"
          src={game.image}
          alt={game.title}
          sx={{
            width: "100%",
            aspectRatio: "3/4",
            objectFit: "cover",
            borderRadius: "8px",
            transition: "transform 0.3s ease, filter 0.3s ease",
          }}
        />
      </Box>
      <Box>
        <Typography variant="caption" sx={{ color: "#aaaaaa" }}>
          {game.category}
        </Typography>
        <Typography
          variant="h6"
          sx={{ fontSize: "1rem", fontWeight: "normal" }}
        >
          {game.title}
        </Typography>
        {renderPrice()}
      </Box>
    </Box>
  );
};

export default GameCard;
