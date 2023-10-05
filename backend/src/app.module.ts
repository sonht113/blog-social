import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { join } from 'path';
import { RouteModule } from './route/route.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development', '.env'],
      isGlobal: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      playground: true,
      autoSchemaFile: './src/@generated/schema.graphql',
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
    }),
    MikroOrmModule.forRoot(),
    RouteModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
