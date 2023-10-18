import { ReactNode } from 'react';

import { QueryKey, UseQueryOptions } from '@tanstack/react-query';
import { MenuItemType } from 'antd/es/menu/hooks/useItems';
import { ColumnType } from 'antd/es/table';

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

export type Pagination = {
  page?: number;
  limit?: number;
};

export type CustomTypeItem = MenuItemType & {
  type?: string;
  link?: string;
  children?: {
    icon?: unknown;
    label?: string;
    key?: string;
    link?: string;
  }[];
};

export type CustomColumnsType<T> = (ColumnType<T> & {
  initValue?: string[];
  type?: 'input' | 'select' | 'input-number';
  options?: { label: string; value: number }[];
})[];

export type KeyQueryDate<T> = {
  trackedAt: Partial<T>;
  sendingDate: Partial<T>;
  createdDate: Partial<T>;
};

export type DataIndexQueryDate<T> = {
  [K in keyof T]: string;
};

export type BreadcrumbsType = {
  title: string;
  link?: string;
};

export type DescriptionsCustom = {
  isShow?: boolean;
  isRequired?: boolean;
  labelText: string;
  element: ReactNode;
};
