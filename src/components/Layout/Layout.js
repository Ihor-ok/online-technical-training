import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { Suspense } from 'react';
import { ButtonAppBar } from 'components/AppBar/AppBar';

export const Layout = () => {
  return (
    <div >
      <ButtonAppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
