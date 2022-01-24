import React from "react";
import Navbar from "../components/NavBar";
import { Container, Grid, Typography, Button } from "@material-ui/core";
import Footer from "../components/footer";



export default function Home() {
  return (
    <>
    <Navbar/>
<div className="home">
  <Container>
    <center>
  <Typography varient="h2"> The Islanders</Typography>
  <Typography varient="h4">Driving creativity and Imagination</Typography>


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