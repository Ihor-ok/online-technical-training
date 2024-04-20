import { useDispatch } from 'react-redux';

import { useAuth } from 'components/hooks/useAuth';
import { logOut } from 'components/redux/auth/operations';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';



export const UserMenu = (props) => {
  const dispatch = useDispatch();
  const { user } = useAuth();




  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 12,
    }}>
      <p >Welcome, <b>{user.name}</b>!</p>
      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          sx={{
          backgroundColor: '#FF4500', // Зелений фон
          color: 'white', // Білий колір тексту
          '&:hover': {
          backgroundColor: 'darkgreen', // Зелений фон при наведенні
        },
      }}
          onClick={() => {
      
          dispatch(logOut())
          props.handleButtonClick('home')
          }}>
          Logout
        </Button>
      </Stack>
      {/* <button type="button" onClick={() => {
      
        dispatch(logOut())
      }}>
        Logout
      </button> */}
    </div>
  );
};
