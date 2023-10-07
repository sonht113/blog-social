import { Module } from '@nestjs/common';
import { FeatureModule } from './features/feature.module';
import { AuthModule } from './auth/auth.module';
import { UploadModule } from './common/upload/upload.module';

@Module({
  imports: [FeatureModule, AuthModule, UploadModule],
})
export class RouteModule {}
