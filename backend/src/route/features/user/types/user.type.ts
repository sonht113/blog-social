import { Field, ObjectType, ID } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@ObjectType()
export class UserType {
  @IsUUID(4, { each: true })
  @Field(() => ID)
  id: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  fullname: string;

  @Field()
  username: string;

  @Field()
  password: string;

  @Field(() => Number)
  role: number;

  @Field()
  email: string;

  @Field(() => String)
  avatar: string;

  @Field()
  phoneNumber: string;

  @Field(() => String)
  dayOfBirth: string;

  @Field(() => String)
  desc: string;

  @Field(() => String)
  address: string;
}
