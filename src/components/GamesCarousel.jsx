import React, { useRef } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import GameCard from "./GameCard";

const GamesCarousel = ({ title, games, showArrows = true }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const cardWidth = scrollRef.current.children[0]?.clientWidth || 300;
      const scrollAmount =
        clientWidth > cardWidth * 2 ? clientWidth * 0.8 : cardWidth * 2;

      const scrollTo =
        direction === "left"
          ? scrollLeft - scrollAmount
          : scrollLeft + scrollAmount;

      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <Box sx={{ my: 6 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h5">{title}</Typography>
        {showArrows && (
          <Box>
            <IconButton onClick={() => scroll("left")} sx={{ color: "white" }}>
              <ArrowBackIos />
            </IconButton>
            <IconButton onClick={() => scroll("right")} sx={{ color: "white" }}>
              <ArrowForwardIos />
            </IconButton>
          </Box>
        )}
      </Box>

      <Box
        ref={scrollRef}
        sx={{
          display: "grid",
          gridAutoFlow: "column",
          gridAutoColumns: "calc(20% - 12px)",
          gap: "15px",
          overflowX: "auto",
          scrollBehavior: "smooth",
          "&::-webkit-scrollbar": { display: "none" },
          pb: 1,
        }}
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </Box>
    </Box>
  );
};

export default GamesCarousel;
