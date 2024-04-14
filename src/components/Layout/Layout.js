import { Outlet } from 'react-router-dom';


import { Suspense } from 'react';
import { ButtonAppBar } from 'components/AppBar/AppBar';

import css from './Layout.module.css'

export const Layout = () => {
  return (
    <div>
      <div className={css.layout}>
      <ButtonAppBar />
      </div>
      
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      

    </div>
    
    
  );
};
