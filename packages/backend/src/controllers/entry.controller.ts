import type { Request, Response } from 'express';
import { postgres } from '../services';
import { generateId } from '../utils';

class EntryController {
  public async get(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const queryStream = 'SELECT * FROM entries WHERE id=$1';
      const values = [id];
      const resp = await postgres.pool.query(queryStream, values);
      if (resp.rowCount == 0) {
        return res.status(404).json({
          error: 'Entry not found.',
        });
      }
      return res.status(200).json({
        ...resp.rows[0],
      });
    } catch (error) {
      return res.status(500).json({
        error: `Internal server error.`,
        detail: error,
      });
    }
  }
  public async post(req: Request, res: Response) {
    try {
      const entry: { content: string; topic: string; author: string } = req.body;
      const id = generateId();
      const queryStream = `
      INSERT INTO 
      entries (id, content, topic, author, created_at, updated_at, favorites) 
      VALUES ($1, $2, $3, $4, $5, $6, $7)`;
      const values = [
        id,
        entry.content,
        entry.topic,
        entry.author,
        new Date(Date.now()).toISOString(),
        new Date(Date.now()).toISOString(),
        [],
      ];
      const inserted = await postgres.pool.query(queryStream, values);
      return res.status(201).json({
        message: 'Entry inserted successfully.',
        detail: inserted,
      });
    } catch (error) {
      return res.status(500).json({
        error: `Internal server error while inserting entry.`,
        detail: (error as Error).message,
      });
    }
  }
  public async put(req: Request, res: Response) {}
  public async delete(req: Request, res: Response) {}
}

export { EntryController };
