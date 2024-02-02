import type { Request, Response } from 'express';
import { mongodb } from '../services';
import { ObjectId } from 'mongodb';

class EntryController {
  /**
   * Get an entry by its ID.
   * @param req Request
   * @param res Response
   */
  public async get(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const entry = await mongodb.collections.entries?.findOne({
        _id: new ObjectId(id),
      });
      if (entry) {
        return res.status(200).json(entry);
      }
      return res.status(404).json({
        error: 'Entry not found.',
      });
    } catch (error) {
      return res.status(500).json({
        error: 'Internal server error.',
        detail: error,
      });
    }
  }
  /**
   * Create a new entry.
   * @param req Request
   * @param res Response
   */
  public async post(req: Request, res: Response) {}
  /**
   * Update an existing entry.
   * @param req Request
   * @param res Response
   */
  public async put(req: Request, res: Response) {}
  /**
   * Delete an entry by its ID.
   * @param req Request
   * @param res Response
   */
  public async delete(req: Request, res: Response) {}
}

export { EntryController };
