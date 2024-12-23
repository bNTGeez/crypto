"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
  const router = useRouter();

  const handleHome = () => {
    router.push("/");
  };

  const handleMarket = () => {
    router.push("/pages/market");
  };

  const handleProfile = () => {
    router.push("/profile");
  };

  const handleSignIn = () => {
    router.push("/pages/signin")
  }
  return (
    <div>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "right" }}>
          <Button onClick={handleHome} color="inherit">
            Home
          </Button>
          <Button onClick={handleMarket} color="inherit">
            Market
          </Button>
          <Button onClick={handleProfile} color="inherit">
            Profile
          </Button>
          <Button onClick={handleSignIn} color="inherit">
            Sign In
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
