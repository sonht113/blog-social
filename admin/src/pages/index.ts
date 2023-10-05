import { lazy } from 'react';

const Home = lazy(() => import('@/pages/home'));

const Users = lazy(() => import('@/pages/users'));

export { Home, Users };
