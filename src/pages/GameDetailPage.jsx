import React from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Grid,
  Paper,
  Chip,
  Rating,
  Divider,
  Link,
} from "@mui/material";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import PageContainer from "../components/PageContainer";
import StoreNavigation from "../components/StoreNavigation";
import { CheckCircle } from "@mui/icons-material";
import { addGame, selectOwnedGameIds } from "../slices/LibrarySlice";
import { toggleWishlist, selectWishlistItems } from "../slices/WishlistSlice";

import {
  featuredGames,
  discoverGames,
  savingsGames,
  freeGames,
  topNewReleases,
  topSellers,
  mostPlayed,
  topUpcoming,
  newsArticles,
} from "../mockData";
import NotFound from "./NotFound";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/BasketSlice";
import { useSelector } from "react-redux";

const allGames = [
  ...featuredGames,
  ...discoverGames,
  ...savingsGames,
  ...freeGames,
  ...topNewReleases,
  ...topSellers,
  ...mostPlayed,
  ...topUpcoming,
  ...newsArticles,
];

const GameDetailPage = () => {
  const { id } = useParams();
  const game = allGames.find((g) => g.id === id);
  const dispatch = useDispatch();
  const ownedGameIds = useSelector(selectOwnedGameIds);
  const wishlistItems = useSelector(selectWishlistItems);

  const isOwned = ownedGameIds.includes(game?.id);
  const isInWishlist = wishlistItems.some((item) => item.id === game?.id);

  const handleBuyNow = () => {
    if (game) {
      dispatch(addGame({ id: game.id }));
    }
  };
  const handleAddToCart = () => {
    if (game) {
      dispatch(addToBasket(game));
    }
  };

  const handleWishlistToggle = () => {
    if (game) {
      dispatch(toggleWishlist(game));
    }
  };

  if (!game) {
    return <NotFound />;
  }

  const mainImage =
    game.largeImage || game.image || "path/to/default-large.jpg";

  return (
    <PageContainer>
      <StoreNavigation />

      <Grid container spacing={4} sx={{ mt: 2 }}>
        <Grid item xs={12} md={8}>
          <Box>
            <Typography variant="h3" component="h1" fontWeight="bold">
              {game.title}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
              <Rating name="read-only" value={4.7} precision={0.1} readOnly />
              <Typography sx={{ ml: 1 }}>4.7</Typography>
            </Box>
            <Paper
              sx={{
                my: 3,
                height: "500px",
                backgroundImage: `url(${mainImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "16px",
              }}
            />

            <Typography sx={{ mb: 2 }}>
              {game.description ||
                `Become an elite SWAT commander and bring order to a city overwhelmed by chaos and corruption. Lead a team of highly-trained SWAT officers through unpredictable high-risk missions against ruthless criminals to prevent the city from spiralling into disorder.`}
            </Typography>

            <Grid container spacing={2} sx={{ mb: 4 }}>
              <Grid item xs={6}>
                <Typography fontWeight="bold">Genres</Typography>
                <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
                  <Chip
                    label="First-Person"
                    variant="outlined"
                    sx={{ color: "white", borderColor: "#555" }}
                  />
                  <Chip
                    label="Shooter"
                    variant="outlined"
                    sx={{ color: "white", borderColor: "#555" }}
                  />
                  <Chip
                    label="Strategy"
                    variant="outlined"
                    sx={{ color: "white", borderColor: "#555" }}
                  />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Typography fontWeight="bold">Features</Typography>
                <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
                  <Chip
                    label="Co-op"
                    variant="outlined"
                    sx={{ color: "white", borderColor: "#555" }}
                  />
                  <Chip
                    label="Controller Support"
                    variant="outlined"
                    sx={{ color: "white", borderColor: "#555" }}
                  />
                </Box>
              </Grid>
            </Grid>

            <Divider sx={{ my: 4, backgroundColor: "#444" }} />

            <Box>
              <Typography variant="h5" fontWeight="bold">
                Ready or Not System Requirements
              </Typography>
              <Grid container spacing={4} sx={{ mt: 1 }}>
                <Grid item xs={6}>
                  <Typography variant="subtitle1" color="#aaa">
                    Minimum
                  </Typography>
                  <Typography>OS version: Windows 10</Typography>
                  <Typography>CPU: Intel Core i5-4430</Typography>
                  <Typography>Memory: 8 GB RAM</Typography>
                  <Typography>GPU: NVIDIA GeForce GTX 960 2GB</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle1" color="#aaa">
                    Recommended
                  </Typography>
                  <Typography>OS version: Windows 11</Typography>
                  <Typography>CPU: AMD Ryzen 5-1600</Typography>
                  <Typography>Memory: 8 GB RAM</Typography>
                  <Typography>GPU: NVIDIA GeForce GTX 1060 6GB</Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={4} mt={12}>
          <Box sx={{ position: "sticky", top: "100px" }}>
            <Typography variant="caption">Base Game</Typography>
            {isOwned ? (
              <Button
                fullWidth
                variant="contained"
                startIcon={<CheckCircle />}
                sx={{
                  mt: 5,
                  mb: 8,
                  py: 1.5,
                  backgroundColor: "#007aff",
                  "&:hover": { backgroundColor: "#005cc8" },
                }}
              >
                In Library
              </Button>
            ) : (
              <>
                <Typography variant="h4" fontWeight="bold" sx={{ my: 1 }}>
                  {game.price || "Free"}
                </Typography>
                <Button
                  fullWidth
                  variant="contained"
                  onClick={handleBuyNow}
                  sx={{
                    mb: 1.5,
                    py: 1.5,
                    backgroundColor: "#007aff",
                    "&:hover": { backgroundColor: "#005cc8" },
                  }}
                >
                  Buy Now
                </Button>
                <Button
                  fullWidth
                  variant="outlined"
                  onClick={handleAddToCart}
                  sx={{
                    mb: 1.5,
                    py: 1.5,
                    color: "white",
                    borderColor: "#555",
                    "&:hover": { borderColor: "white" },
                  }}
                >
                  Add To Cart
                </Button>
                <Button
                  fullWidth
                  variant="outlined"
                  onClick={handleWishlistToggle}
                  sx={{ mb: 3, color: "white" }}
                >
                  {isInWishlist ? "In Wishlist" : "Add to Wishlist"}
                </Button>
              </>
            )}
            <Grid container spacing={1} sx={{ color: "#aaa" }}>
              <Grid item xs={6}>
                <Typography>Epic Rewards</Typography>
              </Grid>
              <Grid item xs={6} textAlign="right">
                <Typography color="white">Earn 20% Back</Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography>Refund Type</Typography>
              </Grid>
              <Grid item xs={6} textAlign="right">
                <Typography color="white">Self-Refundable</Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography>Developer</Typography>
              </Grid>
              <Grid item xs={6} textAlign="right">
                <Typography color="white">VOID Interactive</Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography>Publisher</Typography>
              </Grid>
              <Grid item xs={6} textAlign="right">
                <Typography color="white">VOID Interactive</Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography>Release Date</Typography>
              </Grid>
              <Grid item xs={6} textAlign="right">
                <Typography color="white">07/15/25</Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography>Platform</Typography>
              </Grid>
              <Grid item xs={6} textAlign="right">
                <DesktopWindowsIcon sx={{ color: "white" }} />
              </Grid>
            </Grid>
            <Box
              sx={{ mt: 3, display: "flex", justifyContent: "center", gap: 2 }}
            >
              <Button
                variant="outlined"
                sx={{ color: "#aaa", borderColor: "#555" }}
              >
                Share
              </Button>
              <Button
                variant="outlined"
                sx={{ color: "#aaa", borderColor: "#555" }}
              >
                Report
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default GameDetailPage;
