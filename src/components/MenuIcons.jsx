import React from "react";
import { Box, SvgIcon, Typography } from "@mui/material";
import {
  SportsEsports,
  Storefront,
  Brush,
  Palette,
  Code,
  School,
  Groups,
  Shield,
} from "@mui/icons-material";

const IconWrapper = ({ children }) => (
  <Box
    sx={{
      width: 24,
      height: 24,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    {children}
  </Box>
);

export const FortniteIcon = () => (
  <IconWrapper>
    <Typography sx={{ fontWeight: "bold", color: "white" }}>F</Typography>
  </IconWrapper>
);
export const RocketLeagueIcon = () => (
  <IconWrapper>
    <SportsEsports />
  </IconWrapper>
);
export const FallGuysIcon = () => (
  <IconWrapper>
    <img src="/games/fg.jpg" width="20" alt="Fall Guys" />
  </IconWrapper>
);
export const EpicStoreIcon = () => (
  <IconWrapper>
    <Storefront />
  </IconWrapper>
);
export const FabIcon = () => (
  <IconWrapper>
    <Typography sx={{ fontWeight: "bold", color: "white" }}>f</Typography>
  </IconWrapper>
);
export const SketchfabIcon = () => (
  <IconWrapper>
    <Brush />
  </IconWrapper>
);
export const ArtStationIcon = () => (
  <IconWrapper>
    <Palette />
  </IconWrapper>
);
export const UnrealEngineIcon = () => (
  <IconWrapper>
    <Typography sx={{ fontWeight: "bold", color: "white" }}>U</Typography>
  </IconWrapper>
);
export const MetaHumanIcon = () => (
  <IconWrapper>
    <Groups />
  </IconWrapper>
);
export const TwinmotionIcon = () => (
  <IconWrapper>
    <Code />
  </IconWrapper>
);
export const RealityScanIcon = () => (
  <IconWrapper>
    <Code />
  </IconWrapper>
);
export const EpicOnlineServicesIcon = () => (
  <IconWrapper>
    <Storefront />
  </IconWrapper>
);
export const KidsWebServicesIcon = () => (
  <IconWrapper>
    <Shield />
  </IconWrapper>
);
export const DeveloperCommunityIcon = () => (
  <IconWrapper>
    <Groups />
  </IconWrapper>
);
