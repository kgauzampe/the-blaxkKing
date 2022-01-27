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
        image="/img/jane.jpg"
        alt="jane doe"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Jane Doe
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Co-Founder and vedio grapher
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
      <CardMedia
        component="img"
        height="140"
        image="/img/james.jpg"
        alt="james"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          James Doe
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Co-Founder and vedio Editer
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    
  );
}
