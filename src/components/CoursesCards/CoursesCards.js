import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { nanoid } from 'nanoid';

import img147training from '../../img/147Training.jpg';
import imgAviationLegislation from '../../img/AviationLegislation.jpg';
import imgBatteryMaintenance from '../../img/BatteryMaintenance.jpg';
import imgElectricalWiring from '../../img/ElectricalWiring.jpg'
import imgMaintenancePrograms from '../../img/maintenancePrograms.jpg'
import imgMilitaryAviation from '../../img/MilitaryAviation.jpg'
import imgQrosscheck from '../../img/Qrosscheck.jpg'


const courses = [
    { img: `${img147training}`, title: '147training', description: 'Current training courses for aircraft maintenance specialists', linkTo: '/courses/training148' },
    { img: `${imgAviationLegislation}`, title: 'Aviation Legislation - TG I and TG II', description: 'Current training courses for aircraft maintenance specialists', linkTo: '/courses/aviation_legislation' },
    { img: `${imgBatteryMaintenance}`, title: 'Battery Maintenance Basics woT (BMB Online) ENG ', description: 'Current training courses for aircraft maintenance specialists', linkTo: '/courses/battery_maintenance' },
    { img: `${imgElectricalWiring}`, title: 'Electrical Wiring Interconnect System. Group 1-2 Training Course', description: 'Current training courses for aircraft maintenance specialists', linkTo: '/courses/electrical_wiring' },
    { img: `${imgMaintenancePrograms}`, title: 'Aircraft maintenance programs, reliability programs & maintenance cost training', description: 'Current training courses for aircraft maintenance specialists', linkTo: '/courses/maintenance_programs' },
    { img: `${imgMilitaryAviation}`, title: 'Military Aviation Legislation', description: 'Current training courses for aircraft maintenance specialists', linkTo: '/courses/military_aviation_legislation' },
    { img: `${imgQrosscheck}`, title: 'Qrosscheck', description: 'Current training courses for aircraft maintenance specialists', linkTo: '/courses/qrosscheck' },
    
]

export default function CoursesCards() {

const location = useLocation();
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', // Задаємо автоматичне заповнення колонок, мінімальна ширина 300px
      gap: '20px', // Відступ між карточками
      paddingTop: '20px', // Відступи для кращого вигляду
      paddingBottom: '20px', // Відступи для кращого вигляду
      paddingLeft: '100px', // Відступи для кращого вигляду
      paddingRight: '100px', // Відступи для кращого вигляду
    }}>
          {courses.map(corse => {return (
              <Card key={nanoid()} sx={{position: 'relative', maxWidth: '365px', minHeight: '450px', margin: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} >
      <Link to={corse.linkTo} state={location} style={{ textDecoration: 'none', color: 'inherit', flexGrow: 1 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={corse.img}
          alt="aircraft maintenance"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {corse.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {corse.description}
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
          )})}
    </div>
    
      
  );
}
