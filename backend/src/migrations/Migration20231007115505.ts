import { Migration } from '@mikro-orm/migrations';

export class Migration20231007115505 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table "category" ("id" uuid not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "name" varchar(255) not null, "link" varchar(255) not null, constraint "category_pkey" primary key ("id"));',
    );
    this.addSql(
      'alter table "category" add constraint "category_name_unique" unique ("name");',
    );
    this.addSql(
      'alter table "category" add constraint "category_link_unique" unique ("link");',
    );
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "category" cascade;');
  }
}
