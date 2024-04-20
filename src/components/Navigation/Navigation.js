import { useAuth } from "components/hooks/useAuth";
import { NavLink } from "react-router-dom";

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';



export const Navigation = (props) => {
  
  const { isLoggedIn } = useAuth();
  
  
      return (
      <nav>
        <Stack spacing={2} direction="row">
          <NavLink to="/">
              <Button
                variant="contained"
                sx={{ backgroundColor: props.activeButton === 'home' ? '#FF4500' : 'default' }}
                onClick={() => props.handleButtonClick('home')}
              >Home</Button>
          </NavLink>
          {isLoggedIn && (
              <NavLink to="/courses">
                <Button
                  variant="contained"
                  sx={{ backgroundColor: props.activeButton === 'courses' ? '#FF4500' : 'default' }}
                  onClick={() => props.handleButtonClick('courses')} 
                >Courses</Button>
              </NavLink>
            )} 
        </Stack>

      </nav>
    );
  };
