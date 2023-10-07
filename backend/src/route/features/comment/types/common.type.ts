import { Field, ObjectType } from '@nestjs/graphql';
import { CommentType } from './comment.type';

@ObjectType()
export class ResponseMutationCommentType {
  @Field(() => String)
  status: string;

  @Field(() => CommentType)
  data: CommentType;
}
