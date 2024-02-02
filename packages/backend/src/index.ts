import express, { Application, Request, Response } from 'express';
import { env } from './utils';
import { entryRouter } from './routers';
import { guvercin } from './services';

const app: Application = express();
const port: number = parseInt(env.PORT as string) || 3000;

const main = async () => {
  try {
    app.use(express.json());
    app.use('/entry', entryRouter);
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
