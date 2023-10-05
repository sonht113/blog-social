import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { graphqlUploadExpress } from 'graphql-upload';
import helmet from 'helmet';

async function bootstrap() {
  const isDevelopment = process.env.NODE_ENV === 'development';
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      enableDebugMessages: isDevelopment,
      // whitelist: true,
      skipUndefinedProperties: true,
    }),
  );

  app.use((req: any, res: any, next: any) => {
    if (req.url.includes('/graphql')) {
      // only graphql request
      graphqlUploadExpress({
        maxFileSize: 100000000,
        maxFiles: 10,
      })(req, res, next);
    } else {
      next();
    }
  });

  app.enableCors({
    origin: true,
    credentials: true,
  });

  app.use(
    helmet({
      crossOriginEmbedderPolicy: !isDevelopment,
      contentSecurityPolicy: !isDevelopment,
    }),
  );

  await app.listen(process.env.PORT ? process.env.PORT : 3000, () =>
    console.log(
      `Server started on port = ${process.env.PORT ? process.env.PORT : 3000}`,
    ),
  );
}
bootstrap();
