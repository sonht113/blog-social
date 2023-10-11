import { lazy } from 'react';

const Dashboard = lazy(() => import('@/pages/dashboard'));
const Login = lazy(() => import('@/pages/login'));

const Users = lazy(() => import('@/pages/users'));

export { Dashboard, Users, Login };
