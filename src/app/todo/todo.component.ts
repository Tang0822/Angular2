import {Component, OnInit} from '@angular/core'
import {Todo} from './todo.model';
import {TodoService} from './todoServices';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
})

export class TodoComponent implements OnInit {

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.getTodos();
  }

  desc = '';
  todos : Todo[];

  onTextChanges(value) {
    this.desc = value;
  }

  addTodo() {
    this.todoService
      .PreAddTodo(this.desc)
      .then(todo => {
        this.todos = [...this.todos, todo];
        this.desc = '';
      })
  }

  toggleTodo(todo: Todo) {
    const i = this.todos.indexOf(todo);
    this.todoService
      .PreToggleTodo(todo)
      .then(t => {
        this.todos = [...this.todos.slice(0, i), t, ...this.todos.slice(i + 1)];
      });
  }

  removeTodo(todo: Todo) {
    const i = this.todos.indexOf(todo);
    this.todoService
      .PreDeleteTodoById(todo.id)
      .then(() => {
        this.todos = [...this.todos.slice(0, i), ...this.todos.slice(i + 1)];
      });
  }

  getTodos(): void {
    this.todoService
      .PreGetTodos()
      .then(todos => this.todos = [...todos]);
  }

}



//课程代码
/*import { Component, OnInit } from '@angular/core';
import { TodoService } from './todoServices';
import { Todo } from './todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {
  todos : Todo[];
  desc = '';

  constructor(private service: TodoService) {}
  ngOnInit() {
    this.getTodos();
  }
  addTodo(){
    this.service
      .addTodo(this.desc)
      .then(todo => {
        this.todos = [...this.todos, todo];
        this.desc = '';
      });
  }
  toggleTodo(todo: Todo) {
    const i = this.todos.indexOf(todo);
    this.service
      .toggleTodo(todo)
      .then(t => {
        this.todos = [
          ...this.todos.slice(0,i),
          t,
          ...this.todos.slice(i+1)
        ];
      });
  }
  removeTodo(todo: Todo) {
    const i = this.todos.indexOf(todo);
    this.service
      .deleteTodoById(todo.id)
      .then(()=> {
        this.todos = [
          ...this.todos.slice(0,i),
          ...this.todos.slice(i+1)
        ];
      });
  }
  getTodos(): void {
    this.service
      .getTodos()
      .then(todos => this.todos = [...todos]);
  }
}*/
