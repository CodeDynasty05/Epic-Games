import React from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Link, Divider, List, ListItem } from "@mui/material";
import PageContainer from "../components/PageContainer";
import StoreNavigation from "../components/StoreNavigation";
import { newsArticles } from "../mockData";
import NotFound from "./NotFound";

const ArticleDetailPage = () => {
  const { id } = useParams();
  const article = newsArticles.find((a) => a.id === id);

  if (!article) {
    return <NotFound />;
  }

  return (
    <PageContainer>
      <StoreNavigation />

      <Box sx={{ maxWidth: "800px", mx: "auto", color: "#ddd" }}>
        <Box
          component="img"
          src={article.image}
          sx={{ width: "100%", height: "auto", my: 4, borderRadius: "8px" }}
        />

        <Typography variant="h3" component="h1" fontWeight="bold" color="white">
          {article.title}
        </Typography>
        <Typography variant="body2" color="#aaa" sx={{ my: 2 }}>
          8.11.2025
        </Typography>
        <Typography variant="body1" color="#aaa" sx={{ mb: 4 }}>
          By Dave Tach, Contributor
        </Typography>

        <Divider sx={{ mb: 4, backgroundColor: "#444" }} />

        <Typography paragraph>
          <Link href="#">Gamescom 2025</Link> is the world's biggest video game
          show, and it's not even close. Last year, 335,000 people traveled to
          Cologne, Germany for the event, and hundreds of thousands will gather
          in 2025 too.
        </Typography>
        <Typography paragraph>
          But you don't need to travel to a European city founded in 38 BC to
          get the news. Here's your guide to every streaming show from Gamescom
          2025.
        </Typography>

        <Typography
          variant="h5"
          fontWeight="bold"
          color="white"
          sx={{ mt: 5, mb: 2 }}
        >
          Opening Night Live 2025
        </Typography>
        <Typography paragraph>
          Gamescom 2025's show floor is open from Wednesday, August 20, 2025, to
          Sunday, August 24, but the public festivities really begin with Geoff
          Keighley's Opening Night Live (ONL). Yes, that's the same Geoff
          Keighley behind <Link href="#">Summer Game Fest 2025</Link>, which
          delivered its own world premieres, news, trailers, and more in June.
        </Typography>

        <Box
          component="img"
          src={"/news/gamescom.avif"}
          sx={{ width: "100%", my: 3, borderRadius: "4px" }}
        />

        <Typography paragraph>
          ONL will take place on Tuesday, August 19, 2025 at 2 PM ET / 11 AM PT
          / 8 PM CEST, and you can watch it directly on the{" "}
          <Link href="#">official Gamescom site</Link>, as well as the event's{" "}
          <Link href="#">Twitch</Link> and <Link href="#">YouTube</Link> pages.
        </Typography>

        <Typography
          variant="h5"
          fontWeight="bold"
          color="white"
          sx={{ mt: 5, mb: 2 }}
        >
          Future Games Show
        </Typography>
        <Typography paragraph>
          Future Games Show at Gamescom is the flagship broadcast. At the helm
          in 2025 are Ben Starr (Final Fantasy XVI's Clive Rosfield) and
          Samantha Béart (Baldur's Gate 3's Karlach), with mainstay hosts Jules
          and Nathan. FGS Best of Gamescom takes place on the event's final day,
          and it'll include more reveals and recap the show's announcements.
        </Typography>
      </Box>
    </PageContainer>
  );
};

export default ArticleDetailPage;
