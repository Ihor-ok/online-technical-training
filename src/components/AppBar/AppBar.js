import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from 'components/hooks/useAuth';


import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import css from './AppBar.module.css'

const theme = createTheme({
  palette: {
    primary: {
      main: '#2e7d32',
      light: '#4caf50',
      dark: '#1b5e20',
      contrastText: '#fff',
    },
  },
});




export const ButtonAppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    
      <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        
          <AppBar position="static">
            <div className={css.AppBar}>
              <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Navigation />
              </Typography>
              {isLoggedIn ? <UserMenu /> : <AuthNav />}
              </Toolbar>
          </div>
          </AppBar>
        
    </Box>
      </ThemeProvider>
      

    
     


  );
};
