import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  InputBase,
  Button,
  Divider,
  Link,
} from "@mui/material";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { useUser } from "../context/UserContext";

const AuthButton = ({ children, icon }) => (
  <Button
    startIcon={
      <Box component="img" src={icon} sx={{ width: 24, height: 24 }} />
    }
    fullWidth
    sx={{
      backgroundColor: "#202020",
      color: "white",
      justifyContent: "center",
      py: 1.5,
      mb: 1.5,
      textTransform: "none",
      "&:hover": { backgroundColor: "#333" },
    }}
  >
    {children}
  </Button>
);

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { login } = useUser();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    const username = email.split("@")[0];
    login(username);
    navigate("/");
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#121212",
      }}
    >
      <Paper
        sx={{
          p: 4,
          backgroundColor: "#1a1a1a",
          color: "white",
          maxWidth: "450px",
          width: "100%",
          borderRadius: "16px",
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          textAlign="center"
          sx={{ mb: 3 }}
        >
          Sign in to Epic Games
        </Typography>

        <Box component="form" onSubmit={handleLogin}>
          <Typography variant="body2" color="#aaa" sx={{ mb: 1 }}>
            Sign in with email
          </Typography>
          <InputBase
            fullWidth
            placeholder="example@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              backgroundColor: "#2a2a2a",
              borderRadius: "8px",
              p: "10px 14px",
              mb: 2,
              color: "white",
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              py: 1.5,
              backgroundColor: "#007aff",
              "&:hover": { backgroundColor: "#005cc8" },
            }}
          >
            Continue
          </Button>
        </Box>

        <Typography variant="body2" textAlign="center" sx={{ my: 2 }}>
          New here?{" "}
          <Link component={RouterLink} to="/register" sx={{ color: "white" }}>
            Create an account
          </Link>
        </Typography>

        <Divider sx={{ my: 2, color: "#aaa" }}>Other ways to sign in</Divider>

        <AuthButton icon="/google.png">Google</AuthButton>
        <AuthButton icon="/social.png">Steam</AuthButton>

        <Box textAlign="center" mt={3}>
          <Link href="#" sx={{ color: "#aaa", display: "block", mb: 1 }}>
            Trouble signing in?
          </Link>
          <Link href="#" sx={{ color: "#aaa", display: "block" }}>
            Privacy Policy
          </Link>
        </Box>
      </Paper>
    </Box>
  );
};

export default LoginPage;
