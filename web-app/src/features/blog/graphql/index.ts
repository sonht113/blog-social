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

export const GET_POPULAR_BLOGS = gql`
  query {
    getPopularBlogs {
      id
      title
      category {
        id
        name
        link
      }
      shortDesc
      content
      thumbnail
      creator {
        id
        fullname
        avatar
      }
      like
    }
  }
`;

export const GET_BLOG_DETAIL = gql`
  query GetBlogById($id: String!) {
    getBlogById(id: $id) {
      id
      title
      category {
        id
        name
        link
      }
      shortDesc
      content
      thumbnail
      creator {
        id
        fullname
        avatar
      }
      like
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

export const LIKE_BLOG = gql`
  mutation LikeBlog($id: String!, $idUser: String!) {
    likeBlog(id: $id, idUser: $idUser) {
      status
      data {
        id
        title
        like
      }
    }
  }
`;
