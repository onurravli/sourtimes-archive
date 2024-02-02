import { Router } from 'express';
import { AuthorController } from '../controllers';
import { joi } from '../middlewares';

const authorRouter: Router = Router();
const authorController: AuthorController = new AuthorController();

authorRouter.get('/:id', joi.author.get, authorController.get);
authorRouter.post('/', joi.author.post, authorController.post);
authorRouter.put('/:id', joi.author.put, authorController.put);
authorRouter.delete('/:id', joi.author.delete, authorController.delete);

export { authorRouter };
