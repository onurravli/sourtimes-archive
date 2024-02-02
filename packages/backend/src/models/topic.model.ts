class Topic {
  constructor(
    public id: string,
    public entries: string[],
  ) {
    this.id = id;
    this.entries = entries;
  }
}

export { Topic };
