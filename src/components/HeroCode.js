import React from 'react';
import HeroImage from './HeroImage';
import HeroPara from './HeroPara';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

export default function HeroCode() {
  return (
    <div className="hero-section">
      <Grid container>
        <Grid item xs={12} md={6}>
          <HeroImage />
        </Grid>
        <Grid item xs={12} md={6}>
          <HeroPara />
        </Grid>
      </Grid>
    </div>
  );
}
