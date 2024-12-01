"use client";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Box, Button } from "@mui/material";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSideBar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <html lang="en">
      <body>
        <Navbar />
        <Button onClick={toggleSideBar}>
          {sidebarOpen ? "Hide Sidebar" : "Show Sidebar"}
        </Button>
        <Box sx={{ display: "flex" }}>
          {sidebarOpen && <Sidebar />}
          <Box sx={{ flexGrow: 1 }}>{children}</Box>
        </Box>
      </body>
    </html>
  );
}
