
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

export interface IQuery {
    getUsers(query: OptionsQueryType): PaginationUserType | Promise<PaginationUserType>;
}

export interface IMutation {
    createUser(body: CreateUserType): UserType | Promise<UserType>;
}

export type DateTime = any;
type Nullable<T> = T | null;
