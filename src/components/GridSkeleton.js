import Grid from '@mui/material/Unstable_Grid2/Grid2';
import Footer from './Footer';
import Blogs from './Blogs';
import Skills from './Skills';
import Projects from './Projects';
import HeroCode from './HeroCode';
import Navigation from './Navigation';

function GridSkeleton() {
  return (
    <>
      {/* <Box sx={{ position: 'fixed', top: '10px', right: '10px' }}>
        <ProjectMenu />
      </Box> */}
      <Navigation />
      
      <Grid container spacing={0}>
        {/* Hero Section contains an image and a para */}       
        <Grid item xs={12}>
          <HeroCode />
        </Grid>
        <Grid item xs={12}>
          {/* This is the Skills section */}
          <Skills />
        </Grid>
        {/* This is the Projects section */}
        <Grid item xs={12}>
          <Projects />
        </Grid>
        <Grid item xs={12}>
          {/* This is the Blogs section */}
          <Blogs />
        </Grid>

        <Grid item xs={12}>
          {/* This is the Technical Skills section */}
        </Grid>
        <Grid item xs={12}>
          {/* This is the Footer Section */}
          <Footer />
        </Grid>
      </Grid>
    </>
  );
}

export default GridSkeleton;
