import { Module } from '@nestjs/common';
import { FeatureModule } from './features/feature.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [FeatureModule, AuthModule],
})
export class RouteModule {}
