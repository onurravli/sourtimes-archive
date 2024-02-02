class Entry {
  constructor(
    public content: string,
    public author: string,
    public topic: string,
    public createdAt: Date,
    public updatedAt: Date,
    public favorites: string[],
  ) {
    this.content = content;
    this.author = author;
    this.topic = topic;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.favorites = favorites;
  }
}

export { Entry };
