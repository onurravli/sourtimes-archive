import { Request, Response } from 'express';

class TopicController {
  /**
   * Get a topic by its ID.
   * @param req Request
   * @param res Response
   */
  public async get(req: Request, res: Response) {}
  /**
   * Create a new topic.
   * @param req Request
   * @param res Response
   */
  public async post(req: Request, res: Response) {}
  /**
   * Update an existing topic.
   * @param req Request
   * @param res Response
   */
  public async put(req: Request, res: Response) {}
  /**
   * Delete a topic by its ID.
   * @param req Request
   * @param res Response
   */
  public async delete(req: Request, res: Response) {}
}

export { TopicController };
