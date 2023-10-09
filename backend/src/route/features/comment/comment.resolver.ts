import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { CommentService } from './comment.service';
import { CommentType } from './types/comment.type';
import { ResponseMutationCommentType } from './types/common.type';
import { CreateCommentType } from './types/create-comment.type';
import { UpdateCommentType } from './types/update-comment.type';
import { Comment } from './comment.entity';
import { UserService } from '../user/user.service';

@Resolver(() => CommentType)
export class CommentResolver {
  constructor(
    private commentService: CommentService,
    private userService: UserService,
  ) {}

  @Query(() => [CommentType])
  getComments(@Args('idBlog') idBlog: string) {
    return this.commentService.getComments(idBlog);
  }

  @Mutation(() => ResponseMutationCommentType)
  createComment(@Args('body') body: CreateCommentType) {
    return this.commentService.createComment(body);
  }

  @Mutation(() => ResponseMutationCommentType)
  updateComment(@Args('id') id: string, @Args('body') body: UpdateCommentType) {
    return this.commentService.updateComment(id, body);
  }

  @Mutation(() => ResponseMutationCommentType)
  deleteComment(@Args('id') id: string) {
    return this.commentService.deleteComment(id);
  }

  @ResolveField()
  async creator(@Parent() comment: Comment) {
    return this.userService.getUserById(comment.creator);
  }
}