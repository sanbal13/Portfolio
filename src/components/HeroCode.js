import React from 'react';
import HeroImage from './HeroImage';
import HeroPara from './HeroPara';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

export default function HeroCode() {
  return (
    <div className="padding-3rem">
    <div className="hero-section container">
      <Grid container>
        <Grid item xs={12} md={6}>
          <HeroImage />
        </Grid>
        <Grid item xs={12} md={6}>
          <HeroPara />
        </Grid>
      </Grid>
    </div>
    </div>
  );
}
