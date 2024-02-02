import { Entry } from './entry.model';

class Author {
  constructor(
    public id: string,
    public nick: string,
    public password: string,
    public mail: string,
    public isVerified: boolean,
    public entries: Entry[],
    public followers: Author[],
    public followings: Author[],
  ) {
    this.id = id;
    this.nick = nick;
    this.password = password;
    this.mail = mail;
    this.isVerified = isVerified;
    this.entries = entries;
    this.followers = followers;
    this.followings = followings;
  }
}

export { Author };
