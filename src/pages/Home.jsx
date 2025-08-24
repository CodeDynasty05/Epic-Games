import React from "react";
import PageContainer from "../components/PageContainer";
import StoreNavigation from "../components/StoreNavigation";
import FeaturedCarousel from "../components/FeaturedCarousel";
import GamesCarousel from "../components/GamesCarousel";
import {
  discoverGames,
  savingsGames,
  freeGames,
  topNewReleases,
  topSellers,
} from "../mockData";
import FreeGamesSection from "../components/FreeGamesSection";

const HomePage = () => {
  return (
    <PageContainer>
      <StoreNavigation />
      <FeaturedCarousel />

      <GamesCarousel title="Discover Something New" games={discoverGames} />
      <GamesCarousel title="Epic Savings Spotlight" games={savingsGames} />
      <FreeGamesSection title="Free Games" games={freeGames} />
      <GamesCarousel title="Top New Releases" games={topNewReleases} />
      <GamesCarousel title="Top Sellers" games={topSellers} />
    </PageContainer>
  );
};

export default HomePage;
