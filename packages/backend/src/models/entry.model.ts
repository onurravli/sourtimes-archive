import { Author } from './author.model';

class Entry {
  constructor(
    public content: string,
    public author: Author,
    public createdAt: Date,
    public updatedAt: Date,
    public favorites: Author[],
  ) {
    this.content = content;
    this.author = author;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.favorites = favorites;
  }
}

export { Entry };
