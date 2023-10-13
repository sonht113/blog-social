import { ReactElement } from 'react';

import { QueryKey, UseQueryOptions } from '@tanstack/react-query';
import { Control, ControllerRenderProps, FieldValues } from 'react-hook-form';

export type PageParams = {
  page?: number;
  limit?: number;
};

export type QueryOptions<T, TQueryData = unknown, TError = unknown> = Omit<
  UseQueryOptions<TQueryData, TError, T, QueryKey>,
  | 'queryKey'
  | 'queryFn'
  | 'refetchInterval'
  | 'refetchOnMount'
  | 'refetchOnReconnect'
  | 'refetchOnWindowFocus'
  | 'useErrorBoundary'
>;

export type ValueOf<T> = T[keyof T];

// K is the union keyof T whose type is required,
// the remaining keys of T have the same type
export type RequiredKeys<T, K extends keyof T> = Required<
  Pick<T, Extract<keyof T, K>>
> &
  Omit<T, Extract<keyof T, K>>;

export type DataFieldInputType<T extends FieldValues> = {
  isRequired?: boolean;
  control: Control<T, unknown>;
  name: string;
  element: ({ field }: { field: ControllerRenderProps }) => ReactElement;
};
