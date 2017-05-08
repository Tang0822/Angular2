import {Injectable} from '@angular/core';
import {UUID} from 'angular2-uuid';
import {Todo} from '../domain/entities';
import {Http, Headers} from '@angular/http'
import 'rxjs/add/operator/toPromise'

@Injectable()
export class TodoService {

  private API_URL = 'http://localhost:3000/todos';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {

  }

  PreAddTodo(desc: string): Promise<Todo> {
    const userId: number = +localStorage.getItem('userId');
    let todo = {
      id: UUID.UUID(),
      desc: desc,
      completed: false,
      userId: userId
    };

    return this.http
      .post(this.API_URL, JSON.stringify(todo), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Todo)
      .catch(this.handleError)
  }

  PreToggleTodo(todo: Todo): Promise<Todo> {
    const url = `${this.API_URL}/${todo.id}`;
    console.log(url);
    let updateTodo = Object.assign({}, todo, {completed: !todo.completed});
    return this.http
      .put(url, JSON.stringify({completed: !todo.completed}), {headers: this.headers})
      .toPromise()
      .then(() => updateTodo)
      .catch(this.handleError)
  }

  PreDeleteTodoById(id: string): Promise<void> {
    const url = `${this.API_URL}/${id}`;
    console.log(url);

    return this.http
      .delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError)
  }

  PreGetTodos(): Promise<Todo[]> {
    const userId = +localStorage.getItem('userId');
    const url = `${this.API_URL}?userId=${userId}`
    return this.http.get(url)
      .toPromise()
      .then(res => res.json() as Todo[])
      .catch(this.handleError)
  }

  PreFilterTodos(filter: string): Promise<Todo[]> {
    const userId = +localStorage.getItem('userId');
    const url = `${this.API_URL}?userId=${userId}`
    switch (filter) {
      case 'ACTIVE': return this.http
        .get(`${url}$completed=false`)
        .toPromise()
        .then(res => res.json() as Todo[])
        .catch(this.handleError);
      case 'COMPLETED': return this.http
        .get(`${url}&completed=true`)
        .toPromise()
        .then(res => res.json() as Todo[])
        .catch(this.handleError);
      default:
        return this.PreGetTodos();
    }
  }

  private handleError(error: any): Promise<any> {
    console.error('An error ooccurred', error);
    return Promise.reject(error.message || error)
  }

}
