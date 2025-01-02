"use client";
import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";
import { Box, Button } from "@mui/material";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <html lang="en">
      <body>
        <Navbar />
        <Button
          onClick={toggleSidebar}
          sx={{
            position: "fixed",
            top: 16,
            left: 16,
            zIndex: 1200,
            // Change background color depending on sidebar state
            backgroundColor: "#f0f0f0",
            borderRadius: "50%",
            transition: "background-color 0.3s ease-in-out",
            boxShadow: "0px 2px 5px rgba(0,0,0,0.15)",
          }}
        >
          {sidebarOpen ? (
            <HiArrowCircleLeft size={30} />
          ) : (
            <HiArrowCircleRight size={30} />
          )}
        </Button>
        <Box sx={{ display: "flex" }}>
          {sidebarOpen && (
            <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
          )}
          <Box sx={{ flexGrow: 1 }}>{children}</Box>
        </Box>
      </body>
    </html>
  );
}
