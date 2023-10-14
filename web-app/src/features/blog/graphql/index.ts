import { gql } from '@apollo/client';

export const CREATE_BLOG = gql`
  mutation CreateBlog($body: CreateBlogType!) {
    createBlog(body: $body) {
      status
      data {
        title
        shortDesc
        content
        creator {
          id
          fullname
          avatar
        }
        category {
          id
          name
          link
        }
      }
    }
  }
`;
