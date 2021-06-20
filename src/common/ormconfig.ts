import dotenv from 'dotenv';
import path from 'path';
import { ConnectionOptions } from 'typeorm';

dotenv.config({
  path: path.join(__dirname, '../../.env'),
});

const {
  HOST,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
  POSTGRES_PORT,
} = process.env;

export const config = {
  type: 'postgres',
  name: 'default',
  host: HOST,
  port: POSTGRES_PORT,
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  synchronize: true,
  logging: false,
  entities: [`${__dirname}/../../src/entities/**/*.ts`],
  migrations: ['../../src/migration/**/*.ts'],
  subscribers: ['../../src/subscriber/**/*.ts'],
} as ConnectionOptions;
