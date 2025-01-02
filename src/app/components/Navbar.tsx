"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import getUser from "@/src/app/lib/useUser";
import { signOut } from "@/src/app/lib/firebase/auth";
import { auth } from "@/src/app/lib/firebase/clientApp";

const Navbar = () => {
  const router = useRouter();
  const user = getUser();

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
    router.push("/pages/signin");
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      router.push("/");
    } catch (error) {
      console.log("Error signing out", error);
    }
  };

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
          {user ? (
            <>
              <Button color="inherit">{user.displayName || "Profile!"}</Button>
              <Button color="inherit" onClick={handleSignOut}>
                Sign Out
              </Button>
            </>
          ) : (
            <Button onClick={handleSignIn} color="inherit">
              Sign In
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
