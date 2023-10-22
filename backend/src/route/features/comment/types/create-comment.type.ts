import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class CreateCommentType {
  @IsOptional()
  @Field({ nullable: true })
  creator: string;

  @IsNotEmpty()
  @Field()
  content: string;

  @IsNotEmpty()
  @Field()
  blog: string;

  @IsOptional()
  @Field({ defaultValue: 0, nullable: true })
  like: number;
}
