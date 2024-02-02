import type { Request, Response } from 'express';

class EntryController {
  /**
   * Get an entry by its ID.
   * @param req Request
   * @param res Response
   */
  public async get(req: Request, res: Response) {}
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
