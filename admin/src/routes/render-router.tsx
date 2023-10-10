import { FC, lazy } from 'react';

import { Navigate, useRoutes } from 'react-router-dom';

import PrivateRoute from './private-router';
import { LOGIN_PATH } from '@/data';
import { routeList } from '@/data/constant/navs';
import LayoutComponent from '@/layout';
import { Login } from '@/pages';

const NotFound = lazy(() => import('@/pages/not-found'));

const routes = [
  {
    path: LOGIN_PATH,
    element: <Login />,
  },
  {
    path: '/',
    element: <LayoutComponent />,
    children: [
      {
        path: '',
        element: <Navigate to="login" />,
      },
      ...routeList,
      {
        path: '*',
        element: (
          <PrivateRoute>
            <NotFound />
          </PrivateRoute>
        ),
      },
    ],
  },
];

const RenderRouter: FC = () => {
  const element = useRoutes(routes);

  return element;
};

export default RenderRouter;
