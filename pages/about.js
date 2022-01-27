import Navbar from "../components/NavBar";
import Footer from "../components/footer";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid,Paper, Button, Typography} from '@material-ui/core/';
import { loremIpsum, LoremIpsum } from 'react-lorem-ipsum';
import Image from 'next/image';


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

export default function About() {
    const classes = useStyles();
    return (
        <>
            <Navbar/>
            <div className="about" id="about"> 
  <Grid container spacing={0} className={classes.grid}>
      <Grid item xs={12} md={6} lg={6}>
        <Image 
          src='/img/about.jpg'
          alt='about picture'
          width={800}
          height={700}
        />
      </Grid>
        <Grid item xs={12} md={6} lg={6} spacing={2}>
        <Typography variant="h2">About us</Typography>                        
          <LoremIpsum p={2}/>
          
        </Grid>
  </Grid>
</div>
            <Footer/>
        </>
    );
}