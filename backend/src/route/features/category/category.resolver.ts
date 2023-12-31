import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CategoryService } from './category.service';
import { CategoryType } from './types/category.type';
import { CreateCategoryType } from './types/create-category.type';
import { ResponseMutationType } from './types/common.type';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'route/auth/jwt-auth.guard';

@Resolver()
export class CategoryResolver {
  constructor(private categoryService: CategoryService) {}

  @Query(() => [CategoryType])
  getCategories() {
    return this.categoryService.getCategories();
  }

  @Mutation(() => ResponseMutationType)
  @UseGuards(JwtAuthGuard)
  createCategory(@Args('body') body: CreateCategoryType) {
    return this.categoryService.createCategory(body);
  }

  @Mutation(() => ResponseMutationType)
  @UseGuards(JwtAuthGuard)
  deleteCategory(@Args('id') id: string) {
    return this.categoryService.deleteCategory(id);
  }
}
