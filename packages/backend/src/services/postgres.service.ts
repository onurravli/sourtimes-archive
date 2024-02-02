import { Pool } from 'pg';
import { env } from '../utils';

const pool = new Pool({
  user: env.PG_USER,
  host: env.PG_HOST,
  database: env.PG_DATABASE,
  password: env.PG_PASSWORD,
  port: parseInt(env.PG_PORT as string),
});

const createEntriesTable = async () => {
  const query = `CREATE TABLE IF NOT EXISTS entries (
    id VARCHAR(25) PRIMARY KEY NOT NULL,
    content TEXT NOT NULL,
    author_id VARCHAR(25) NOT NULL,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    favorites TEXT[] NOT NULL
  )`;
  await pool.query(query);
};

const postgres = {
  pool,
  createEntriesTable,
};

export { postgres };
