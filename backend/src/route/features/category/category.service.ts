import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { Category } from './category.entity';
import { EntityRepository } from '@mikro-orm/core';
import { v4 as uuid } from 'uuid';
import { ResponseMutation } from 'ts/types';
import { CreateCategoryType } from './types/create-category.type';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: EntityRepository<Category>,
  ) {}

  async getCategories(): Promise<Category[]> {
    return this.categoryRepository.findAll();
  }

  async createCategory(
    body: CreateCategoryType,
  ): Promise<ResponseMutation<Category>> {
    const category = await this.categoryRepository.findOne({ name: body.name });

    if (category) {
      throw new Error('Category already exists!');
    }

    const result = this.categoryRepository.create({
      id: uuid(),
      ...body,
    });

    this.categoryRepository.persistAndFlush(result);
    return {
      status: 'success',
      data: result,
    };
  }

  async deleteCategory(id: string): Promise<ResponseMutation<Category>> {
    const cate = await this.categoryRepository.findOne(id);

    if (!cate) {
      throw new Error('Category not found!');
    }

    await this.categoryRepository.removeAndFlush(cate);

    return {
      status: 'success',
      data: cate,
    };
  }
}
