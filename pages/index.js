import React from "react";
import Navbar from "../components/NavBar";
import { Container, Grid, Typography, Button } from "@material-ui/core";
import Footer from "../components/footer";
import Image from 'next/image';



export default function Home() {
  return (
    <>
    <Navbar/>
<div className="home">
  <Container>
    <center>
    <Image 
                        src='/img/Islander.png'
                        alt='about picture'
                        width={280}
                        height={280}
                        />
  <Typography variant="h5">Driving creativity and Imagination</Typography>


  <Button variant="contained" color="primary">
    Discover More
  </Button>
  </center>
  </Container>
</div>
<Footer/>
</>
);
}