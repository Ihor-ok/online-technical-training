import { useAuth } from "components/hooks/useAuth";
import { NavLink } from "react-router-dom";

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';



export const Navigation = () => {
const { isLoggedIn } = useAuth();
  return (
    <nav>
    <Stack spacing={2} direction="row">
        
          <NavLink to="/">
            <Button variant="contained" >Home</Button>  
          </NavLink>

        {isLoggedIn && (
            <NavLink to="/courses">
              <Button variant="contained" >Courses</Button>
            </NavLink>
        )}
    </Stack>

     
            


    </nav>
  );
};