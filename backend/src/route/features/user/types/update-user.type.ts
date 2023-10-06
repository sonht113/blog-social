import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, IsEmail, IsEmpty } from 'class-validator';

@InputType()
export class UpdateUserType {
  @IsOptional()
  @Field({ nullable: true })
  fullname?: string;

  @IsEmpty()
  @Field({ nullable: true })
  role: number;

  @IsOptional()
  @IsEmail()
  @Field({ nullable: true })
  email: string;

  @IsOptional()
  @Field({ nullable: true })
  dayOfBirth: string;

  @IsOptional()
  @Field({ nullable: true })
  avatar: string;

  @IsOptional()
  @Field({ nullable: true })
  phoneNumber: string;

  @IsOptional()
  @Field({ nullable: true })
  desc: string;

  @IsOptional()
  @Field({ nullable: true })
  address: string;
}
