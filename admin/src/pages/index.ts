import { lazy } from 'react';

const Dashboard = lazy(() => import('@/pages/dashboad'));

const Users = lazy(() => import('@/pages/users'));

export { Dashboard, Users };
