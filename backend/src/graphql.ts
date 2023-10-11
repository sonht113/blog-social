
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface OptionsQueryType {
    page: number;
    limit: number;
    fullname: string;
    role: number;
    email: string;
    phoneNumber: string;
    address: string;
}

export interface CreateUserType {
    fullname: string;
    username: string;
    password: string;
    role: number;
    email: string;
    dayOfBirth: string;
    avatar: string;
    phoneNumber: string;
    desc: string;
    address: string;
}

export interface UpdateUserType {
    fullname?: Nullable<string>;
    username?: Nullable<string>;
    password?: Nullable<string>;
    role?: Nullable<number>;
    email?: Nullable<string>;
    dayOfBirth?: Nullable<string>;
    avatar?: Nullable<string>;
    phoneNumber?: Nullable<string>;
    desc?: Nullable<string>;
    address?: Nullable<string>;
}

export interface CreateCategoryType {
    name: string;
    link: string;
}

export interface CreateBlogType {
    title: string;
    shortDesc?: Nullable<string>;
    content: string;
    thumbnail: string;
    creator: string;
    like?: Nullable<number>;
}

export interface UpdateBlogType {
    id?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
    title?: Nullable<string>;
    shortDesc?: Nullable<string>;
    content?: Nullable<string>;
    thumbnail?: Nullable<string>;
    like?: Nullable<number>;
}

export interface CreateCommentType {
    creator: string;
    content: string;
    blog: string;
    like?: Nullable<number>;
}

export interface UpdateCommentType {
    content?: Nullable<string>;
    like?: Nullable<number>;
}

export interface LoginUserInputType {
    username: string;
    password: string;
}

export interface SignUpUserInputType {
    fullname: string;
    username: string;
    password: string;
    role: number;
    email: string;
    dayOfBirth: string;
    avatar: string;
    phoneNumber: string;
    desc: string;
    address: string;
}

export interface UserType {
    id: string;
    createdAt: DateTime;
    updatedAt: DateTime;
    fullname: string;
    username: string;
    password: string;
    role: number;
    email: string;
    avatar: string;
    phoneNumber: string;
    desc: string;
    address: string;
}

export interface PaginationUserType {
    data: UserType[];
    page: number;
    limit: number;
    totalPage: number;
}

export interface UserDataResponse {
    id: string;
    createdAt: DateTime;
    updatedAt: DateTime;
    fullname: string;
    username: string;
    role: number;
    email: string;
    avatar: string;
    phoneNumber: string;
    desc: string;
    address: string;
}

export interface ResponseUser {
    status: string;
    data: UserType;
}

export interface CategoryType {
    id: string;
    createdAt: DateTime;
    updatedAt: DateTime;
    name: string;
    link: string;
}

export interface ResponseMutationType {
    status: string;
    data: CategoryType;
}

export interface BlogType {
    id: string;
    createdAt: DateTime;
    updatedAt: DateTime;
    title: string;
    shortDesc: string;
    content: string;
    thumbnail: string;
    creator: UserType;
    like: number;
}

export interface ResponseMutationBlogType {
    status: string;
    data: BlogType;
}

export interface CommentType {
    id: string;
    createdAt: DateTime;
    updatedAt: DateTime;
    creator: UserType;
    content: string;
    blog: string;
    like: number;
}

export interface ResponseMutationCommentType {
    status: string;
    data: CommentType;
}

export interface LoginResponse {
    access_token: string;
    user: UserType;
}

export interface ResponseSingleUpload {
    url: string;
}

export interface IQuery {
    getUsers(query: OptionsQueryType): PaginationUserType | Promise<PaginationUserType>;
    getUserById(id: string): UserDataResponse | Promise<UserDataResponse>;
    getUserByUserName(username: string): UserDataResponse | Promise<UserDataResponse>;
    getInfo(): UserDataResponse | Promise<UserDataResponse>;
    getCategories(): CategoryType[] | Promise<CategoryType[]>;
    getBlogs(): BlogType[] | Promise<BlogType[]>;
    getBlogById(id: string): BlogType | Promise<BlogType>;
    getComments(idBlog: string): CommentType[] | Promise<CommentType[]>;
}

export interface IMutation {
    createUser(body: CreateUserType): UserDataResponse | Promise<UserDataResponse>;
    updateUser(id: string, body: UpdateUserType): ResponseUser | Promise<ResponseUser>;
    updatePassword(id: string, oldPassword: string, newPassword: string): ResponseUser | Promise<ResponseUser>;
    deleteUser(id: string): ResponseUser | Promise<ResponseUser>;
    createCategory(body: CreateCategoryType): ResponseMutationType | Promise<ResponseMutationType>;
    deleteCategory(id: string): ResponseMutationType | Promise<ResponseMutationType>;
    createBlog(body: CreateBlogType): ResponseMutationBlogType | Promise<ResponseMutationBlogType>;
    updateBlog(id: string, body: UpdateBlogType): ResponseMutationBlogType | Promise<ResponseMutationBlogType>;
    deleteBlog(id: string): ResponseMutationBlogType | Promise<ResponseMutationBlogType>;
    createComment(body: CreateCommentType): ResponseMutationCommentType | Promise<ResponseMutationCommentType>;
    updateComment(id: string, body: UpdateCommentType): ResponseMutationCommentType | Promise<ResponseMutationCommentType>;
    deleteComment(id: string): ResponseMutationCommentType | Promise<ResponseMutationCommentType>;
    login(body: LoginUserInputType): LoginResponse | Promise<LoginResponse>;
    signup(body: SignUpUserInputType): UserType | Promise<UserType>;
    uploadSingleFiles(file: Upload): ResponseSingleUpload | Promise<ResponseSingleUpload>;
    uploadMultipleFiles(files: Upload[]): ResponseSingleUpload[] | Promise<ResponseSingleUpload[]>;
}

export type DateTime = any;
export type Upload = any;
type Nullable<T> = T | null;
