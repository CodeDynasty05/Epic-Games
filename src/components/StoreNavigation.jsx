import React from "react";
import {
  Box,
  Typography,
  InputBase,
  Badge,
  Popper,
  Paper,
  ClickAwayListener,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Link,
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { NavLink as RouterNavLink, Link as RouterLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectBasketItems } from "../slices/BasketSlice";
import { allGamesForSearch } from "../mockData";
import { useState, useRef, useEffect } from "react";
import { ArrowForward } from "@mui/icons-material";

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
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const searchAnchorRef = useRef(null);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setResults([]);
      setDropdownOpen(false);
      return;
    }

    const filtered = allGamesForSearch
      .filter((game) =>
        game.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .slice(0, 4);

    setResults(filtered);
    setDropdownOpen(true);
  }, [searchQuery]);

  const handleCloseDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleCloseDropdown}>
      <Box>
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
            <Search ref={searchAnchorRef}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search store"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
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
            <RouterLink
              to="/wishlist"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography sx={{ color: "#aaaaaa" }}>Wishlist</Typography>
            </RouterLink>
            <RouterLink
              to="/cart"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Badge badgeContent={basketItems.length} color="primary">
                <Typography sx={{ color: "#aaaaaa" }}>Cart</Typography>
              </Badge>
            </RouterLink>
          </Box>
        </Box>

        <Popper
          open={isDropdownOpen}
          anchorEl={searchAnchorRef.current}
          placement="bottom-start"
          disablePortal={false}
          sx={{ zIndex: 1200, width: searchAnchorRef.current?.offsetWidth }}
        >
          <Paper
            sx={{
              mt: 1,
              backgroundColor: "#2a2a2a",
              color: "white",
              borderRadius: "12px",
              p: 2,
            }}
          >
            {results.length > 0 ? (
              <>
                <Typography variant="overline" color="#aaa" sx={{ px: 2 }}>
                  Top Results
                </Typography>
                <List>
                  {results.map((game) => (
                    <RouterLink
                      key={game.id}
                      to={`/store/${game.id}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                      onClick={handleCloseDropdown}
                    >
                      <ListItem button sx={{ borderRadius: "8px" }}>
                        <ListItemAvatar>
                          <Avatar
                            src={game.image || game.thumbnail}
                            variant="rounded"
                          />
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <Typography component="span">
                              {game.title}
                            </Typography>
                          }
                          secondary={
                            <Typography variant="body2" color="#aaa">
                              {game.category || "Base Game"}
                            </Typography>
                          }
                        />
                      </ListItem>
                    </RouterLink>
                  ))}
                </List>
              </>
            ) : (
              <RouterLink
                to="/browse"
                style={{ textDecoration: "none" }}
                onClick={handleCloseDropdown}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "white",
                    p: 2,
                    borderRadius: "8px",
                    "&:hover": { backgroundColor: "#333" },
                  }}
                >
                  Browse all titles
                  <ArrowForward fontSize="small" sx={{ ml: 1 }} />
                </Box>
              </RouterLink>
            )}
          </Paper>
        </Popper>
      </Box>
    </ClickAwayListener>
  );
};

export default StoreNavigation;
