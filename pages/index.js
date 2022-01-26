import React from "react";
import Navbar from "../components/NavBar";
import { Container, Grid, Typography, Button, Paper } from "@material-ui/core";
import Footer from "../components/footer";
import Image from 'next/image';
import { makeStyles } from '@material-ui/core/styles';
import { loremIpsum, LoremIpsum } from 'react-lorem-ipsum';
import Card2 from './card2';
import Card from './card';
import ReactPlayer from 'react-player';

const useStyles = makeStyles((theme) => ({
  grid: {
      width: '100%',
      margin: '0px',
      
  },
  paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.secondary,
     
  }
}));
export default function Home() {
  const classes = useStyles();
  return (
    <>
    <Navbar/>
<div className="home">
  <Container>
    <center>
    <Typography variant="h2">The islanders</Typography>
  <Typography variant="h5">Driving creativity and Imagination</Typography>


  <Button variant="contained" color="primary" href="/about">
    Discover More
  </Button>
  </center>
  </Container>
</div>
<div className="about">
  <Grid container spacing={0} className={classes.grid}>
      <Grid item xs={12} md={6} lg={6}>
        <Image 
          src='/img/about.jpg'
          alt='about picture'
          width={800}
          height={700}
        />
      </Grid>
        <Grid item xs={12} md={6} lg={6}>
        <Typography variant="h2">About us</Typography>                        
          <LoremIpsum p={3}/>
          <Button variant="contained" coloer="black" href="/production">See Our Work</Button>
        </Grid>
  </Grid>
</div>
<div className="team">
  <Grid container spacing={1} className={classes.grid}>
    <Grid item xs={12} md={6} lg={6}>
      <Typography variant="h3" gutterBottom component="div" textAlign='center'>
        Meet Our Team
      </Typography>
      <LoremIpsum p={2}/>
    </Grid>
    <Grid item xs={12} md={6} lg={6} >
      <Grid item xs={12} md={6} lg={6}>
        <Card/>
      </Grid>                
    </Grid>
  </Grid>
</div>
<div className="production">
  <Grid container spacing={1} className={classes.grid}>
  <Grid item xs={12} md={6} lg={6}>
      <Typography variant="h3" gutterBottom component="div" textAlign='center'>
        Production
      </Typography>
      <LoremIpsum p={3}/>
    </Grid>
    <Grid item xs={12} md={6} lg={6} >
      <Grid item xs={12} md={6} lg={6}>
        <Card2/>
      </Grid>                
    </Grid>
  </Grid>
</div>

<Footer/>
</>
);
}