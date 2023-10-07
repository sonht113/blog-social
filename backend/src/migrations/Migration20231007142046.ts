import { Migration } from '@mikro-orm/migrations';

export class Migration20231007142046 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table "blog" ("id" uuid not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "title" varchar(255) not null, "short_desc" varchar(255) not null, "content" varchar(255) not null, "thumbnail" varchar(255) not null, "creator" varchar(255) not null, "like" int not null, constraint "blog_pkey" primary key ("id"));',
    );

    this.addSql(
      'create table "comment" ("id" uuid not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "creator" varchar(255) not null, "content" varchar(255) not null, "blog" varchar(255) not null, "like" varchar(255) not null, constraint "comment_pkey" primary key ("id"));',
    );
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "blog" cascade;');

    this.addSql('drop table if exists "comment" cascade;');
  }
}
