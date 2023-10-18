import { lazy } from 'react';

const Dashboard = lazy(() => import('@/pages/dashboard'));

const Users = lazy(() => import('@/pages/users'));

export { Dashboard, Users };
