import { lazy } from 'react';
import { useRoutes } from 'react-router';
// import Contacts from '../Pages/Contacts/Contacts';
// import Home from '../Pages/Home/Home';

const Contacts = lazy(() => import('../Pages/Contacts/Contacts'));
const Home = lazy(() => import('../Pages/Home/Home'));

export const useRoutesConstants = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />,
    },

    {
      path: 'contacts',
      element: <Contacts />,
    },
  ]);

  return routes;
};
