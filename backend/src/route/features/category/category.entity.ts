import { Entity, Property, Unique } from '@mikro-orm/core';
import { Base } from '../../../utils/entities/base.entity';

@Entity()
export class Category extends Base<Category> {
  @Property()
  @Unique()
  name!: string;

  @Property()
  @Unique()
  link!: string;
}
