import { lazy } from 'react';

const Home = lazy(() => import('@/pages/home'));
const Users = lazy(() => import('@/pages/users'));
const Profile = lazy(() => import('@/pages/users/[id]'));

const Login = lazy(() => import('@/pages/login'));
const SignUp = lazy(() => import('@/pages/sign-up'));
const Social = lazy(() => import('@/pages/social'));
const Computer = lazy(() => import('@/pages/computer'));
const Software = lazy(() => import('@/pages/software'));

const AddBlog = lazy(() => import('@/pages/blog/add'));
const BlogDetail = lazy(() => import('@/pages/blog/[id]'));

export {
  Home,
  Users,
  Profile,
  Login,
  SignUp,
  Social,
  Computer,
  Software,
  AddBlog,
  BlogDetail,
};
