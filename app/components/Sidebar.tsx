"use client";
import React from "react";
import { Box } from "@mui/material";
import Link from "next/link";

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: "250px",
        height: "100vh",
        backgroundColor: "#f0f0f0",
      }}
    >
      <ul style={{ paddingLeft: 50, paddingTop: 20 }}>
        <li>
          <Link href="/profile/edit-profile">Edit Profile</Link>
        </li>
        <li>
          <Link href="/profile/security">Security</Link>
        </li>
        <li>
          <Link href="/profile/change-password">Change Password</Link>
        </li>
      </ul>
    </Box>
  );
};

export default Sidebar;
