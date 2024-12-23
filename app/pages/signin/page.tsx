"use client";
import React from "react";
import Navbar from "../../components/Navbar";
import { Box, TextField, Typography, Button } from "@mui/material";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const router = useRouter();

  const handleCreate = () => {
    router.push("/pages/register");
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            width: 500,
            height: 600,
            border: 1,
            borderWidth: "2px",
            borderRadius: "16px",
            p: 5,
          }}
        >
          <Typography>Sign in</Typography>
          <Box sx={{ mt: 5 }}>
            <Typography>Email</Typography>
            <TextField label="Email Address" />
          </Box>
          <Box sx={{ mt: 3 }}>
            <Typography>Password</Typography>
            <TextField label="Password" />
          </Box>
          <Button sx={{ mt: 3 }} variant="contained">
            Sign In
          </Button>
          <Box sx={{ flexDirection: "row" }}>
            <Typography>
              Don't have an account?{" "}
              <Button onClick={handleCreate}>Create one</Button>
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default SignIn;
