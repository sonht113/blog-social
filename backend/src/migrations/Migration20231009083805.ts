import { Migration } from '@mikro-orm/migrations';

export class Migration20231009083805 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table "user" ("id" uuid not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "fullname" varchar(255) not null, "username" varchar(255) not null, "password" varchar(255) not null, "role" int not null, "day_of_birth" varchar(255) not null, "email" varchar(255) not null, "avatar" varchar(255) not null, "phone_number" varchar(255) not null, "desc" varchar(255) not null, "address" varchar(255) not null, constraint "user_pkey" primary key ("id"));',
    );
    this.addSql(
      'alter table "user" add constraint "user_username_unique" unique ("username");',
    );
    this.addSql(
      'alter table "user" add constraint "user_email_unique" unique ("email");',
    );
    this.addSql(
      'alter table "user" add constraint "user_phone_number_unique" unique ("phone_number");',
    );
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "user" cascade;');
  }
}
