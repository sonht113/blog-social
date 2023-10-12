import { lazy } from 'react';

const Home = lazy(() => import('@/pages/home'));

const Users = lazy(() => import('@/pages/users'));

const Login = lazy(() => import('@/pages/login'));
const SignUp = lazy(() => import('@/pages/sign-up'));

export { Home, Users, Login, SignUp };
