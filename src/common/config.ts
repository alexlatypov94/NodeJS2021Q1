import dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({
  path: path.join(__dirname, '../../.env'),
});

export const {
  PORT,
  NODE_ENV,
  AUTH_MODE,
  JWT_SECRET_KEY,
  POSTGRES_PORT,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
  MONGO_CONNECTION_STRING,
} = process.env;
