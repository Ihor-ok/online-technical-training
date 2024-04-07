import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';

export const AuthNav = () => {
  return (
    <div>
      <Button style={{ marginRight: 10 }} variant="contained"><NavLink  to="/register">
        Register
      </NavLink></Button>
      <Button  variant="contained"><NavLink to="/login">
        Log In
      </NavLink></Button>

    </div>
  );
};
