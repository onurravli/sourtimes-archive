class Topic {
  constructor(
    public id: string, // kebab-case
    public entries: string[],
  ) {
    this.id = id;
    this.entries = entries;
  }
}

export { Topic };
