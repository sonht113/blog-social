import { Field, ObjectType } from '@nestjs/graphql';
import { Base } from 'utils/entities/base.entity';

@ObjectType()
export class CategoryType extends Base<CategoryType> {
  @Field(() => String)
  name: string;

  @Field(() => String)
  link: string;
}
