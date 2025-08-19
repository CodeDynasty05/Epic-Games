import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Button,
  Divider,
  Link,
} from "@mui/material";
import { WarningAmber } from "@mui/icons-material";
import PageContainer from "../components/PageContainer";
import StoreNavigation from "../components/StoreNavigation";
import {
  selectBasketItems,
  removeFromBasket,
  purchaseAndClear,
} from "../slices/BasketSlice";
import { useNavigate } from "react-router-dom";
import { addMultipleGames } from "../slices/LibrarySlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromBasket(item));
  };

  return (
    <Paper sx={{ p: 2, backgroundColor: "#2a2a2a", color: "white", mb: 2 }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={2}>
          <Box
            component="img"
            src={item.image}
            sx={{ width: "100%", borderRadius: "4px" }}
          />
        </Grid>
        <Grid item xs={12} sm={7}>
          <Typography
            variant="caption"
            sx={{ backgroundColor: "#444", px: 1, borderRadius: "4px" }}
          >
            {item.category || "Base Game"}
          </Typography>
          <Typography variant="h6" sx={{ mt: 1 }}>
            {item.title}
          </Typography>
          <Typography variant="body2" sx={{ mt: 2, color: "#aaa" }}>
            Self-Refundable
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3} sx={{ textAlign: "right" }}>
          <Typography variant="h6">{item.price}</Typography>
        </Grid>
      </Grid>
      <Divider sx={{ my: 2, backgroundColor: "#444" }} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{ display: "flex", alignItems: "center", gap: 1, color: "#aaa" }}
        >
          <WarningAmber fontSize="small" />
          <Typography variant="caption">
            This product is not compatible with your current device
          </Typography>
        </Box>
        <Box>
          <Link
            component="button"
            onClick={handleRemove}
            sx={{ color: "#aaa", mr: 2 }}
          >
            Remove
          </Link>
          <Link component="button" sx={{ color: "#aaa" }}>
            Move to wishlist
          </Link>
        </Box>
      </Box>
    </Paper>
  );
};

const CartPage = () => {
  const items = useSelector(selectBasketItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const parsePrice = (priceStr) => {
    if (typeof priceStr !== "string" || priceStr.toLowerCase() === "free") {
      return 0;
    }
    return parseFloat(priceStr.replace("$", ""));
  };

  const subtotal = items.reduce(
    (total, item) => total + parsePrice(item.price),
    0
  );

  const handleCheckout = () => {
    const itemIds = items.map((item) => item.id);
    dispatch(addMultipleGames(itemIds));
    dispatch(purchaseAndClear());
    alert(
      "Thank you for your purchase! The games have been added to your library."
    );
    navigate("/");
  };

  return (
    <PageContainer>
      <StoreNavigation />
      <Typography variant="h4" fontWeight="bold" sx={{ my: 4 }}>
        My Cart
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          {items.length > 0 ? (
            items.map((item) => <CartItem key={item.id} item={item} />)
          ) : (
            <Typography>Your cart is empty.</Typography>
          )}
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, backgroundColor: "#2a2a2a", color: "white" }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Games and Apps Summary
            </Typography>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
            >
              <Typography color="#aaa">Price</Typography>
              <Typography>${subtotal.toFixed(2)}</Typography>
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
            >
              <Typography color="#aaa">Taxes</Typography>
              <Typography>Calculated at Checkout</Typography>
            </Box>
            <Divider sx={{ my: 2, backgroundColor: "#444" }} />
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
            >
              <Typography fontWeight="bold">Subtotal</Typography>
              <Typography fontWeight="bold">${subtotal.toFixed(2)}</Typography>
            </Box>
            <Button
              fullWidth
              variant="contained"
              disabled={items.length === 0}
              onClick={handleCheckout}
              sx={{
                py: 1.5,
                backgroundColor: "#007aff",
                "&:hover": { backgroundColor: "#005cc8" },
              }}
            >
              Check Out
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default CartPage;
