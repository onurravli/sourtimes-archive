import { Request, Response } from 'express';
import { mongodb } from '../services';
import { hashPassword } from '../utils';

class AuthorController {
  /**
   * Get an author by its ID.
   * @param req Request
   * @param res Response
   */
  public async get(req: Request, res: Response) {
    try {
      const { nick } = req.params;
      const author = await mongodb.collections.authors?.findOne({
        nick: nick,
      });
      if (author) {
        return res.status(200).json(author);
      }
      return res.status(404).json({
        error: 'Author not found.',
      });
    } catch (error) {
      return res.status(500).json({
        error: 'An error occurred while fetching author info.',
        detail: error,
      });
    }
  }
  /**
   * Create a new author.
   * @param req Request
   * @param res Response
   */
  public async post(req: Request, res: Response) {
    try {
      const { nick, mail, password }: { nick: string; mail: string; password: string } = req.body;
      const isNickInUse = await mongodb.collections.authors?.findOne({
        nick: nick,
      });
      if (isNickInUse) {
        return res.status(409).json({
          error: 'This nickname is in use, choose a different one.',
        });
      }
      const isMailInUse = await mongodb.collections.authors?.findOne({
        mail: mail,
      });
      if (isMailInUse) {
        return res.status(409).json({
          error: 'This mail address is in use, choose a different one.',
        });
      }
      const hashedPassword = await hashPassword(password);
      const inserted = await mongodb.collections.authors?.insertOne({
        nick: nick,
        mail: mail,
        password: hashedPassword,
        isVerified: false,
        entries: [],
        followers: [],
        followings: [],
        createdAt: Date.now(),
        updatedAt: Date.now(),
      });
      return res.status(201).json({
        message: 'Author created successfully.',
        detail: inserted,
      });
    } catch (error) {
      return res.status(201).json({
        message: 'An error occurred while inserting author.',
        detail: error,
      });
    }
  }
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
