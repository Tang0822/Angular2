import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {User} from '../domain/entities';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {

  private API_URL = 'http://localhost:3000/users';

  constructor(private http: Http) {
  }

  getUser(userId: number): Observable<User> {
    const url = `${this.API_URL}/${userId}`;
    return this.http.get(url)
      .map(res => res.json() as User);
  }

  findUser(username: string): Observable<User> {
    const url = `${this.API_URL}/?username=${username}`;
    return this.http.get(url)
      .map(res => {
        let users = res.json() as User[];
        return (users.length > 0) ? users[0] : null;
      });
  }
}
