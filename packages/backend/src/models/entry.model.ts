import { Author } from './author.model';

class Entry {
  constructor(
    public content: string,
    public author: Author,
    public date: Date,
    public favorites: Author[],
  ) {
    this.content = content;
    this.author = author;
    this.date = date;
    this.favorites = favorites;
  }
}

export { Entry };
