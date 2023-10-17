import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { UserService } from './user.service';
import { CreateUserType } from './types/create-user.type';
import {
  OptionsQueryType,
  PaginationUserType,
  ResponseUser,
  UserDataResponse,
} from './types/common.type';
import { UpdateUserType } from './types/update-user.type';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'route/auth/jwt-auth.guard';

@Resolver()
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => PaginationUserType)
  getUsers(@Args('query') query: OptionsQueryType) {
    return this.userService.getUsers(query);
  }

  @Query(() => UserDataResponse)
  getUserById(@Args('id') id: string) {
    return this.userService.getUserById(id);
  }

  @Query(() => UserDataResponse)
  getUserByUserName(@Args('username') username: string) {
    return this.userService.getUserByUserName(username);
  }

  @Query(() => UserDataResponse)
  @UseGuards(JwtAuthGuard)
  getInfo(@Context() context) {
    console.log(context.req.user);
    return this.userService.getUserByUserName(context.req.user.username);
  }

  @Mutation(() => UserDataResponse)
  @UseGuards(JwtAuthGuard)
  createUser(@Args('body') body: CreateUserType) {
    return this.userService.createUser(body);
  }

  @Mutation(() => ResponseUser)
  @UseGuards(JwtAuthGuard)
  updateUser(@Args('id') id: string, @Args('body') body: UpdateUserType) {
    return this.userService.updateUser(id, body);
  }

  @Mutation(() => ResponseUser)
  @UseGuards(JwtAuthGuard)
  updatePassword(
    @Args('id') id: string,
    @Args('oldPassword') oldPassword: string,
    @Args('newPassword') newPassword: string,
  ) {
    return this.userService.updatePassword(id, oldPassword, newPassword);
  }

  @Mutation(() => ResponseUser)
  @UseGuards(JwtAuthGuard)
  deleteUser(@Args('id') id: string) {
    return this.userService.deleteUser(id);
  }
}
