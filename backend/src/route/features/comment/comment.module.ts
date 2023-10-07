import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { Comment } from './comment.entity';
import { UserModule } from '../user/user.module';
import { CommentService } from './comment.service';
import { CommentResolver } from './comment.resolver';

@Module({
  imports: [MikroOrmModule.forFeature([Comment]), UserModule],
  providers: [CommentService, CommentResolver],
})
export class CommentModule {}
