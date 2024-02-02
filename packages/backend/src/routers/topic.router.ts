import { Router } from 'express';
import { TopicController } from '../controllers';
import { joi } from '../middlewares';

const topicRouter: Router = Router();
const topicController: TopicController = new TopicController();

topicRouter.get('/:id', joi.topic.get, topicController.get);
topicRouter.post('/', joi.topic.post, topicController.post);
topicRouter.put('/:id', joi.topic.put, topicController.put);
topicRouter.delete('/:id', joi.topic.delete, topicController.delete);

export { topicRouter };
