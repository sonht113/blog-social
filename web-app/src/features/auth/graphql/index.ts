import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation Login($body: LoginUserInputType!) {
    login(body: $body) {
      user {
        fullname
        avatar
      }
      access_token
    }
  }
`;
