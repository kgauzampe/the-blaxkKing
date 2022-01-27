
import Navbar from "../components/NavBar";
import Footer from "../components/footer";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid,Paper, Typography} from '@material-ui/core/';
import { loremIpsum, LoremIpsum } from 'react-lorem-ipsum';
import Image from 'next/image';
import Card2 from './card2'
import ReactPlayer from 'react-player'
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

export default function Production() {
    const classes = useStyles();
    return (
        <>
            <Navbar/>
            <div className="production" id="production">
  <Grid container spacing={2} className={classes.grid}>
  <Grid item xs={12} md={12} lg={6} className="prodtext">
      <Typography variant="h3" gutterBottom component="div" textAlign='center'>
        Production
      </Typography>
      <LoremIpsum p={3}/>
    </Grid>
    <Grid item xs={12} md={12} lg={6} className="prodcard" >
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