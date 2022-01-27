import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="/img/dance.jpg"
        alt="dance"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Dance Studio Documentary
        </Typography>
        <Typography variant="body2" color="text.secondary">
          A stort about dance
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
      <CardMedia
        component="img"
        height="140"
        image="/img/music.jpg"
        alt="music"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Music Documentary
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Greatest hits in the making
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
