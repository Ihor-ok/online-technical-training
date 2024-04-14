import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import img from '../../img/ElectricalWiring.jpg'
import { Link } from 'react-router-dom';

export default function CardElectricalWiring() {


  return (
    
    <Card sx={{position: 'relative', maxWidth: '365px', minHeight: '450px', margin: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} >
      <Link to={`/courses/electrical_wiring`} style={{ textDecoration: 'none', color: 'inherit', flexGrow: 1 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={img}
          alt="aircraft maintenance"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Electrical Wiring Interconnect System. Group 1-2 Training Course.
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
