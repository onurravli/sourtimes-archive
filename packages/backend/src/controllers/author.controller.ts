import { Request, Response } from 'express';

class AuthorController {
  /**
   * Get an author by its ID.
   * @param req Request
   * @param res Response
   */
  public async get(req: Request, res: Response) {}
  /**
   * Create a new author.
   * @param req Request
   * @param res Response
   */
  public async post(req: Request, res: Response) {}
  /**
   * Update an existing author.
   * @param req Request
   * @param res Response
   */
  public async put(req: Request, res: Response) {}
  /**
   * Delete an author by its ID.
   * @param req Request
   * @param res Response
   */
  public async delete(req: Request, res: Response) {}
}

export { AuthorController };
