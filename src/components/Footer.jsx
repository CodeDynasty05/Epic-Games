import React from "react";
import {
  Box,
  Typography,
  Grid,
  Link,
  IconButton,
  Button,
  Divider,
} from "@mui/material";
import { Facebook, Twitter, YouTube } from "@mui/icons-material";
import { ArrowUpward } from "@mui/icons-material";

const footerSections = {
  Games: [
    "Fortnite",
    "Fall Guys",
    "Rocket League",
    "Unreal Tournament",
    "Infinity Blade",
    "Shadow Complex",
    "Robo Recall",
  ],
  Marketplaces: [
    "Epic Games Store",
    "Fab",
    "Sketchfab",
    "ArtStation",
    "Store Refund Policy",
    "Store EULA",
  ],
  Tools: [
    "Unreal Engine",
    "UEFN",
    "MetaHuman",
    "Twinmotion",
    "Megascans",
    "RealityScan",
    "Rad Game Tools",
  ],
  "Online Services": [
    "Epic Online Services",
    "Kids Web Services",
    "Services Agreement",
    "Acceptable Use Policy",
    "Trust Statement",
    "Subprocessor List",
  ],
  Company: ["About", "Newsroom", "Careers", "Students", "UX Research"],
  Resources: [
    "Dev Community",
    "MegaGrants",
    "Support-A-Creator",
    "Creator Agreement",
    "Distribute on Epic Games",
    "Unreal Engine Branding Guidelines",
    "Fan Art Policy",
    "Community Rules",
    "EU Digital Services Act Inquiries",
    "Epic Pro Support",
  ],
};

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box sx={{ backgroundColor: "#202020", color: "#cccccc", mt: 8 }}>
      <Box sx={{ maxWidth: "85vw", mx: "auto", py: 6 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 4,
          }}
        >
          <Typography variant="h6" sx={{ color: "white" }}>
            STORE
          </Typography>
          <Box>
            <IconButton sx={{ color: "white" }}>
              <Facebook />
            </IconButton>
            <IconButton sx={{ color: "white" }}>
              <Twitter />
            </IconButton>
            <IconButton sx={{ color: "white" }}>
              <YouTube />
            </IconButton>
          </Box>
        </Box>
        <Divider sx={{ backgroundColor: "#444", mb: 4 }} />

        <Grid container spacing={4}>
          {Object.entries(footerSections).map(([title, links]) => (
            <Grid item xs={6} sm={4} md={2} key={title}>
              <Typography
                variant="subtitle2"
                sx={{ color: "white", mb: 1.5, fontWeight: "bold" }}
              >
                {title}
              </Typography>
              <Box component="ul" sx={{ m: 0, p: 0, listStyle: "none" }}>
                {links.map((link) => (
                  <Box component="li" key={link} sx={{ mb: 1 }}>
                    <Link
                      href="#"
                      sx={{
                        color: "#cccccc",
                        textDecoration: "none",
                        "&:hover": {
                          color: "white",
                          textDecoration: "underline",
                        },
                      }}
                    >
                      {link}
                    </Link>
                  </Box>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ backgroundColor: "#444", my: 4 }} />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="caption"
            sx={{ color: "#aaaaaa", maxWidth: "70%" }}
          >
            © 2025, Epic Games, Inc. All rights reserved. Epic, Epic Games, the
            Epic Games logo, Fortnite, the Fortnite logo, Unreal, Unreal Engine,
            the Unreal Engine logo, Unreal Tournament, and the Unreal Tournament
            logo are trademarks or registered trademarks of Epic Games, Inc. in
            the United States of America and elsewhere. Other brands or product
            names are the trademarks of their respective owners. These links are
            provided for your convenience only. Epic Games has no control over
            the contents of those sites or resources, and accepts no
            responsibility for them or for any loss or damage that may arise
            from your use of them.
          </Typography>
          <Button
            variant="contained"
            onClick={scrollToTop}
            startIcon={<ArrowUpward />}
            sx={{
              backgroundColor: "#444",
              color: "white",
              "&:hover": { backgroundColor: "#555" },
            }}
          >
            Back to top
          </Button>
        </Box>
        <Box sx={{ mt: 3 }}>
          <Link
            href="#"
            sx={{
              color: "#cccccc",
              mr: 2,
              textDecoration: "none",
              "&:hover": { color: "white" },
            }}
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            sx={{
              color: "#cccccc",
              mr: 2,
              textDecoration: "none",
              "&:hover": { color: "white" },
            }}
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            sx={{
              color: "#cccccc",
              mr: 2,
              textDecoration: "none",
              "&:hover": { color: "white" },
            }}
          >
            Safety & security
          </Link>
          <Link
            href="#"
            sx={{
              color: "#cccccc",
              mr: 2,
              textDecoration: "none",
              "&:hover": { color: "white" },
            }}
          >
            Store refund policy
          </Link>
          <Link
            href="#"
            sx={{
              color: "#cccccc",
              textDecoration: "none",
              "&:hover": { color: "white" },
            }}
          >
            Publisher Index
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
