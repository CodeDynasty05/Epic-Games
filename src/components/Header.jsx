import React, { useState, useRef } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
  ListSubheader,
  Avatar,
  Typography,
} from "@mui/material";
import { Language as LanguageIcon } from "@mui/icons-material";
import { Link as RouterLink, NavLink } from "react-router-dom";
import epicLogo from "/logo.png";
import { useUser } from "../context/UserContext";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(null);
  const { user, logout } = useUser();
  const menuLeaveTimer = useRef(null);

  const handleMenuEnter = (event, menu) => {
    clearTimeout(menuLeaveTimer.current);
    setAnchorEl(event.currentTarget);
    setOpenMenu(menu);
  };

  const handleMenuLeave = () => {
    menuLeaveTimer.current = setTimeout(() => {
      setAnchorEl(null);
      setOpenMenu(null);
    }, 200);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setOpenMenu(null);
  };

  const menuStyleProps = {
    elevation: 0,
    onMouseEnter: () => clearTimeout(menuLeaveTimer.current),
    onMouseLeave: handleMenuLeave,
    sx: {
      "& .MuiPaper-root": {
        backgroundColor: "#2a2a2a",
        color: "white",
        borderRadius: "4px",
        marginTop: "8px",
      },
      "& .MuiList-root": {
        padding: "8px",
        a: { textDecoration: "none", color: "inherit" },
      },
      "& .MuiMenuItem-root": {
        borderRadius: "4px",
        padding: "8px 16px",
        "&:hover": {
          backgroundColor: "#3a3a3a",
        },
      },
    },
  };

  return (
    <AppBar position="static" elevation={0} sx={{ backgroundColor: "#202020" }}>
      <Toolbar sx={{ justifyContent: "space-between", minHeight: "70px" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
          <Box
            onMouseEnter={(e) => handleMenuEnter(e, "store")}
            onMouseLeave={handleMenuLeave}
          >
            <Box
              component="img"
              src={epicLogo}
              alt="Epic Games Logo"
              sx={{ height: "32px", cursor: "pointer", display: "block" }}
            />
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 2,
            }}
          >
            <Button
              component={NavLink}
              to="/"
              sx={{
                color: "#aaaaaa",
                textTransform: "none",
                "&.active": { color: "white", fontWeight: "bold" },
                "&:hover": { color: "white" },
              }}
            >
              STORE
            </Button>
            <Button
              component={NavLink}
              to="/support"
              sx={{
                color: "#aaaaaa",
                textTransform: "none",
                "&.active": { color: "white", fontWeight: "bold" },
                "&:hover": { color: "white" },
              }}
            >
              SUPPORT
            </Button>

            <Box
              onMouseEnter={(e) => handleMenuEnter(e, "distribute")}
              onMouseLeave={handleMenuLeave}
            >
              <Button sx={{ color: "#aaaaaa" }}>DISTRIBUTE</Button>
            </Box>
          </Box>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          {user ? (
            <>
              <IconButton sx={{ color: "#aaaaaa" }}>
                <LanguageIcon />
              </IconButton>
              <Avatar sx={{ bgcolor: "purple", width: 32, height: 32, mx: 2 }}>
                {user.username.charAt(0).toUpperCase()}
              </Avatar>
              <Typography sx={{ mr: 2, color: "lightblue" }}>
                {user.username}
              </Typography>
              <Button onClick={logout} sx={{ color: "#aaa" }}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <IconButton sx={{ color: "#aaaaaa", mr: 1 }}>
                <LanguageIcon />
              </IconButton>
              <Button
                component={RouterLink}
                to="/login"
                sx={{ color: "#aaaaaa", textTransform: "none" }}
              >
                Sign In
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#0078f2",
                  textTransform: "none",
                  ml: 2,
                  "&:hover": { backgroundColor: "#005cc8" },
                }}
              >
                Download
              </Button>
            </>
          )}
        </Box>

        <Menu
          id="store-menu"
          anchorEl={anchorEl}
          open={openMenu === "store"}
          onClose={handleMenuClose}
          MenuListProps={{
            "aria-labelledby": "store-button",
            onMouseLeave: handleMenuClose,
          }}
          {...menuStyleProps}
          disableRestoreFocus
        >
          <ListSubheader sx={{ backgroundColor: "#2a2a2a", color: "#aaaaaa" }}>
            Play
          </ListSubheader>
          <RouterLink to="/store/fortnite">
            <MenuItem onClick={handleMenuClose}>Fortnite</MenuItem>
          </RouterLink>
          <RouterLink to="/store/rocket-league-played">
            <MenuItem onClick={handleMenuClose}>Rocket League</MenuItem>
          </RouterLink>
          <RouterLink to="/store/fall-guys">
            <MenuItem onClick={handleMenuClose}>Fall Guys</MenuItem>
          </RouterLink>
          <ListSubheader
            sx={{ backgroundColor: "#2a2a2a", color: "#aaaaaa", mt: 1 }}
          >
            Discover
          </ListSubheader>
          <RouterLink to="/">
            <MenuItem onClick={handleMenuClose}>Epic Games Store</MenuItem>
          </RouterLink>
        </Menu>

        <Menu
          id="distribute-menu"
          anchorEl={anchorEl}
          open={openMenu === "distribute"}
          onClose={handleMenuClose}
          MenuListProps={{
            "aria-labelledby": "distribute-button",
            onMouseLeave: handleMenuClose,
          }}
          {...menuStyleProps}
          disableRestoreFocus
        >
          <MenuItem onClick={handleMenuClose}>
            Distribute on Epic Games
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>Developer Forums</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
