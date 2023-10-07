import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsUUID } from 'class-validator';
import { Base } from 'utils/entities/base.entity';

@InputType()
export class CreateBlogType extends Base<CreateBlogType> {
  @IsNotEmpty()
  @Field()
  title: string;

  @IsOptional()
  @Field({ nullable: true, defaultValue: '' })
  shortDesc?: string;

  @IsNotEmpty()
  @Field()
  content: string;

  @IsNotEmpty()
  @Field()
  thumbnail: string;

  @IsNotEmpty()
  @IsUUID(4)
  @Field()
  creator: string;

  @IsOptional()
  @Field({ defaultValue: 0, nullable: true })
  like: number;
}
