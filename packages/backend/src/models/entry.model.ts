import { Author } from './author.model';

class Entry {
  constructor(
    public id: string,
    public topic: string,
    public content: string,
    public author: Author,
    public favorites: Author[],
    public createdAt: Date,
    public updatedAt: Date,
  ) {
    this.id = id;
    this.author = author;
    this.content = content;
    this.createdAt = createdAt;
    this.favorites = favorites;
    this.topic = topic;
    this.updatedAt = updatedAt;
  }
}

export { Entry };
