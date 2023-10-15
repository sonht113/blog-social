import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { BlogType } from './blog.type';
import { IsOptional } from 'class-validator';
import { Pagination } from 'utils/pagination';

@ObjectType()
export class ResponseMutationBlogType {
  @Field(() => String)
  status: string;

  @Field(() => BlogType)
  data: BlogType;
}

@InputType()
export class QueryOptions {
  @IsOptional()
  @Field(() => Number, { defaultValue: 1 })
  page: number;

  @IsOptional()
  @Field(() => Number, { defaultValue: 10 })
  limit: number;

  @IsOptional()
  @Field(() => String, { defaultValue: '' })
  category: string;

  @IsOptional()
  @Field(() => String, { defaultValue: '' })
  creator: string;
}

@ObjectType()
export class ResPaginationBlogType extends Pagination {
  @Field(() => [BlogType])
  data: BlogType[];
}
