import { ReactElement } from 'react';

import { Navigate } from 'react-router-dom';

import { LOGIN_PATH } from '@/data';
import { useAuthStore } from '@/features/auth';

type Props = {
  children: ReactElement;
};

const PrivateRoute = ({ children }: Props) => {
  const token = useAuthStore((state) => state.token);

  return token ? <>{children}</> : <Navigate to={LOGIN_PATH} replace />;
};

export default PrivateRoute;
