import React from "react";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "right" }}>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Market</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
