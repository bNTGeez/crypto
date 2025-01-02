"use client";
import React from "react";
import { useState } from "react";
import { Box, TextField, Typography, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import {
  signInWithGoogle,
  signInEmailPassword,
} from "@/src/app/lib/firebase/auth";
import getUser from "@/src/app/lib/useUser";

const SignIn = () => {
  const user = getUser();
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleCreate = () => {
    router.push("/pages/register");
  };

  const handleSignInEmailPassword = (event: React.FormEvent) => {
    event.preventDefault();
    signInEmailPassword(email, password);
  };

  const handleSignInGoogle = (event: React.FormEvent) => {
    event.preventDefault();
    signInWithGoogle();
  };

  React.useEffect(() => {
    if (user) {
      router.push("/pages/dashboard");
    }
  }, [user, router]);

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
          component="form"
          onSubmit={handleSignInEmailPassword}
          sx={{
            width: 400,
            height: 500,
            border: 1,
            borderWidth: "2px",
            borderRadius: "16px",
            p: 5,
          }}
        >
          <Typography>Sign in</Typography>
          <Box sx={{ mt: 5 }}>
            <Typography>Email</Typography>
            <TextField
              label="Email Address"
              type="email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
          <Box sx={{ mt: 3 }}>
            <Typography>Password</Typography>
            <TextField
              label="Password"
              type="password"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
          <Button type="submit" sx={{ mt: 3, width: 200 }} variant="contained">
            Sign In
          </Button>
          <Box sx={{ mt: 3 }}>
            <Typography>
              -------------------------- or ---------------------------
            </Typography>
          </Box>
          <Box sx={{ mt: 3 }}>
            <Button onClick={handleSignInGoogle} variant="contained">
              Sign In With Google
            </Button>
          </Box>
        </Box>
      </Box>
      <Box sx={{ flexDirection: "row" }}>
        <Typography>
          Don't have an account?{" "}
          <Button onClick={handleCreate}>Create one</Button>
        </Typography>
      </Box>
    </div>
  );
};

export default SignIn;
