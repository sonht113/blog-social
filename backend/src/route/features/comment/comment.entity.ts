import { Entity, Property } from '@mikro-orm/core';
import { Base } from '../../../utils/entities/base.entity';

@Entity()
export class Comment extends Base<Comment> {
  @Property()
  creator!: string;

  @Property()
  content!: string;

  @Property()
  blog!: string;

  @Property()
  like!: number;
}
