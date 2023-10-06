import { Field, ObjectType } from '@nestjs/graphql';
import { UserType } from '../../features';

@ObjectType('LoginResponse')
export class LoginResponseType {
  @Field()
  access_token: string;

  @Field(() => UserType)
  user: Omit<UserType, 'password'>;
}
