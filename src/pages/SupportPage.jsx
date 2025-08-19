import React from "react";
import { Box, Typography, Grid, InputBase, Button } from "@mui/material";
import {
  Search,
  CheckCircle,
  VpnKey,
  CardGiftcard,
  People,
  Payment,
} from "@mui/icons-material";
import PageContainer from "../components/PageContainer";
import SelfServiceButton from "../components/SelfServiceButton";
import SupportTopicCard from "../components/SupportTopicCard";

const exploreTopicsData = [
  {
    title: "Accounts",
    description: "Manage sign-in issues, authentication, and account details.",
    image: "/explore/account.jpg",
  },
  {
    title: "Epic Games Store",
    description: "Resolve store issues and improve functionality.",
    image: "/explore/epic.jpg",
  },
  {
    title: "Payments and purchases",
    description: "Manage payment methods and solve purchase issues.",
    image: "/explore/pay.jpg",
  },
  {
    title: "Creator programs",
    description: "Get support for participating in our creator programs.",
    image: "/explore/create.jpg",
  },
  {
    title: "Technical support",
    description: "Manage console access and fix technical issues.",
    image: "/explore/tech.jpg",
  },
  {
    title: "Parent and guardian support",
    description: "Manage console access and settings for your child.",
    image: "/explore/parent.jpg",
  },
];

const gamesData = [
  { title: "Fortnite", image: "/games/fortnite.jpg" },
  { title: "LEGO Fortnite", image: "/games/lego.png" },
  { title: "Rocket League", image: "/games/rl.jpg" },
  { title: "Fall Guys", image: "/games/fg.jpg" },
  { title: "Fortnite Festival", image: "/games/ff.jpg" },
  { title: "Rocket Racing", image: "/games/rr.jpg" },
];

const SupportPage = () => {
  return (
    <PageContainer>
      <Box
        sx={{
          textAlign: "center",
          py: 8,
          mb: 6,
          color: "white",
          backgroundImage:
            "radial-gradient(circle at 50% 0%, rgba(128,0,128,0.3), rgba(18,18,18,0) 60%)",
        }}
      >
        <Typography variant="body1">
          Welcome to Epic Games Support, Bl00dy_Dagger!
        </Typography>
        <Typography
          variant="h2"
          component="h1"
          sx={{ fontWeight: "bold", my: 2 }}
        >
          How can we help?
        </Typography>
        <Box sx={{ maxWidth: "600px", mx: "auto", position: "relative" }}>
          <Search
            sx={{
              position: "absolute",
              left: 16,
              top: "50%",
              transform: "translateY(-50%)",
              color: "#aaa",
            }}
          />
          <InputBase
            placeholder="Search support..."
            sx={{
              width: "100%",
              backgroundColor: "#2a2a2a",
              borderRadius: "30px",
              p: "10px 20px 10px 50px",
              color: "white",
            }}
          />
        </Box>
        <Typography
          variant="body2"
          sx={{
            mt: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Server status: <CheckCircle sx={{ color: "lightgreen", mx: 1 }} /> All
          systems operational
        </Typography>
      </Box>

      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" sx={{ mb: 3 }}>
          Self-service
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <SelfServiceButton text="Change display name" icon={<VpnKey />} />
          </Grid>
          <Grid item xs={12} md={4}>
            <SelfServiceButton text="Change password" icon={<VpnKey />} />
          </Grid>
          <Grid item xs={12} md={4}>
            <SelfServiceButton
              text="Manage connected accounts"
              icon={<People />}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <SelfServiceButton
              text="Redeem a product code"
              icon={<CardGiftcard />}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <SelfServiceButton
              text="Redeem V-Bucks cards"
              icon={<CardGiftcard />}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <SelfServiceButton
              text="Manage payment methods"
              icon={<Payment />}
            />
          </Grid>
        </Grid>
      </Box>

      {/* Explore topics Section */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" sx={{ mb: 3 }}>
          Explore topics
        </Typography>
        <Grid container spacing={3}>
          {exploreTopicsData.map((topic) => (
            <Grid item xs={12} sm={6} md={4} key={topic.title}>
              <SupportTopicCard {...topic} />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box>
        <Typography variant="h4" sx={{ mb: 3 }}>
          Games
        </Typography>
        <Grid container spacing={3}>
          {gamesData.map((game) => (
            <Grid item xs={12} sm={4} md={2} key={game.title}>
              <SupportTopicCard {...game} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default SupportPage;
