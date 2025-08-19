import React from "react";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import SupportPage from "../pages/SupportPage";
import GameDetailPage from "../pages/GameDetailPage";
import { Route, Routes } from "react-router";
import BrowsePage from "../pages/BrowsePage";
import NewsPage from "../pages/NewsPage";
import ArticleDetailPage from "../pages/ArticleDetailPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import CartPage from "../pages/CartPage";
import WishlistPage from "../pages/WishlistPage";

const WebRoutes = () => {
  const routes = [
    { id: 1, path: "/", component: <Home /> },
    { id: 2, path: "/support", component: <SupportPage /> },
    { id: 3, path: "/browse", component: <BrowsePage /> },
    { id: 4, path: "/*", component: <NotFound /> },
    { id: 5, path: "/store/:id", component: <GameDetailPage /> },
    { id: 6, path: "/news", component: <NewsPage /> },
    { id: 7, path: "/news/:id", component: <ArticleDetailPage /> },
    { id: 8, path: "/login", component: <LoginPage /> },
    { id: 9, path: "/register", component: <RegisterPage /> },
    { id: 10, path: "/cart", component: <CartPage /> },
    { id: 11, path: "/wishlist", component: <WishlistPage /> },
  ];
  return (
    <Routes>
      {routes.map(({ id, path, component }) => (
        <Route key={id} path={path} element={component} />
      ))}
    </Routes>
  );
};

export default WebRoutes;
