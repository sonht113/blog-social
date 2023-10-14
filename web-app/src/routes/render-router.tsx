import { FC, lazy } from 'react';

import { Navigate, useRoutes } from 'react-router-dom';

import PrivateRoute from './private-route';
import {
  BLOG_DETAIL_PATH,
  CREATE_BLOG_PATH,
  LOGIN_PATH,
  SIGN_UP_PATH,
} from '@/data';
import { routeList } from '@/data/constant/navs';
import LayoutComponent from '@/layout';
import { AddBlog, BlogDetail, Login, SignUp } from '@/pages';

const NotFound = lazy(() => import('@/pages/not-found'));

const routes = [
  {
    path: LOGIN_PATH,
    element: <Login />,
  },
  {
    path: SIGN_UP_PATH,
    element: <SignUp />,
  },
  {
    path: '/',
    element: <LayoutComponent />,
    children: [
      {
        path: '',
        element: <Navigate to="home" />,
      },
      ...routeList,
      {
        path: '*',
        element: <NotFound />,
      },
      {
        path: CREATE_BLOG_PATH,
        element: (
          <PrivateRoute>
            <AddBlog />
          </PrivateRoute>
        ),
      },
      {
        path: BLOG_DETAIL_PATH,
        element: <BlogDetail />,
      },
    ],
  },
];

const RenderRouter: FC = () => {
  const element = useRoutes(routes);

  return element;
};

export default RenderRouter;
