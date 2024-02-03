import { Router } from 'express';
import { AuthorController } from '../controllers';
import { joi } from '../middlewares';

const authorRouter: Router = Router();
const authorController: AuthorController = new AuthorController();

authorRouter.get('/:nick', joi.author.get, authorController.get);
authorRouter.post('/', joi.author.post, authorController.post);
authorRouter.put('/:nick', joi.author.put, authorController.put);
authorRouter.delete('/:nick', joi.author.delete, authorController.delete);

export { authorRouter };
