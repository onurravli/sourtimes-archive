class Topic {
  constructor(
    public name: string,
    public entries: string[],
  ) {
    this.name = name;
    this.entries = entries;
  }
}

export { Topic };
