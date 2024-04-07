import { useDispatch } from 'react-redux';

import { useAuth } from 'components/hooks/useAuth';
import { logOut } from 'components/redux/auth/operations';



export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();




  return (
    <div >
      <p >Welcome, <b>{user.name}</b>!</p>
      <button type="button" onClick={() => {
      
        dispatch(logOut())
      }}>
        Logout
      </button>
    </div>
  );
};
