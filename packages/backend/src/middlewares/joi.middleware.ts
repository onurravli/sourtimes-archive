import Joi from 'joi';
import type { Request, Response, NextFunction } from 'express';

const schemas = {
  entry: {
    get: Joi.object(),
    post: Joi.object(),
    put: Joi.object(),
    delete: Joi.object(),
  },
};

const joi = {
  entry: {
    get: (req: Request, res: Response, next: NextFunction) => {
      const { error } = schemas.entry.get.validate(req.params);
      if (error) {
        return res.status(400).json({
          error: error.message,
        });
      }
      return next();
    },
    post: (req: Request, res: Response, next: NextFunction) => {
      const { error } = schemas.entry.post.validate(req.body);
      if (error) {
        return res.status(400).json({
          error: error.message,
        });
      }
      return next();
    },
    put: (req: Request, res: Response, next: NextFunction) => {
      const error = {
        params: schemas.entry.put.validate(req.params),
        body: schemas.entry.put.validate(req.body),
      };
      if (error.params || error.body) {
        return res.status(400).json({
          error: error,
        });
      }
      return next();
    },
    delete: (req: Request, res: Response, next: NextFunction) => {
      const { error } = schemas.entry.delete.validate(req.params);
      if (error) {
        return res.status(400).json({
          error: error.message,
        });
      }
      return next();
    },
  },
};

export { joi };
