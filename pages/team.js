
import Navbar from "../components/NavBar";
import Footer from "../components/footer";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid,Paper, Typography} from '@material-ui/core/';
import { loremIpsum, LoremIpsum } from 'react-lorem-ipsum';


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

export default function Team() {
    const classes = useStyles();
    return (
        <>
            <Navbar/>
            <div className="team">
                <Grid container spacing={0} className={classes.grid}>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h3" gutterBottom component="div" textAlign='center'>
                            Meet Our Team
                        </Typography>
                        <LoremIpsum p={3}/>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        
                       
                    </Grid>
                </Grid>
            </div>
            <Footer/>
        </>
    );
}