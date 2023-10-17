import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Blog } from './blog.entity';
import { EntityRepository } from '@mikro-orm/core';
import { CreateBlogType } from './types/create-blog.type';
import { Pagination, QueryOptions, ResponseMutation } from 'ts/types';
import { UpdateBlogType } from './types/update-blog';
import { wrap } from '@mikro-orm/core';
import { checkValueEmpty } from 'utils/common';

@Injectable()
export class BlogService {
  constructor(
    @InjectRepository(Blog) private blogRepository: EntityRepository<Blog>,
  ) {}

  async getBlogs(
    query: QueryOptions<Pick<Blog, 'category' | 'creator'>>,
  ): Promise<Pagination<Blog>> {
    const { category, creator, page, limit } = query;
    const q = { category, creator };
    const take = limit || 10;
    const p = page || 1;
    const skip = p === 1 ? 0 : p * take;
    if (category === 0) {
      delete q['category'];
    }
    if (checkValueEmpty(creator)) {
      delete q['creator'];
    }

    const [result, total] = await this.blogRepository.findAndCount(q, {
      offset: skip,
      limit: take,
    });

    return {
      page: page,
      limit: limit,
      totalPage: total,
      data: result,
    };
  }

  async getPopularBlogs(query: { category?: number }): Promise<Blog[]> {
    const blogs = await this.blogRepository.find(query);

    const popularBlog = blogs
      .filter((blog) => blog.like.length > 3)
      .sort((a, b) => b.like.length - a.like.length)
      .slice(0, 5);

    return popularBlog;
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

  async likeBlog(id: string, idUser: string): Promise<ResponseMutation<Blog>> {
    const blog = await this.blogRepository.findOne(id);

    if (!blog) throw new Error('Blog not found');

    const index = blog.like.findIndex((item) => item === idUser);

    const isLiked = index > -1;

    if (isLiked) {
      blog.like.splice(index, 1);
    } else {
      blog.like.push(idUser);
    }

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
