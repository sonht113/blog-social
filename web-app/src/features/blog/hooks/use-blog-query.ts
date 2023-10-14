import {
  ApolloCache,
  DefaultContext,
  OperationVariables,
  useMutation,
} from '@apollo/client';

import { CREATE_BLOG } from '../graphql';
import { DataBlog } from '../services/types';

export const useCreateBlogMutation = () =>
  useMutation<
    { createBlog: { status: string; data: DataBlog } },
    OperationVariables,
    DefaultContext,
    ApolloCache<unknown>
  >(CREATE_BLOG);
