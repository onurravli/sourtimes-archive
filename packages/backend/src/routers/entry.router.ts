import { Router } from 'express';
import { EntryController } from '../controllers';
import { joi } from '../middlewares';

const entryRouter: Router = Router();
const entryController: EntryController = new EntryController();

entryRouter.get('/:id', joi.entry.get, entryController.get);
entryRouter.post('/', joi.entry.post, entryController.post);
entryRouter.put('/:id', joi.entry.put, entryController.put);
entryRouter.delete('/:id', joi.entry.delete, entryController.delete);

export { entryRouter };
