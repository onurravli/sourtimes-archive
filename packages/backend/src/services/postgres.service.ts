import { Pool } from 'pg';
import { env } from '../utils';

const pool = new Pool({
  user: env.PG_USER,
  host: env.PG_HOST,
  database: env.PG_DATABASE,
  password: env.PG_PASSWORD,
  port: parseInt(env.PG_PORT as string),
});

const postgres = {
  pool,
};

export { postgres };
