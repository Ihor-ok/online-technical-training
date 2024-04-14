import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';


export const AuthNav = () => {
  return (
    <div>
      <NavLink  to="/register">
        <Button  style={{ marginRight: 10 }}  variant="contained">Register</Button>
      </NavLink>
      <NavLink to="/login"><Button  variant="contained"> Log In</Button>
      </NavLink>

     
       
        
      

    </div>
  );
};
