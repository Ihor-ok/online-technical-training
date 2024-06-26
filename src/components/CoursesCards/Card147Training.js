import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import img from '../../img/147Training.jpg'
import { Link, useLocation } from 'react-router-dom';

export default function Card147Training() {

const location = useLocation();
  return (
    
    <Card sx={{position: 'relative', maxWidth: '365px', minHeight: '450px', margin: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} >
      <Link to={`/courses/training148`} state={location} style={{ textDecoration: 'none', color: 'inherit', flexGrow: 1 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={img}
          alt="aircraft maintenance"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            147training
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Current training courses for aircraft maintenance specialists.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
        <Button size="small" color="primary">
          Open
        </Button>
      </CardActions>
      </Link>
      </Card>
      
  );
}
