import { Field, ObjectType } from '@nestjs/graphql';
import { BlogType } from './blog.type';

@ObjectType()
export class ResponseMutationBlogType {
  @Field(() => String)
  status: string;

  @Field(() => BlogType)
  data: BlogType;
}
