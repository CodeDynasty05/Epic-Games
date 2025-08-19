import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Button,
  Divider,
  Switch,
  Select,
  MenuItem,
} from "@mui/material";
import { CheckCircle, Notifications } from "@mui/icons-material";
import PageContainer from "../components/PageContainer";
import StoreNavigation from "../components/StoreNavigation";
import {
  selectWishlistItems,
  removeFromWishlist,
} from "../slices/WishlistSlice";
import { selectOwnedGameIds } from "../slices/LibrarySlice";
import { addToBasket } from "../slices/BasketSlice";
import FiltersSidebar from "../components/FiltersSidebar";

const WishlistItem = ({ item }) => {
  const dispatch = useDispatch();
  const ownedGameIds = useSelector(selectOwnedGameIds);
  const isOwned = ownedGameIds.includes(item.id);

  return (
    <Paper sx={{ p: 2, backgroundColor: "#2a2a2a", color: "white", mb: 2 }}>
      <Box sx={{ display: "flex", gap: 2 }}>
        <Box
          component="img"
          src={item.image}
          sx={{ width: "150px", borderRadius: "4px" }}
        />
        <Box sx={{ flexGrow: 1 }}>
          <Typography
            variant="caption"
            sx={{ backgroundColor: "#444", px: 1, borderRadius: "4px" }}
          >
            {item.category || "Base Game"}
          </Typography>
          <Typography variant="h6" sx={{ mt: 1 }}>
            {item.title}
          </Typography>
        </Box>
        <Box sx={{ textAlign: "right" }}>
          <Typography variant="h6">{item.price}</Typography>
        </Box>
      </Box>
      <Divider sx={{ my: 2, backgroundColor: "#444" }} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Button
          onClick={() => dispatch(removeFromWishlist(item))}
          sx={{ color: "#aaa" }}
        >
          Remove
        </Button>
        {isOwned ? (
          <Button variant="contained" disabled startIcon={<CheckCircle />}>
            In Library
          </Button>
        ) : (
          <Button
            onClick={() => dispatch(addToBasket(item))}
            variant="contained"
            sx={{ backgroundColor: "#007aff" }}
          >
            Add To Cart
          </Button>
        )}
      </Box>
    </Paper>
  );
};

const WishlistPage = () => {
  const items = useSelector(selectWishlistItems);

  return (
    <PageContainer>
      <StoreNavigation />
      <Typography variant="h4" fontWeight="bold" sx={{ my: 4 }}>
        My Wishlist
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={9}>
          <Paper
            sx={{
              p: 2,
              backgroundColor: "#202020",
              color: "white",
              mb: 3,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Notifications sx={{ color: "#007aff" }} />
              <Typography>
                Get notified when your wishlisted games go on sale, or are
                available for purchase or pre-purchase.
              </Typography>
            </Box>
            <Switch defaultChecked />
          </Paper>

          {items.length > 0 ? (
            items.map((item) => <WishlistItem key={item.id} item={item} />)
          ) : (
            <Typography>
              You haven't added anything to your wishlist yet.
            </Typography>
          )}
        </Grid>
        <Grid item xs={12} md={3}>
          <FiltersSidebar />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default WishlistPage;
