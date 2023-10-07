import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [UserModule, CategoryModule],
})
export class FeatureModule {}
