import { gql } from '@apollo/client';

export const GET_BLOGS = gql`
  query GetBlogs($query: QueryOptions!) {
    getBlogs(query: $query) {
      page
      limit
      totalPage
      data {
        id
        title
        shortDesc
        thumbnail
        content
        createdAt
        category {
          id
          name
        }
      }
    }
  }
`;

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
