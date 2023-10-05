import { Migration } from '@mikro-orm/migrations';

export class Migration20231005160922 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'alter table "user" add column "username" varchar(255) not null;',
    );
    this.addSql('alter table "user" drop constraint "user_name_unique";');
    this.addSql('alter table "user" rename column "name" to "fullname";');
    this.addSql(
      'alter table "user" add constraint "user_username_unique" unique ("username");',
    );
  }

  async down(): Promise<void> {
    this.addSql('alter table "user" add column "name" varchar(255) not null;');
    this.addSql('alter table "user" drop constraint "user_username_unique";');
    this.addSql('alter table "user" drop column "fullname";');
    this.addSql('alter table "user" drop column "username";');
    this.addSql(
      'alter table "user" add constraint "user_name_unique" unique ("name");',
    );
  }
}
