import { OperationVariables, useQuery } from '@apollo/client';

import { Category } from '@/features/category';
import { GET_CATEGORIES } from '@/gql';

export const useQueryCategories = () =>
  useQuery<{ getCategories: Category[] }, OperationVariables>(GET_CATEGORIES);
