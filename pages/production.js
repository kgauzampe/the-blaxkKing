
import Navbar from "../components/NavBar";
import Footer from "../components/footer";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid,Paper, Typography} from '@material-ui/core/';
import { loremIpsum, LoremIpsum } from 'react-lorem-ipsum';
import Image from 'next/image';
import Card from './card2'
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
            <div className="production">
                <Grid container spacing={1} className={classes.grid}>
                    <Grid item xs={6}>
                    <Grid item xs={6}>
                            <Card/>
                        </Grid>
                        <Grid item xs={6}>
                        <ReactPlayer url='https://www.youtube.com/watch?v=K3WOnAUfhpU' />
                        </Grid>
                    </Grid>
                    <Grid item xs={6} md={6}>    
                        <Typography variant="h3" gutterBottom component="div" textAlign='center'>
                            production
                        </Typography>
                        <LoremIpsum p={2}/>
                    </Grid>
                </Grid>
            </div>
            <Footer/>
        </>
    );
}