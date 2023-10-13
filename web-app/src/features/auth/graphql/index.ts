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

export const SIGN_UP = gql`
  mutation Signup($body: SignUpUserInputType!) {
    signup(body: $body) {
      username
    }
  }
`;
