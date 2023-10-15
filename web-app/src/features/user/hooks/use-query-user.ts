import { OperationVariables, QueryResult, useQuery } from '@apollo/client';

import { GET_USER_DETAIL } from '../graphql';
import { DataUser } from '../services/type';

export const useGetUserDetailQuery = (
  id: string,
): QueryResult<{ getUserById: DataUser }, OperationVariables> =>
  useQuery(GET_USER_DETAIL, { variables: { id: id } });
