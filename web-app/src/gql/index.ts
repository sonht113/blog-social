import { gql } from '@apollo/client';

export const GET_INFO = gql`
  query {
    getInfo {
      fullname
      avatar
    }
  }
`;

export const GET_CATEGORIES = gql`
  query {
    getCategories {
      id
      createdAt
      updatedAt
      name
      link
    }
  }
`;
