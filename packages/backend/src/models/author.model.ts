import { Entry } from './entry.model';

class Author {
  constructor(
    public nick: string,
    public mail: string,
    public password: string,
    public isVerified: boolean,
    public entries: Entry[],
    public followers: Author[],
    public followings: Author[],
    public createdAt: Date,
    public updatedAt: Date,
  ) {
    this.createdAt = createdAt;
    this.entries = entries;
    this.followers = followers;
    this.followings = followings;
    this.isVerified = isVerified;
    this.mail = mail;
    this.nick = nick;
    this.password = password;
    this.updatedAt = updatedAt;
  }
}

export { Author };
