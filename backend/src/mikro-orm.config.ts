import { Options } from '@mikro-orm/core';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import * as path from 'path';

const config: Options = {
  type: 'postgresql',
  host: 'localhost',
  port: 5432,
  user: process.env.USER,
  password: process.env.PASSWORD,
  dbName: process.env.DB_NAME,
  preferReadReplicas: true,
  entities: ['dist/**/**/*.entity.js'],
  entitiesTs: ['src/**/**/*.entity.ts'],
  metadataProvider: TsMorphMetadataProvider,
  migrations: {
    path: path.join(__dirname, './migrations'),
    glob: '!(*.d).{js,ts}',
    emit: 'ts',
  },
};

export default config;
