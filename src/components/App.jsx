import { lazy } from 'react';


const HomePage = lazy(() => import('../pages/Home'));
export const App = () => {
  return (
    <HomePage></HomePage>
  );
};
