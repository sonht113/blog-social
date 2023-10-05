import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserType } from './types/user.type';
import { CreateUserType } from './types/create-user.type';
import { OptionsQueryType, PaginationUserType } from './types/common.type';

@Resolver()
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => PaginationUserType)
  getUsers(@Args('query') query: OptionsQueryType) {
    return this.userService.getUsers(query);
  }

  @Mutation(() => UserType)
  createUser(@Args('body') body: CreateUserType) {
    return this.userService.createUser(body);
  }
}
