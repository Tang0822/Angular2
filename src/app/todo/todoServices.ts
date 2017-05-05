import {Injectable} from '@angular/core';
import {UUID} from 'angular2-uuid';
import {Todo} from './todo.model';
import {Http, Headers} from '@angular/http'
import 'rxjs/add/operator/toPromise'

@Injectable()
export class TodoService {

  private API_URL = 'api/todos';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {

  }

  PreAddTodo(desc: string): Promise<Todo> {

    let todo = {
      id: UUID.UUID(),
      desc: desc,
      completed: false
    };

    return this.http
      .post(this.API_URL, JSON.stringify(todo), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Todo)
      .catch(this.handleError)
  }

  PreToggleTodo(todo: Todo): Promise<Todo> {

    const url = `${this.API_URL}/${todo.id}`;
    console.log(url);
    let updateTodo = Object.assign({}, todo, {completed: !todo.completed});

    return this.http
      .put(url, JSON.stringify(updateTodo), {headers: this.headers})
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

    return this.http.get(this.API_URL)
      .toPromise()
      .then(res => res.json().data as Todo[])
      .catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    console.error('An error ooccurred', error);
    return Promise.reject(error.message || error)
  }

}

//课程代码
/*
 import { Injectable } from '@angular/core';
 import { Http, Headers } from '@angular/http';
 import { UUID } from 'angular2-uuid';

 import 'rxjs/add/operator/toPromise';

 import { Todo } from './todo.model';

 @Injectable()
 export class TodoService {

 private api_url = 'api/todos';
 private headers = new Headers({'Content-Type': 'application/json'});
 constructor(private http: Http) { }
 // POST /todos
 addTodo(desc:string): Promise<Todo> {
 let todo = {
 id: UUID.UUID(),
 desc: desc,
 completed: false
 };
 return this.http
 .post(this.api_url, JSON.stringify(todo), {headers: this.headers})
 .toPromise()
 .then(res => res.json().data as Todo)
 .catch(this.handleError);
 }
 // PUT /todos/:id
 toggleTodo(todo: Todo): Promise<Todo> {
 const url = `${this.api_url}/${todo.id}`;
 console.log(url);
 let updatedTodo = Object.assign({}, todo, {completed: !todo.completed});
 return this.http
 .put(url, JSON.stringify(updatedTodo), {headers: this.headers})
 .toPromise()
 .then(() => updatedTodo)
 .catch(this.handleError);
 }
 // DELETE /todos/:id
 deleteTodoById(id: string): Promise<void> {
 const url = `${this.api_url}/${id}`;
 return this.http
 .delete(url, {headers: this.headers})
 .toPromise()
 .then(() => null)
 .catch(this.handleError);
 }
 // GET /todos
 getTodos(): Promise<Todo[]>{
 return this.http.get(this.api_url)
 .toPromise()
 .then(res => res.json().data as Todo[])
 .catch(this.handleError);
 }
 private handleError(error: any): Promise<any> {
 console.error('An error occurred', error);
 return Promise.reject(error.message || error);
 }
 }
 */
