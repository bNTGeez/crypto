"use client";
import { useState } from "react";
import { Box, TextField, Typography, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { registerEmailPassword } from "@/src/app/lib/firebase/auth";
import { auth } from "@/src/app/lib/firebase/clientApp";
import { updateProfile } from "firebase/auth";

const SignIn = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignUp = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const userCred = await registerEmailPassword(
        formData.email,
        formData.password
      );

      const fullName = `${formData.firstName} ${formData.lastName}`;
      await updateProfile(userCred.user, { displayName: fullName });
      router.push("/pages/dashboard");
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleCreate = () => {
    router.push("/pages/signin");
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
          component="form"
          onSubmit={handleSignUp}
          sx={{
            width: 500,
            height: 600,
            border: 1,
            borderWidth: "2px",
            borderRadius: "16px",
            p: 5,
          }}
        >
          <Typography>Sign Up</Typography>
          {error && (
            <Typography color="error" sx={{ mb: 2 }}>
              {error}
            </Typography>
          )}
          <Box sx={{ mt: 5 }}>
            <Typography>First Name</Typography>
            <TextField
              label="First Name"
              name="firstName"
              fullWidth
              value={formData.firstName}
              onChange={handleChange}
            />
          </Box>
          <Box sx={{ mt: 5 }}>
            <Typography>Last Name</Typography>
            <TextField
              label="Last Name"
              name="lastName"
              fullWidth
              value={formData.lastName}
              onChange={handleChange}
            />
          </Box>
          <Box sx={{ mt: 5 }}>
            <Typography>Email</Typography>
            <TextField
              label="Email Address"
              name="email"
              fullWidth
              value={formData.email}
              onChange={handleChange}
            />
          </Box>
          <Box sx={{ mt: 3 }}>
            <Typography>Password</Typography>
            <TextField
              label="Password"
              name="password"
              fullWidth
              value={formData.password}
              onChange={handleChange}
            />
          </Box>
          <Button type="submit" sx={{ mt: 3 }} variant="contained">
            Sign Up
          </Button>
          <Box sx={{ flexDirection: "row" }}>
            <Typography>
              Have an account already?{" "}
              <Button onClick={handleCreate}>Sign in</Button>
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default SignIn;
