import { Field, ObjectType } from '@nestjs/graphql';
import { CategoryType } from './category.type';

@ObjectType()
export class ResponseMutationType {
  @Field(() => String)
  status: string;

  @Field(() => CategoryType)
  data: CategoryType;
}
