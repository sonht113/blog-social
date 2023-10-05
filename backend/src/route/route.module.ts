import { Module } from '@nestjs/common';
import { FeatureModule } from './features/feature.module';

@Module({
  imports: [FeatureModule],
})
export class RouteModule {}
