import { Collection, Db, MongoClient } from 'mongodb';
import { env } from '../utils';
import { guvercin } from './guvercin.service';

const collections: {
  authors?: Collection;
  entries?: Collection;
  topics?: Collection;
} = {};

const connectToDb = async () => {
  const mongoClient: MongoClient = new MongoClient(env.MONGODB_CONNECTION_STRING as string);
  const db: Db = mongoClient.db(env.MONGODB_DATABASE_NAME as string);
  const authorsCollection: Collection = db.collection(env.MONGODB_AUTHORS_COLLECTION as string);
  const entriesCollection: Collection = db.collection(env.MONGODB_ENTRIES_COLLECTION as string);
  const topicsCollection: Collection = db.collection(env.MONGODB_TOPICS_COLLECTION as string);
  collections.authors = authorsCollection;
  collections.entries = entriesCollection;
  collections.topics = topicsCollection;
  guvercin.success('Connected to MongoDB.');
};

const mongodb = { collections, connectToDb };

export { mongodb };
