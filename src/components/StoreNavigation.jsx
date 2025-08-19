import React from "react";
import { Box, Typography, InputBase } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { NavLink as RouterNavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectBasketItems } from "../slices/BasketSlice";
import { Badge } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "20px",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
  },
  marginRight: theme.spacing(2),
  width: "auto",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: "20ch",
  },
}));

const NavLink = styled(RouterNavLink)({
  color: "#aaaaaa",
  textDecoration: "none",
  fontWeight: "normal",
  padding: "4px 0",
  "&:hover": {
    color: "white",
  },
  "&.active": {
    color: "white",
    fontWeight: "bold",
    borderBottom: "2px solid white",
  },
});

const StoreNavigation = () => {
  const basketItems = useSelector(selectBasketItems);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        py: 2,
        my: 1,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase placeholder="Search store" />
        </Search>
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <NavLink to="/" end>
            Discover
          </NavLink>
          <NavLink to="/browse">Browse</NavLink>
          <NavLink to="/news">News</NavLink>
        </Box>
      </Box>

      <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
        <NavLink
          to="/wishlist"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Typography sx={{ color: "#aaaaaa", cursor: "pointer" }}>
            Wishlist
          </Typography>
        </NavLink>
        <NavLink
          to="/cart"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Badge badgeContent={basketItems.length} color="primary">
            <Typography sx={{ color: "#aaaaaa", cursor: "pointer" }}>
              Cart
            </Typography>
          </Badge>
        </NavLink>
      </Box>
    </Box>
  );
};

export default StoreNavigation;
