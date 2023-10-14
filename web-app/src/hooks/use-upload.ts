import {
  ApolloCache,
  DefaultContext,
  OperationVariables,
  useMutation,
} from '@apollo/client';

import { UPLOAD_MULTIPLE_FILE, UPLOAD_SINGLE_FILE } from '@/gql';

export const useUploadSingleFileMutation = () =>
  useMutation<
    { uploadSingleFiles: { url: string } },
    OperationVariables,
    DefaultContext,
    ApolloCache<unknown>
  >(UPLOAD_SINGLE_FILE);

export const useUploadMultipleFilesMutation = () =>
  useMutation<
    { uploadSingleFiles: { url: string[] } },
    OperationVariables,
    DefaultContext,
    ApolloCache<unknown>
  >(UPLOAD_MULTIPLE_FILE);
