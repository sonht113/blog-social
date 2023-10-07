import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Blog } from './blog.entity';
import { EntityRepository } from '@mikro-orm/core';
import { CreateBlogType } from './types/create-blog.type';
import { ResponseMutation } from 'ts/types';
import { UpdateBlogType } from './types/update-blog';
import { wrap } from '@mikro-orm/core';

@Injectable()
export class BlogService {
  constructor(
    @InjectRepository(Blog) private blogRepository: EntityRepository<Blog>,
  ) {}

  async getBlogs(): Promise<Blog[]> {
    return this.blogRepository.findAll();
  }

  async getBlogById(id: string): Promise<Blog> {
    return this.blogRepository.findOneOrFail(id);
  }

  async createBlog(body: CreateBlogType): Promise<ResponseMutation<Blog>> {
    const blog = this.blogRepository.create({
      id: uuid(),
      ...body,
    });

    this.blogRepository.persistAndFlush(blog);
    return {
      status: 'success',
      data: blog,
    };
  }

  async updateBlog(
    id: string,
    body: UpdateBlogType,
  ): Promise<ResponseMutation<Blog>> {
    const blog = await this.blogRepository.findOne(id);

    if (!blog) {
      throw new Error('Blog not found!');
    }

    wrap(blog).assign(body, { mergeObjects: true });

    await this.blogRepository.flush();
    return {
      status: 'success',
      data: blog,
    };
  }

  async deleteBlog(id: string): Promise<ResponseMutation<Blog>> {
    const blog = await this.blogRepository.findOne(id);

    if (!blog) {
      throw new Error('Blog not found!');
    }

    this.blogRepository.removeAndFlush(blog);

    return {
      status: 'success',
      data: blog,
    };
  }
}
