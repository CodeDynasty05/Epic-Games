import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import PageContainer from "../components/PageContainer";
import StoreNavigation from "../components/StoreNavigation";
import GameCard from "../components/GameCard";
import FiltersSidebar from "../components/FiltersSidebar";
import { popularGenres, browseGames } from "../mockData";

const GenreCard = ({ genre }) => (
  <Paper
    sx={{
      position: "relative",
      minWidth: "280px",
      height: "180px",
      color: "white",
      borderRadius: "16px",
      overflow: "hidden",
      cursor: "pointer",
      flexShrink: 0,
      "&:hover .genre-image": {
        transform: "scale(1.1)",
      },
    }}
  >
    <Box
      className="genre-image"
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url(${genre.image})`,
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
      <Typography variant="h6" fontWeight="bold">
        {genre.title}
      </Typography>
    </Box>
  </Paper>
);

const BrowsePage = () => {
  return (
    <PageContainer>
      <StoreNavigation />

      <Box sx={{ my: 4 }}>
        <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
          Popular Genres
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            overflowX: "auto",
            pb: 2,
            "&::-webkit-scrollbar": { height: "8px" },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#444",
              borderRadius: "4px",
            },
          }}
        >
          {popularGenres.map((genre) => (
            <GenreCard key={genre.title} genre={genre} />
          ))}
        </Box>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={9}>
          <Grid container spacing={3}>
            {browseGames.map((game) => (
              <Grid item xs={12} sm={6} md={4} key={game.id}>
                <GameCard game={game} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} md={3}>
          <FiltersSidebar />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default BrowsePage;
