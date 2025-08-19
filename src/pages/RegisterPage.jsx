import React, { useState } from "react";
import { Box, Typography, Paper, InputBase, Button, Link } from "@mui/material";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { useUser } from "../context/UserContext";

const RegisterPage = () => {
  const [displayName, setDisplayName] = useState("");
  const navigate = useNavigate();
  const { login } = useUser();

  const handleRegister = (e) => {
    e.preventDefault();
    if (!displayName.trim()) return;
    login(displayName);
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
          Create an Epic Games Account
        </Typography>

        <Box component="form" onSubmit={handleRegister}>
          <InputBase
            fullWidth
            placeholder="Email Address"
            sx={{
              backgroundColor: "#2a2a2a",
              borderRadius: "8px",
              p: "10px 14px",
              mb: 2,
              color: "white",
            }}
          />
          <InputBase
            fullWidth
            placeholder="Display Name"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            sx={{
              backgroundColor: "#2a2a2a",
              borderRadius: "8px",
              p: "10px 14px",
              mb: 2,
              color: "white",
            }}
          />
          <InputBase
            fullWidth
            type="password"
            placeholder="Password"
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
            Create Account
          </Button>
        </Box>

        <Typography variant="body2" textAlign="center" sx={{ my: 2 }}>
          Have an account?{" "}
          <Link component={RouterLink} to="/login" sx={{ color: "white" }}>
            Sign In
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default RegisterPage;
