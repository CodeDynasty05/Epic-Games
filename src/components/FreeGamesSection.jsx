import React from "react";
import { Box, Typography, Grid, Paper, Button } from "@mui/material";
import { CardGiftcard } from "@mui/icons-material";
import GameCard from "./GameCard";

const FreeGamesSection = ({ title, games }) => {
  return (
    <Paper
      sx={{
        backgroundColor: "#202020",
        p: 3,
        borderRadius: "16px",
        my: 6,
        color: "white",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <CardGiftcard />
          <Typography variant="h5">{title}</Typography>
        </Box>
        <Button variant="outlined" sx={{ color: "white", borderColor: "#555" }}>
          View More
        </Button>
      </Box>

      <Grid container spacing={3}>
        {games.map((game) => (
          <Grid item xs={12} sm={6} md={3} key={game.id}>
            <GameCard game={game} />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default FreeGamesSection;
