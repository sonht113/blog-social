import { Field, ObjectType } from '@nestjs/graphql';
import { UserType } from '../../user/types/user.type';
import { Base } from 'utils/entities/base.entity';

@ObjectType()
export class BlogType extends Base<BlogType> {
  @Field()
  title: string;

  @Field()
  shortDesc: string;

  @Field()
  content: string;

  @Field()
  thumbnail: string;

  @Field(() => UserType)
  creator: string;

  @Field(() => Number)
  like: number;
}
