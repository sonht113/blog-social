import { OperationVariables, gql, useQuery } from '@apollo/client';

import { DataUser } from '@/features/user';

const GET_INFO = gql`
  query {
    getInfo {
      fullname
      avatar
    }
  }
`;

export const useQueryInfoUser = () =>
  useQuery<{ getInfo: DataUser }, OperationVariables>(GET_INFO);
