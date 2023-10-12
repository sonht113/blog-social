import {
  ApolloCache,
  DefaultContext,
  OperationVariables,
  useMutation,
} from '@apollo/client';

import { LOGIN } from '../graphql';
import useAuthStore from '../hooks/use-auth-store';
import { ResponseLogin } from '../services/type';

export const useLoginMutation = () =>
  useMutation<
    { login: ResponseLogin },
    OperationVariables,
    DefaultContext,
    ApolloCache<unknown>
  >(LOGIN);

export const useLogoutMutation = () => {
  const logout = useAuthStore((state) => state.logout);

  return { logout };
};
