import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Link,
  Divider,
  Pagination,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import PageContainer from "../components/PageContainer";
import StoreNavigation from "../components/StoreNavigation";
import { newsArticles } from "../mockData";

const FeaturedArticleCard = ({ article }) => (
  <RouterLink
    to={`/news/${article.id}`}
    style={{ textDecoration: "none", color: "inherit" }}
  >
    <Box sx={{ cursor: "pointer" }}>
      <Paper
        sx={{
          height: "220px",
          backgroundImage: `url(${article.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "8px",
          mb: 2,
        }}
      />
      <Typography variant="caption" color="#aaa">
        {article.timestamp}
      </Typography>
      <Typography
        variant="h6"
        fontWeight="bold"
        sx={{
          my: 1,
          textOverflow: "ellipsis",
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        {article.title}
      </Typography>
      <Typography variant="body2" color="#ddd">
        {article.description}
      </Typography>
      <Link
        component="span"
        underline="hover"
        sx={{ color: "white", fontWeight: "bold", mt: 1, display: "block" }}
      >
        Read more
      </Link>
    </Box>
  </RouterLink>
);

const ArticleListItem = ({ article }) => (
  <Box>
    <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
      <Box
        component="img"
        src={article.image}
        sx={{
          width: "250px",
          height: "140px",
          objectFit: "cover",
          borderRadius: "4px",
          flexShrink: 0,
        }}
      />
      <Box>
        <Typography variant="caption" color="#aaa">
          {article.timestamp}
        </Typography>
        <Typography variant="h6" fontWeight="bold" sx={{ mt: 1 }}>
          {article.title}
        </Typography>
        <Typography
          variant="body2"
          color="#ddd"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          {article.description}
        </Typography>
        <RouterLink
          to={`/news/${article.id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Link
            component="span"
            underline="hover"
            sx={{ color: "white", fontWeight: "bold", mt: 1, display: "block" }}
          >
            Read more
          </Link>
        </RouterLink>
      </Box>
    </Box>
    <Divider sx={{ my: 4, backgroundColor: "#333" }} />
  </Box>
);

const NewsPage = () => {
  const featured = newsArticles.filter((a) => a.featured);
  const listItems = newsArticles.filter((a) => !a.featured);

  return (
    <PageContainer>
      <StoreNavigation />
      <Box sx={{ my: 4 }}>
        <Typography variant="h5" fontWeight="bold" sx={{ mb: 3 }}>
          Epic Games News
        </Typography>
        <Grid container spacing={4}>
          {featured.map((article) => (
            <Grid item xs={12} md={6} key={article.id}>
              <FeaturedArticleCard article={article} />
            </Grid>
          ))}
        </Grid>
        <Divider sx={{ my: 4, backgroundColor: "#333" }} />
        <Box>
          {listItems.map((article) => (
            <ArticleListItem key={article.id} article={article} />
          ))}
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
          <Pagination
            count={10}
            variant="outlined"
            shape="rounded"
            sx={{
              "& .MuiPaginationItem-root": {
                color: "white",
                borderColor: "#555",
              },
              "& .Mui-selected": { backgroundColor: "rgba(255,255,255,0.1)" },
            }}
          />
        </Box>
      </Box>
    </PageContainer>
  );
};

export default NewsPage;
