import { gql } from '@apollo/client';

export const GET_USER_DETAIL = gql`
  query ($id: String!) {
    getUserById(id: $id) {
      id
      fullname
      email
      avatar
      phoneNumber
      desc
      address
    }
  }
`;
