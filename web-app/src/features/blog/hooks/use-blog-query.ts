import {
  ApolloCache,
  DefaultContext,
  OperationVariables,
  useMutation,
  useQuery,
} from '@apollo/client';

import { CREATE_BLOG, GET_BLOGS, GET_POPULAR_BLOGS } from '../graphql';
import {
  DataBlog,
  QueryOption,
  ResPaginationBlogData,
} from '../services/types';

export const useGetBlogsQuery = (query: QueryOption) =>
  useQuery<{ getBlogs: ResPaginationBlogData }, OperationVariables>(GET_BLOGS, {
    variables: { query: query },
  });

export const useGetPopularBlogsQuery = () =>
  useQuery<{ getPopularBlogs: DataBlog[] }, OperationVariables>(
    GET_POPULAR_BLOGS,
  );

export const useCreateBlogMutation = () =>
  useMutation<
    { createBlog: { status: string; data: DataBlog } },
    OperationVariables,
    DefaultContext,
    ApolloCache<unknown>
  >(CREATE_BLOG);
