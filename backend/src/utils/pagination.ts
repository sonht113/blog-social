import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Pagination {
  @Field()
  page: number;

  @Field()
  limit: number;

  @Field()
  totalPage: number;
}
