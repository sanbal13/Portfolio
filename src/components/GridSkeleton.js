import Grid from "@mui/material/Unstable_Grid2/Grid2";
import {styled} from '@mui/material/styles';
import { Box, Paper } from "@mui/material";
import ProjectMenu from "./ProjectMenu";

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#1A2027',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: '#fff',    
}));

function GridSkeleton(){
return(<>
    <Box sx={{position:"fixed", top:'10px', right:'10px'}}>
        <ProjectMenu />
    </Box>
    <Grid container spacing={0}>      
            {/* Hero Section contains an image and a para */}
            <Grid item container spacing={1} xs={12}>
                <Grid item xs={12} md={4}>
                    <Item> This is an Image.</Item>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Item> This is a Paragraph.</Item>                    
                </Grid>            
        </Grid>
        {/* This is the Projects section */}
        <Grid item container xs={12}>
            <Grid item xs={12} md={6} lg={4} xl={3}>
                <Item>This is a project</Item>
            </Grid>
        </Grid>
        {/* This is the Blogs section */}

        <Grid item container xs={12}>
            <Grid item xs={12} s={6} md={4} lg={3} xl={2}>
               <Item> This is a Blog</Item>
            </Grid>
            <Grid item xs={12} s={6} md={4} lg={3} xl={2}>
               <Item> This is a Blog</Item>
            </Grid>
            <Grid item xs={12} s={6} md={4} lg={3} xl={2}>
               <Item> This is a Blog</Item>
            </Grid>
            <Grid item xs={12} s={6} md={4} lg={3} xl={2}>
               <Item> This is a Blog</Item>
            </Grid>
            <Grid item xs={12} s={6} md={4} lg={3} xl={2}>
               <Item> This is a Blog</Item>
            </Grid>
            <Grid item xs={12} s={6} md={4} lg={3} xl={2}>
               <Item> This is a Blog</Item>
            </Grid>
        </Grid>
        {/* This is the Technical Skills section */}

        <Grid xs={12}>
            <Item>Footer Section</Item>
        </Grid>
    </Grid>
    </>
);
}

export default GridSkeleton;