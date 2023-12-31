import { Field, InputType, ObjectType, OmitType } from '@nestjs/graphql';
import { UserType } from './user.type';
import { IsOptional } from 'class-validator';

@ObjectType()
export class PaginationUserType {
  @Field(() => [UserType])
  data: UserType[];

  @Field()
  page: number;

  @Field()
  limit: number;

  @Field()
  totalPage: number;
}

@InputType()
export class OptionsQueryType {
  @IsOptional()
  @Field(() => Number, { defaultValue: 1 })
  page: number;

  @IsOptional()
  @Field(() => Number, { defaultValue: 10 })
  limit: number;

  @IsOptional()
  @Field(() => String, { defaultValue: '' })
  fullname: string;

  @IsOptional()
  @Field(() => Number, { defaultValue: 0 })
  role: number;

  @IsOptional()
  @Field(() => String, { defaultValue: '' })
  email: string;

  @IsOptional()
  @Field(() => String, { defaultValue: '' })
  phoneNumber: string;

  @IsOptional()
  @Field(() => String, { defaultValue: '' })
  address: string;
}

@ObjectType()
export class UserDataResponse extends OmitType(UserType, ['password']) {}

@ObjectType()
export class ResponseUser {
  @Field(() => String)
  status: string;

  @Field(() => UserType)
  data: UserDataResponse;
}
