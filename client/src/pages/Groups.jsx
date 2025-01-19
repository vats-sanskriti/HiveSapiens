

import React from 'react';
import { Grid } from '@mui/material';
import { orange } from '../constants/color';

const Groups = () => {
  return (
    <Grid container height={"100vh"}>
      <Grid
        item
        sx={{
          display: {
            xs: "none",
            sm: "block",
          },
        }}
        sm={4}
        bgcolor={orange}
      >
        Groups List
      </Grid>
      <Grid
        item
        xs={12}
        sm={8}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // Corrected typo
          position: "relative",
          padding: "1rem 3rem",
        }}
      >
        Grp details
      </Grid>
    </Grid>
  );
};

export default Groups;