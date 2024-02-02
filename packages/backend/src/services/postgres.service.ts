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
    id UUID PRIMARY KEY NOT NULL,
    content TEXT NOT NULL,
    topic TEXT NOT NULL,
    author TEXT NOT NULL,
    created_at DATE NOT NULL,
    updated_at DATE NOT NULL,
    favorites TEXT[]
  )`;
  await pool.query(query);
};

const createAuthorsTable = async () => {
  const query = `CREATE TABLE IF NOT EXISTS authors (
    nick TEXT PRIMARY KEY NOT NULL,
    password TEXT NOT NULL,
    mail TEXT NOT NULL,
    is_verified BOOL NOT NULL,
    entries UUID[],
    followers TEXT[],
    followings TEXT[],
    created_at DATE NOT NULL,
    updated_at DATE NOT NULL
  )`;
  await pool.query(query);
};

const createTopicsTable = async () => {
  const query = `CREATE TABLE IF NOT EXISTS topics (
    id TEXT PRIMARY KEY,
    entries UUID[]
  )`;
  await pool.query(query);
};

const postgres = {
  pool,
  createEntriesTable,
  createAuthorsTable,
  createTopicsTable,
};

export { postgres };
