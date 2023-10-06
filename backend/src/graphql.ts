
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
    role?: Nullable<number>;
    email?: Nullable<string>;
    dayOfBirth?: Nullable<string>;
    avatar?: Nullable<string>;
    phoneNumber?: Nullable<string>;
    desc?: Nullable<string>;
    address?: Nullable<string>;
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

export interface ResponseUser {
    status: string;
    data: UserType;
}

export interface LoginResponse {
    access_token: string;
    user: UserType;
}

export interface IQuery {
    getUsers(query: OptionsQueryType): PaginationUserType | Promise<PaginationUserType>;
    getUserById(id: string): UserType | Promise<UserType>;
    getUserByUserName(username: string): UserType | Promise<UserType>;
}

export interface IMutation {
    createUser(body: CreateUserType): UserType | Promise<UserType>;
    updateUser(id: string, body: UpdateUserType): ResponseUser | Promise<ResponseUser>;
    deleteUser(id: string): ResponseUser | Promise<ResponseUser>;
    login(body: LoginUserInputType): LoginResponse | Promise<LoginResponse>;
    signup(body: SignUpUserInputType): UserType | Promise<UserType>;
}

export type DateTime = any;
type Nullable<T> = T | null;
