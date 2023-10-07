import { InputType, OmitType, PartialType } from '@nestjs/graphql';
import { CreateBlogType } from './create-blog.type';

@InputType()
export class UpdateBlogType extends PartialType(
  OmitType(CreateBlogType, ['creator'] as const),
) {}
