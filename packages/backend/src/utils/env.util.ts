import dotenv from 'dotenv';

const NODE_ENV = process.env.NODE_ENV || 'development';

dotenv.config({
  path: NODE_ENV == 'production' ? '.env.production' : '.env.development',
});

const env = process.env;

export { env };
