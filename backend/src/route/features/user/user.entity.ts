import { Entity, Property, Unique } from '@mikro-orm/core';
import { Base } from '../../../utils/entities/base.entity';

@Entity()
export class User extends Base<User> {
  @Property()
  fullname!: string;

  @Property()
  @Unique()
  username!: string;

  @Property()
  role!: number;

  @Property()
  dayOfBirth!: string;

  @Property()
  @Unique()
  email!: string;

  @Property()
  avatar!: string;

  @Property()
  @Unique()
  phoneNumber!: string;

  @Property()
  desc!: string;

  @Property()
  address!: string;
}
