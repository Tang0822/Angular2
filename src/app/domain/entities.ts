export class Todo {
  id: string;
  desc: string;
  completed: boolean;
  userId: number;
}

export class User {
  id: number;
  username: string;
  password: string;
}

export class Auth {
  user: User;
  hasError: boolean;
  redirectUrl: string;
  errMsg: string;
}

export class Image {
  contentUrl: string;
  name: string;
}
