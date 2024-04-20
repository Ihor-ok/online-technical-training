import React, { useRef, useState } from 'react';
import css from './Training147.module.css'


import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import ListItemIcon from '@mui/material/ListItemIcon';


import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import { Link, Outlet, useLocation } from 'react-router-dom';



export default function Training148() {
  

  const [isHovered, setIsHovered] = useState(false);
  
  const location = useLocation();
  const backLinkLocationRef = useRef(location);
  
  const btnGoBackStyle = {
    marginLeft: '10px',
    marginTop:'10px',
    backgroundColor: '#FF4500',
      color: '#FFFFFF',
      border: 'none',
      padding: '5px 10px',
      fontSize: '16px',
      cursor: 'pointer',
      borderRadius: '5px',
      transition: 'background-color 0.3s, color 0.3s',
      ...(isHovered && { backgroundColor: '	#006400', color: '#FFFFFF' }),
    };

  const topics = [
    { title: 'Introduction to the U.S. Export Compliance for Non-U.S. Civil Aerospace Companies', linkTo: 'compliance-for-non-u-s-civil-aerospace-companies' },
    { title: 'EASA Part-66 Regulatory Training', linkTo: 'easa-part-66' },
    { title: 'EWIS (for target group 1-2)', linkTo: 'ewis' },
    { title: 'Fuel tank safety (phase 1+2)', linkTo: 'fuel-tank' },
    { title: 'Human factors (based on part 66 - module 9)', linkTo: 'human-factors-part-66' },
    { title: 'Human Factors (in accordance with Part-145)', linkTo: 'human-factors-part-145' },
    { title: 'Safety Management System (SMS) Foundation Training', linkTo: 'safety-management-system' },
    { title: 'Transition from Part-M Subpart G to Part-CA(M)O', linkTo: 'part-m' },
    
    ]
  
 
  return (
    <div className={css.container}>
      <Link to={backLinkLocationRef.current.state}>
        <button
          style={btnGoBackStyle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
           Go back
        </button>
      </Link>

      <Typography style={{marginLeft: '15px'}} sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
        148training
      </Typography>
      
      <Grid item xs={12} md={6}>
        <List>
          {topics.map(topic => {
        return(
          <ListItem>
            <Link to={topic.linkTo}>
              <ListItemIcon>
                <FolderIcon />
              </ListItemIcon>
              {topic.title}
            </Link>
          </ListItem>
          
        )
      })}
        </List>
      </Grid>
      <Outlet />
      
{/* 
      <Grid item xs={12} md={6}>
          <Typography style={{marginLeft: '15px'}} sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            148training
          </Typography>
            <List>
          <ListItem>
            <Link to="compliance-for-non-u-s-civil-aerospace-companies">
                    <ListItemIcon>
                    <FolderIcon />
                  </ListItemIcon>
                  Introduction to the U.S. Export Compliance for Non-U.S. Civil Aerospace Companies
            </Link>
          </ListItem>
          <ListItem>
            <Link to="easa-part-66">
                    <ListItemIcon>
                    <FolderIcon />
                  </ListItemIcon>
                  EASA Part-66 Regulatory Training
            </Link>
          </ListItem>
          <ListItem>
            <Link to="ewis">
                    <ListItemIcon>
                    <FolderIcon />
                  </ListItemIcon>
                  EWIS (for target group 1-2)
            </Link>  
          </ListItem>
          <ListItem>
            <Link to="fuel-tank">
                      <ListItemIcon>
                      <FolderIcon />
                    </ListItemIcon>
                    Fuel tank safety (phase 1+2)
            </Link>  
          </ListItem>
          <ListItem>
            <Link to="human-factors-part-66">
                      <ListItemIcon>
                      <FolderIcon />
                    </ListItemIcon>
                    Human factors (based on part 66 - module 9)
            </Link>  
          </ListItem>
          <ListItem>
            <Link to="human-factors-part-145">
                      <ListItemIcon>
                      <FolderIcon />
                    </ListItemIcon>
                    Human Factors (in accordance with Part-145)
            </Link>  
          </ListItem>
          <ListItem>
            <Link to="safety-management-system">
                      <ListItemIcon>
                      <FolderIcon />
                    </ListItemIcon>
                    Safety Management System (SMS) Foundation Training
              </Link>
          </ListItem>
          <ListItem>
            <Link to="part-m">
                      <ListItemIcon>
                      <FolderIcon />
                    </ListItemIcon>
                    Transition from Part-M Subpart G to Part-CA(M)O
              </Link>
              </ListItem>
                  </List>
        </Grid> */}

      
    </div>
  );
}