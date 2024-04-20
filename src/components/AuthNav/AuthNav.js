import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';


export const AuthNav = (props) => {
  return (
    <div>
      <NavLink  to="/register">
        <Button
          style={{ marginRight: 10 }}
          variant="contained"
          onClick={()=>{props.handleButtonClick('courses')}}
        >Register</Button>
      </NavLink>
      <NavLink
          to="/login"><Button
          variant="contained"
          onClick={()=>{props.handleButtonClick('courses')}}
        > Log In</Button>
      </NavLink>

     
       
        
      

    </div>
  );
};
