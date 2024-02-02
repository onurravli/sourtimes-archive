class Entry {
  constructor(
    public content: string,
    public authorId: string,
    public createdAt: Date,
    public updatedAt: Date,
    public favorites: string[],
  ) {
    this.content = content;
    this.authorId = authorId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.favorites = favorites;
  }
}

export { Entry };
