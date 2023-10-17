import { Migration } from '@mikro-orm/migrations';

export class Migration20231017135310 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "blog" ("id" uuid not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "title" varchar(255) not null, "category" int not null, "short_desc" varchar(255) not null, "content" varchar(255) not null, "thumbnail" varchar(255) not null, "creator" varchar(255) not null, "like" text[] not null, "is_liked" boolean not null, constraint "blog_pkey" primary key ("id"));');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "blog" cascade;');
  }

}
