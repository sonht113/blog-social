import {
  ApolloCache,
  DefaultContext,
  OperationVariables,
  useMutation,
} from '@apollo/client';

import { LOGIN, SIGN_UP } from '../graphql';
import useAuthStore from '../hooks/use-auth-store';
import { ResponseLogin } from '../services/type';
import { DataUser } from '@/features/user';

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

export const useSignUpMutation = () =>
  useMutation<
    { signup: DataUser },
    OperationVariables,
    DefaultContext,
    ApolloCache<unknown>
  >(SIGN_UP);
