/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
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
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export type BlogType = {
  __typename?: 'BlogType';
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  creator: UserType;
  id: Scalars['ID']['output'];
  like: Scalars['Float']['output'];
  shortDesc: Scalars['String']['output'];
  thumbnail: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CategoryType = {
  __typename?: 'CategoryType';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  link: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CommentType = {
  __typename?: 'CommentType';
  blog: Scalars['String']['output'];
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  creator: UserType;
  id: Scalars['ID']['output'];
  like: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CreateBlogType = {
  content: Scalars['String']['input'];
  creator: Scalars['String']['input'];
  like?: InputMaybe<Scalars['Float']['input']>;
  shortDesc?: InputMaybe<Scalars['String']['input']>;
  thumbnail: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type CreateCategoryType = {
  link: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CreateCommentType = {
  blog: Scalars['String']['input'];
  content: Scalars['String']['input'];
  creator: Scalars['String']['input'];
  like?: InputMaybe<Scalars['Float']['input']>;
};

export type CreateUserType = {
  address?: Scalars['String']['input'];
  avatar?: Scalars['String']['input'];
  dayOfBirth: Scalars['String']['input'];
  desc?: Scalars['String']['input'];
  email: Scalars['String']['input'];
  fullname: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  role?: Scalars['Float']['input'];
  username: Scalars['String']['input'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  access_token: Scalars['String']['output'];
  user: UserType;
};

export type LoginUserInputType = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createBlog: ResponseMutationBlogType;
  createCategory: ResponseMutationType;
  createComment: ResponseMutationCommentType;
  createUser: UserDataResponse;
  deleteBlog: ResponseMutationBlogType;
  deleteCategory: ResponseMutationType;
  deleteComment: ResponseMutationCommentType;
  deleteUser: ResponseUser;
  login: LoginResponse;
  signup: UserType;
  updateBlog: ResponseMutationBlogType;
  updateComment: ResponseMutationCommentType;
  updatePassword: ResponseUser;
  updateUser: ResponseUser;
  uploadMultipleFiles: Array<ResponseSingleUpload>;
  uploadSingleFiles: ResponseSingleUpload;
};


export type MutationCreateBlogArgs = {
  body: CreateBlogType;
};


export type MutationCreateCategoryArgs = {
  body: CreateCategoryType;
};


export type MutationCreateCommentArgs = {
  body: CreateCommentType;
};


export type MutationCreateUserArgs = {
  body: CreateUserType;
};


export type MutationDeleteBlogArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteCommentArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  body: LoginUserInputType;
};


export type MutationSignupArgs = {
  body: SignUpUserInputType;
};


export type MutationUpdateBlogArgs = {
  body: UpdateBlogType;
  id: Scalars['String']['input'];
};


export type MutationUpdateCommentArgs = {
  body: UpdateCommentType;
  id: Scalars['String']['input'];
};


export type MutationUpdatePasswordArgs = {
  id: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};


export type MutationUpdateUserArgs = {
  body: UpdateUserType;
  id: Scalars['String']['input'];
};


export type MutationUploadMultipleFilesArgs = {
  files: Array<Scalars['Upload']['input']>;
};


export type MutationUploadSingleFilesArgs = {
  file: Scalars['Upload']['input'];
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
  getBlogById: BlogType;
  getBlogs: Array<BlogType>;
  getCategories: Array<CategoryType>;
  getComments: Array<CommentType>;
  getInfo: UserDataResponse;
  getUserById: UserDataResponse;
  getUserByUserName: UserDataResponse;
  getUsers: PaginationUserType;
};


export type QueryGetBlogByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetCommentsArgs = {
  idBlog: Scalars['String']['input'];
};


export type QueryGetUserByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetUserByUserNameArgs = {
  username: Scalars['String']['input'];
};


export type QueryGetUsersArgs = {
  query: OptionsQueryType;
};

export type ResponseMutationBlogType = {
  __typename?: 'ResponseMutationBlogType';
  data: BlogType;
  status: Scalars['String']['output'];
};

export type ResponseMutationCommentType = {
  __typename?: 'ResponseMutationCommentType';
  data: CommentType;
  status: Scalars['String']['output'];
};

export type ResponseMutationType = {
  __typename?: 'ResponseMutationType';
  data: CategoryType;
  status: Scalars['String']['output'];
};

export type ResponseSingleUpload = {
  __typename?: 'ResponseSingleUpload';
  url: Scalars['String']['output'];
};

export type ResponseUser = {
  __typename?: 'ResponseUser';
  data: UserType;
  status: Scalars['String']['output'];
};

export type SignUpUserInputType = {
  address?: Scalars['String']['input'];
  avatar?: Scalars['String']['input'];
  dayOfBirth: Scalars['String']['input'];
  desc?: Scalars['String']['input'];
  email: Scalars['String']['input'];
  fullname: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  role?: Scalars['Float']['input'];
  username: Scalars['String']['input'];
};

export type UpdateBlogType = {
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  like?: InputMaybe<Scalars['Float']['input']>;
  shortDesc?: InputMaybe<Scalars['String']['input']>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UpdateCommentType = {
  content?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateUserType = {
  address?: InputMaybe<Scalars['String']['input']>;
  avatar?: InputMaybe<Scalars['String']['input']>;
  dayOfBirth?: InputMaybe<Scalars['String']['input']>;
  desc?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  fullname?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['Float']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserDataResponse = {
  __typename?: 'UserDataResponse';
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

export type UserType = {
  __typename?: 'UserType';
  address: Scalars['String']['output'];
  avatar: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  desc: Scalars['String']['output'];
  email: Scalars['String']['output'];
  fullname: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  password: Scalars['String']['output'];
  phoneNumber: Scalars['String']['output'];
  role: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
  username: Scalars['String']['output'];
};

export type LoginMutationVariables = Exact<{
  body: LoginUserInputType;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResponse', access_token: string, user: { __typename?: 'UserType', fullname: string, avatar: string } } };


export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginUserInputType"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"body"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"access_token"}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;