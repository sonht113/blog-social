/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type CreateUserType = {
  address?: Scalars['String']['input'];
  avatar?: Scalars['String']['input'];
  dayOfBirth: Scalars['String']['input'];
  desc?: Scalars['String']['input'];
  email: Scalars['String']['input'];
  fullname: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  role?: Scalars['Float']['input'];
  username: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: UserType;
};


export type MutationCreateUserArgs = {
  body: CreateUserType;
};

export type OptionsQueryType = {
  address?: Scalars['String']['input'];
  email?: Scalars['String']['input'];
  fullname?: Scalars['String']['input'];
  limit?: Scalars['Float']['input'];
  page?: Scalars['Float']['input'];
  phoneNumber?: Scalars['String']['input'];
  role?: Scalars['Float']['input'];
};

export type PaginationUserType = {
  __typename?: 'PaginationUserType';
  data: Array<UserType>;
  limit: Scalars['Float']['output'];
  page: Scalars['Float']['output'];
  totalPage: Scalars['Float']['output'];
};

export type Query = {
  __typename?: 'Query';
  getUsers: PaginationUserType;
};


export type QueryGetUsersArgs = {
  query: OptionsQueryType;
};

export type UserType = {
  __typename?: 'UserType';
  address: Scalars['String']['output'];
  avatar: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  desc: Scalars['String']['output'];
  email: Scalars['String']['output'];
  fullname: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  phoneNumber: Scalars['String']['output'];
  role: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
  username: Scalars['String']['output'];
};
