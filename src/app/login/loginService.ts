import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {
  constructor() {
  }

  loginWithCreadentials(username: string, password: string): boolean {
    if (username === 'tangjianfei') {
      return true;
    } else {
      return false;
    }
  }
}

export class UserService {
  constructor() {
  }

  addUser(value: JSON) {
    return JSON.stringify(value);
  }
}
