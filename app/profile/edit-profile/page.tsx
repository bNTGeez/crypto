"use client";
import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";

const EditProfile = () => {
  return (
    <Box>
      <Typography sx={{ padding: 5 }} variant="h5">
        Edit Profile
      </Typography>

      <Grid container spacing={2} sx={{ padding: 5 }}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Typography>First Name</Typography>
          <TextField sx={{ width: 300 }} />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Typography>Last Name</Typography>
          <TextField sx={{ width: 300 }} />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Typography>Email</Typography>
          <TextField sx={{ width: 680 }} />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Typography>Address</Typography>
          <TextField sx={{ width: 680 }} />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Typography>City</Typography>
          <TextField sx={{ width: 300 }} />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Typography>State</Typography>
          <TextField sx={{ width: 300 }} />
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ paddingLeft: 5 }}>
        <Button variant="outlined">Cancel</Button>
        <Button variant="outlined">Save</Button>
      </Grid>
    </Box>
  );
};

export default EditProfile;
