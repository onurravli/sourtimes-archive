import express, { Application, Request, Response } from 'express';
import { env } from './utils';
import { entryRouter } from './routers';
import { guvercin, postgres } from './services';

const app: Application = express();
const port: number = parseInt(env.PORT as string) || 3000;

const main = async () => {
  try {
    await postgres.pool.connect();
    guvercin.success('Connected to the database.');
  } catch (error) {
    guvercin.error(`Couldn't connect to the database. (${(error as Error).message})`);
    app.all('*', (req: Request, res: Response) => {
      return res.status(500).json({
        error: `Couldn't connect to the database. (${(error as Error).message})`,
      });
    });
  }
  try {
    await postgres.createEntriesTable();
    guvercin.success('Created entries table.');
  } catch (error) {
    guvercin.error(`Couldn't create entries table. (${(error as Error).message})`);
    app.all('*', (req: Request, res: Response) => {
      return res.status(500).json({
        error: `Couldn't create entries table. (${(error as Error).message})`,
      });
    });
  }
  try {
    app.use(express.json());
    app.use('/entry', entryRouter);
    app.listen(port, () => {
      guvercin.info(`Listening on ${port}`);
    });
  } catch (error) {
    guvercin.error(`Couldn't connect to the database. (${(error as Error).message})`);
    app.all('*', (req: Request, res: Response) => {
      return res.status(500).json({
        error: `Couldn't connect to the database. (${(error as Error).message})`,
      });
    });
  }
};

main();
