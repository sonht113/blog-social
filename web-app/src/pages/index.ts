import { lazy } from 'react';

const Home = lazy(() => import('@/pages/home'));
const Users = lazy(() => import('@/pages/users'));
const Login = lazy(() => import('@/pages/login'));
const SignUp = lazy(() => import('@/pages/sign-up'));
const Social = lazy(() => import('@/pages/social'));
const Computer = lazy(() => import('@/pages/computer'));
const Software = lazy(() => import('@/pages/software'));

export { Home, Users, Login, SignUp, Social, Computer, Software };
