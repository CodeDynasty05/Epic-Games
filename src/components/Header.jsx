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
  Grid,
  Divider,
  Avatar,
  Typography,
} from "@mui/material";
import { Language as LanguageIcon } from "@mui/icons-material";
import { Link as RouterLink, NavLink } from "react-router-dom";
import epicLogo from "/logo.png";
import { useUser } from "../context/UserContext";
import * as MenuIcons from "./MenuIcons";

const Header = () => {
  const { user, logout } = useUser();
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(null);
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
        backgroundColor: "#202020",
        color: "#f5f5f5",
        borderRadius: "12px",
        marginTop: "8px",
      },
      "& .MuiList-root": { padding: "8px" },
      "& .MuiMenuItem-root": {
        borderRadius: "8px",
        padding: "10px 16px",
        "&:hover": { backgroundColor: "#2a2a2a" },
      },
    },
  };

  const CustomMenuItem = ({ icon, text, to }) => (
    <RouterLink
      to={to || "#"}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <MenuItem
        onClick={handleMenuClose}
        sx={{ display: "flex", gap: 2, alignItems: "center" }}
      >
        {icon}
        {text}
      </MenuItem>
    </RouterLink>
  );

  return (
    <AppBar position="static" elevation={0} sx={{ backgroundColor: "#121212" }}>
      <Toolbar sx={{ justifyContent: "space-between", minHeight: "70px" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
          <Box
            onMouseEnter={(e) => handleMenuEnter(e, "store")}
            onMouseLeave={handleMenuLeave}
          >
            <Box component={RouterLink} to="/" sx={{ display: "flex" }}>
              <Box
                component="img"
                src={epicLogo}
                alt="Epic Games Logo"
                sx={{ height: "32px", cursor: "pointer" }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 2,
            }}
          >
            <Box>
              <Button
                component={NavLink}
                to="/"
                end
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  "&.active": { color: "white" },
                  "&:hover": { backgroundColor: "transparent" },
                }}
              >
                STORE
              </Button>
            </Box>
            <Button
              component={NavLink}
              to="/support"
              sx={{
                color: "#aaaaaa",
                "&.active": { color: "white" },
                "&:hover": { backgroundColor: "transparent", color: "white" },
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
      </Toolbar>

      <Menu
        id="store-menu"
        anchorEl={anchorEl}
        open={openMenu === "store"}
        onClose={handleMenuClose}
        {...menuStyleProps}
        MenuListProps={{ onMouseLeave: handleMenuClose }}
        disableRestoreFocus
      >
        <Box sx={{ display: "flex", p: 2, width: "650px" }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <ListSubheader
                sx={{ backgroundColor: "transparent", color: "#aaaaaa" }}
              >
                Play
              </ListSubheader>
              <CustomMenuItem
                icon={<MenuIcons.FortniteIcon />}
                text="Fortnite"
                to="/store/fortnite"
              />
              <CustomMenuItem
                icon={<MenuIcons.RocketLeagueIcon />}
                text="Rocket League"
                to="/store/rocket-league-played"
              />
              <CustomMenuItem
                icon={<MenuIcons.FallGuysIcon />}
                text="Fall Guys"
                to="/store/fall-guys"
              />

              <ListSubheader
                sx={{ backgroundColor: "transparent", color: "#aaaaaa", mt: 2 }}
              >
                Discover
              </ListSubheader>
              <CustomMenuItem
                icon={<MenuIcons.EpicStoreIcon />}
                text="Epic Games Store"
                to="/"
              />
              <CustomMenuItem icon={<MenuIcons.FabIcon />} text="Fab" />
              <CustomMenuItem
                icon={<MenuIcons.SketchfabIcon />}
                text="Sketchfab"
              />
              <CustomMenuItem
                icon={<MenuIcons.ArtStationIcon />}
                text="ArtStation"
              />
            </Grid>
            <Grid item xs={6} sx={{ borderLeft: "1px solid #333" }}>
              <ListSubheader
                sx={{ backgroundColor: "transparent", color: "#aaaaaa" }}
              >
                Create
              </ListSubheader>
              <CustomMenuItem
                icon={<MenuIcons.UnrealEngineIcon />}
                text="Unreal Engine"
              />
              <CustomMenuItem
                icon={<MenuIcons.FortniteIcon />}
                text="Create in Fortnite"
              />
              <CustomMenuItem
                icon={<MenuIcons.MetaHumanIcon />}
                text="MetaHuman"
              />
              <CustomMenuItem
                icon={<MenuIcons.TwinmotionIcon />}
                text="Twinmotion"
              />
              <CustomMenuItem
                icon={<MenuIcons.RealityScanIcon />}
                text="RealityScan"
              />
              <CustomMenuItem
                icon={<MenuIcons.EpicOnlineServicesIcon />}
                text="Epic Online Services"
              />
              <CustomMenuItem
                icon={<MenuIcons.EpicStoreIcon />}
                text="Publish on Epic Games Store"
              />
              <CustomMenuItem
                icon={<MenuIcons.KidsWebServicesIcon />}
                text="Kids Web Services"
              />
              <CustomMenuItem
                icon={<MenuIcons.DeveloperCommunityIcon />}
                text="Developer Community"
              />
            </Grid>
          </Grid>
        </Box>
      </Menu>

      {/* DISTRIBUTE MENU */}
      <Menu
        id="distribute-menu"
        anchorEl={anchorEl}
        open={openMenu === "distribute"}
        onClose={handleMenuClose}
        {...menuStyleProps}
        MenuListProps={{ onMouseLeave: handleMenuClose }}
        disableRestoreFocus
      >
        <Box sx={{ p: 1 }}>
          <MenuItem onClick={handleMenuClose}>
            Distribute on Epic Games Store
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>Developer Forums</MenuItem>
          <MenuItem onClick={handleMenuClose}>Documentation</MenuItem>
          <MenuItem onClick={handleMenuClose}>Learning</MenuItem>
        </Box>
      </Menu>
    </AppBar>
  );
};

export default Header;
