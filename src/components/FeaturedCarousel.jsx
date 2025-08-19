import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Grid, Paper } from "@mui/material";
import { featuredGames } from "../mockData";

const FeaturedCarousel = () => {
  const [activeGame, setActiveGame] = useState(featuredGames[0]);
  const [nextGameIndex, setNextGameIndex] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveGame(featuredGames[nextGameIndex]);
      setNextGameIndex((nextGameIndex + 1) % featuredGames.length);
    }, 5000);

    return () => clearTimeout(timer);
  }, [nextGameIndex]);

  const handleThumbnailClick = (game) => {
    const gameIndex = featuredGames.findIndex((g) => g.id === game.id);
    setActiveGame(game);
    setNextGameIndex((gameIndex + 1) % featuredGames.length);
  };

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={9}>
          <Paper
            elevation={3}
            sx={{
              position: "relative",
              height: "500px",
              backgroundImage: `url(${activeGame.largeImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "16px",
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              p: 4,
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                borderRadius: "16px",
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 60%)",
              }}
            />
            <Box sx={{ position: "relative", zIndex: 2, maxWidth: "50%" }}>
              <Typography
                variant="h3"
                component="h2"
                sx={{ fontWeight: "bold" }}
              >
                {activeGame.title}
              </Typography>
              <Typography variant="body1" sx={{ my: 2 }}>
                {activeGame.description}
              </Typography>
              <Typography variant="h6" sx={{ mb: 2 }}>
                {activeGame.price}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  "&:hover": { backgroundColor: "#e0e0e0" },
                }}
              >
                Buy Now
              </Button>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={3}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {featuredGames.map((game) => (
              <Box
                key={game.id}
                onClick={() => handleThumbnailClick(game)}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  p: 1,
                  borderRadius: "8px",
                  cursor: "pointer",
                  backgroundColor:
                    activeGame.id === game.id ? "#3a3a3a" : "transparent",
                  borderLeft:
                    activeGame.id === game.id
                      ? "3px solid white"
                      : "3px solid transparent",
                  transition: "background-color 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#2a2a2a",
                  },
                }}
              >
                <img
                  src={game.thumbnail}
                  alt={`${game.title} thumbnail`}
                  style={{
                    width: "60px",
                    height: "80px",
                    borderRadius: "4px",
                    objectFit: "cover",
                  }}
                />
                <Typography variant="body2">{game.title}</Typography>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FeaturedCarousel;
