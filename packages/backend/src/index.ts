import express, { Application, Request, Response } from 'express';
import { env } from './utils';
import { authorRouter, entryRouter } from './routers';
import { guvercin, mongodb } from './services';

const app: Application = express();
const port: number = parseInt(env.PORT as string) || 3000;

const main = async () => {
  try {
    await mongodb.connectToDb();
    guvercin.success('Connected to MongoDB.');
  } catch (error) {
    guvercin.error(`Couldn't connect to MongoDB. (${(error as Error).message})`);
    app.all('*', (req: Request, res: Response) => {
      return res.status(500).json({
        error: `Couldn't connect to MongoDB. (${(error as Error).message})`,
      });
    });
  }
  try {
    app.use(express.json());
    app.use('/entry', entryRouter);
    app.use('/author', authorRouter);
    app.listen(port, () => {
      guvercin.info(`Listening on ${port}`);
    });
  } catch (error) {
    guvercin.error(`Couldn't start the application. (${(error as Error).message})`);
    app.all('*', (req: Request, res: Response) => {
      return res.status(500).json({
        error: `Couldn't start the application. (${(error as Error).message})`,
      });
    });
  }
};

main();
