import { Router } from 'express';
import { EntryController } from '../controllers';

const entryRouter: Router = Router();
const entryController: EntryController = new EntryController();

entryRouter.get('/:id', entryController.get);
entryRouter.post('/', entryController.post);
entryRouter.put('/:id', entryController.put);
entryRouter.delete('/:id', entryController.delete);

export { entryRouter };
