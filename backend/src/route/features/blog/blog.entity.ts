import { Entity, Property } from '@mikro-orm/core';
import { Base } from '../../../utils/entities/base.entity';

@Entity()
export class Blog extends Base<Blog> {
  @Property()
  title!: string;

  @Property()
  shortDesc!: string;

  @Property()
  content!: string;

  @Property()
  thumbnail: string;

  @Property()
  creator!: string;

  @Property()
  like!: number;
}
