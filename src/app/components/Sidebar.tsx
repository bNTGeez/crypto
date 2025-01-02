"use client";
import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import Link from "next/link";
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";
import "../globals.css";

interface SidebarProps {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
}
const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, toggleSidebar }) => {
  return (
    <Box
      sx={{
        width: "250px",
        height: "100vh",
        backgroundColor: "#f0f0f0",
      }}
    >
      <ul className="pl-8 pt-5 list-none space-y-3">
        <li>
          <Link
            href="/profile/edit-profile"
            className="no-underline focus:outline-none"
          >
            Edit Profile
          </Link>
        </li>
        <li>
          <Link
            href="/profile/security"
            className="no-underline focus:outline-none"
          >
            Security
          </Link>
        </li>
        <li>
          <Link
            href="/profile/change-password"
            className="no-underline focus:outline-none"
          >
            Change Password
          </Link>
        </li>
      </ul>
    </Box>
  );
};

export default Sidebar;
