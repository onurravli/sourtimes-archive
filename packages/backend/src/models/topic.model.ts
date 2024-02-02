import { Entry } from './entry.model';

class Topic {
  constructor(
    public id: string,
    public entries: Entry[],
  ) {
    this.id = id;
    this.entries = entries;
  }
}

export { Topic };
