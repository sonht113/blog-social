import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from './gql-auth.guard';
import { LoginUserInputType } from './types/input-login-user.type';
import { LoginResponseType } from './types/login-respone.type';
import { UserType } from '../features/user/types/user.type';
import { SignUpUserInputType } from './types/input-signup-user.type';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => LoginResponseType)
  @UseGuards(GqlAuthGuard)
  login(
    @Args('body')
    body: LoginUserInputType,
  ) {
    return this.authService.login(body);
  }

  @Mutation(() => UserType)
  signup(@Args('body') body: SignUpUserInputType) {
    return this.authService.signup(body);
  }
}
