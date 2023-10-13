import { OperationVariables, useQuery } from '@apollo/client';

import { DataUser } from '@/features/user';
import { GET_INFO } from '@/gql';

export const useQueryInfoUser = () =>
  useQuery<{ getInfo: DataUser }, OperationVariables>(GET_INFO);
