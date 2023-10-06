import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserType } from './types/user.type';
import { CreateUserType } from './types/create-user.type';
import {
  OptionsQueryType,
  PaginationUserType,
  ResponseUser,
} from './types/common.type';
import { UpdateUserType } from './types/update-user.type';

@Resolver()
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => PaginationUserType)
  getUsers(@Args('query') query: OptionsQueryType) {
    return this.userService.getUsers(query);
  }

  @Query(() => UserType)
  getUserById(@Args('id') id: string) {
    return this.userService.getUserById(id);
  }

  @Query(() => UserType)
  getUserByUserName(@Args('username') username: string) {
    return this.userService.getUserByUserName(username);
  }

  @Mutation(() => UserType)
  createUser(@Args('body') body: CreateUserType) {
    return this.userService.createUser(body);
  }

  @Mutation(() => ResponseUser)
  updateUser(@Args('id') id: string, @Args('body') body: UpdateUserType) {
    return this.userService.updateUser(id, body);
  }

  @Mutation(() => ResponseUser)
  deleteUser(@Args('id') id: string) {
    return this.userService.deleteUser(id);
  }
}
