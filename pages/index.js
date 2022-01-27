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
<div className="home" id="home">
  <Container>
    <center>
    <Image 
          src='/img/Islander.png'
          alt='landing logo'
          width={130}
          height={130}
        />
  <Typography variant="h5">Driving creativity and Imagination</Typography>


  <Button variant="contained" color="primary" href="/about">
    Discover More
  </Button>
  </center>
  </Container>
</div>
<Footer/>
</>
);
}