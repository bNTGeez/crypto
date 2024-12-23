"use client";
import React, { useState } from "react";
import Navbar from "./../components/Navbar";
import Sidebar from "./../components/Sidebar";
import { Box, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

const Profile = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div>
      <Navbar />
      <Box sx={{ display: "flex" }}>
        <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        <Grid
          container
          spacing={2}
          sx={{ padding: 5, flexDirection: "column" }}
        >
          <Typography>Full Name: Benjamin Tang</Typography>
          <Typography>UID: 12345</Typography>
          <Typography>Email: tangben@gmail.com</Typography>
          <Typography>Phone Number: 4155267262</Typography>
        </Grid>
      </Box>
    </div>
  );
};

export default Profile;
