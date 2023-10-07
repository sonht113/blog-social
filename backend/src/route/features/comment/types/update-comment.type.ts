import { InputType, OmitType, PartialType } from '@nestjs/graphql';
import { CreateCommentType } from './create-comment.type';

@InputType()
export class UpdateCommentType extends PartialType(
  OmitType(CreateCommentType, ['creator', 'blog'] as const),
) {}
