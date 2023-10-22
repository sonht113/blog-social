import {
  ApolloCache,
  DefaultContext,
  OperationVariables,
  useMutation,
  useQuery,
} from '@apollo/client';

import {
  CREATE_BLOG,
  CREATE_COMMENT,
  GET_BLOGS,
  GET_BLOG_DETAIL,
  GET_COMMENTS,
  GET_POPULAR_BLOGS,
  LIKE_BLOG,
} from '../graphql';
import {
  DataBlog,
  DataComment,
  QueryOption,
  ResPaginationBlogData,
} from '../services/types';

export const useGetBlogsQuery = (query: QueryOption) =>
  useQuery<{ getBlogs: ResPaginationBlogData }, OperationVariables>(GET_BLOGS, {
    variables: { query: query },
  });

export const useGetPopularBlogsQuery = (query: Pick<QueryOption, 'category'>) =>
  useQuery<{ getPopularBlogs: DataBlog[] }, OperationVariables>(
    GET_POPULAR_BLOGS,
    { variables: { query } },
  );

export const useGetBlogDetailQuery = (id: string) =>
  useQuery<{ getBlogById: DataBlog }, OperationVariables>(GET_BLOG_DETAIL, {
    variables: { id },
  });

export const useCreateBlogMutation = () =>
  useMutation<
    { createBlog: { status: string; data: DataBlog } },
    OperationVariables,
    DefaultContext,
    ApolloCache<unknown>
  >(CREATE_BLOG);

export const useLikeBlogMutation = () =>
  useMutation<
    { likeBlog: { status: string; data: DataBlog } },
    OperationVariables,
    DefaultContext,
    ApolloCache<unknown>
  >(LIKE_BLOG);

export const useGetCommentsQuery = (id: string) =>
  useQuery<{ getComments: DataComment[] }, OperationVariables>(GET_COMMENTS, {
    variables: { idBlog: id },
  });

export const useCreateCommentMutation = () =>
  useMutation<
    { createComment: { status: string; data: DataComment } },
    OperationVariables,
    DefaultContext,
    ApolloCache<unknown>
  >(CREATE_COMMENT);
