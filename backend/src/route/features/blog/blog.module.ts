import { Module } from '@nestjs/common';
import { BlogService } from './blog.service';
import { BlogResolver } from './blog.resolver';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Blog } from './blog.entity';
import { UserModule } from '../user/user.module';
import { CategoryModule } from '../category/category.module';

@Module({
  imports: [MikroOrmModule.forFeature([Blog]), UserModule, CategoryModule],
  providers: [BlogService, BlogResolver],
  exports: [BlogService],
})
export class BlogModule {}
