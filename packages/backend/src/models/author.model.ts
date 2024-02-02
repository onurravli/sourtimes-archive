class Author {
  constructor(
    public nick: string,
    public password: string,
    public mail: string,
    public isVerified: boolean,
    public entries: string[],
    public followers: string[],
    public followings: string[],
    public createdAt: Date,
    public updatedAt: Date,
  ) {
    this.nick = nick;
    this.password = password;
    this.mail = mail;
    this.isVerified = isVerified;
    this.entries = entries;
    this.followers = followers;
    this.followings = followings;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

export { Author };
