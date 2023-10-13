import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { Category } from './category.entity';
import { CategoryService } from './category.service';
import { CategoryResolver } from './category.resolver';

@Module({
  imports: [MikroOrmModule.forFeature([Category])],
  providers: [CategoryService, CategoryResolver],
  exports: [CategoryService],
})
export class CategoryModule {}
