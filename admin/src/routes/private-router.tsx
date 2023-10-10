import { ReactElement } from 'react';

import { Button, Result } from 'antd';
import { Navigate, useNavigate } from 'react-router-dom';
import { useReadLocalStorage } from 'usehooks-ts';

import { DASHBOARD_PATH, LOGIN_PATH } from '@/data';
import { useAuthStore } from '@/features/auth';
import { hasItemInList } from '@/utils';

type Props = {
  children: ReactElement;
};

const PrivateRoute = ({ children }: Props) => {
  const token = undefined;

  return token ? <>{children}</> : <Navigate to={LOGIN_PATH} replace />;
};

export default PrivateRoute;
