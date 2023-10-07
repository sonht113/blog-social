import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { Comment } from './comment.entity';
import { EntityRepository } from '@mikro-orm/core';
import { v4 as uuid } from 'uuid';
import { CreateCommentType } from './types/create-comment.type';
import { ResponseMutation } from 'ts/types';
import { UpdateCommentType } from './types/update-comment.type';
import { wrap } from '@mikro-orm/core';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private commentRepository: EntityRepository<Comment>,
  ) {}

  async getComments(idBlog: string): Promise<Comment[]> {
    return this.commentRepository.find({ blog: idBlog });
  }

  async createComment(
    body: CreateCommentType,
  ): Promise<ResponseMutation<Comment>> {
    const comment = this.commentRepository.create({
      id: uuid(),
      ...body,
    });

    await this.commentRepository.persistAndFlush(comment);
    return {
      status: 'success',
      data: comment,
    };
  }

  async updateComment(
    id: string,
    body: UpdateCommentType,
  ): Promise<ResponseMutation<Comment>> {
    const cmt = await this.commentRepository.findOne(id);

    if (!cmt) {
      throw new Error('Comment not found!');
    }

    wrap(cmt).assign(body, { mergeObjects: true });
    await this.commentRepository.flush();

    return {
      status: 'success',
      data: cmt,
    };
  }

  async deleteComment(id: string): Promise<ResponseMutation<Comment>> {
    const cmt = await this.commentRepository.findOne(id);

    if (!cmt) {
      throw new Error('Comment not found!');
    }

    await this.commentRepository.removeAndFlush(cmt);

    return {
      status: 'success',
      data: cmt,
    };
  }
}
