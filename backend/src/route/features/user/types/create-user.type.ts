import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsEmail } from 'class-validator';
import { EnumRoleUser } from 'ts/enums';

@InputType()
export class CreateUserType {
  @IsNotEmpty()
  @Field()
  fullname: string;

  @IsNotEmpty()
  @Field()
  username: string;

  @IsOptional()
  @Field(() => Number, { defaultValue: EnumRoleUser['USER'] })
  role: number;

  @IsNotEmpty()
  @IsEmail()
  @Field()
  email: string;

  @IsNotEmpty()
  @Field()
  dayOfBirth: string;

  @IsOptional()
  @Field(() => String, { defaultValue: '' })
  avatar: string;

  @IsNotEmpty()
  @Field()
  phoneNumber: string;

  @IsOptional()
  @Field(() => String, { defaultValue: '' })
  desc: string;

  @IsOptional()
  @Field(() => String, { defaultValue: '' })
  address: string;
}
