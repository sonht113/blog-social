import { Field, ObjectType } from '@nestjs/graphql';
import { UserType } from 'route/features/user/types/user.type';
import { Base } from 'utils/entities/base.entity';

@ObjectType()
export class CommentType extends Base<CommentType> {
  @Field(() => UserType)
  creator: string;

  @Field()
  content: string;

  @Field()
  blog: string;

  @Field(() => Number)
  like: number;
}
