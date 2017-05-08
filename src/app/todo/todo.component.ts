import {Component, Inject, OnInit} from '@angular/core'
import {Todo} from '../domain/entities';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})

export class TodoComponent implements OnInit {

  desc = '';
  todos: Todo[] = [];

  constructor(@Inject('todoService') private todoService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let filter = params['filter'];
      this.filterTodos(filter);
    })
  }

  filterTodos(filter: string): void {
    this.todoService
      .PreFilterTodos(filter)
      .then(todos => this.todos = [...todos]);
  }

  // ---------------------------app-todo-header子组件------------------------------
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

  // ---------------------------app-todo-list子组件--------------------------------
  removeTodo(todo: Todo): Promise<void> {
    const i = this.todos.indexOf(todo);
    return this.todoService
      .PreDeleteTodoById(todo.id)
      .then(() => {
        this.todos = [...this.todos.slice(0, i), ...this.todos.slice(i + 1)];
        return null;
      });
  }

  toggleTodo(todo: Todo): Promise<void> {
    const i = this.todos.indexOf(todo);
    return this.todoService
      .PreToggleTodo(todo)
      .then(t => {
        this.todos = [...this.todos.slice(0, i), t, ...this.todos.slice(i + 1)];
        return null;
      });
  }

  toggleAll() {
    Promise.all(this.todos.map(todo => this.toggleTodo(todo)));
  }

  // ---------------------------app-todo-footer子组件------------------------------
  clearCompleted() {
    const completed_todos = this.todos.filter(todo => todo.completed == true);
    const active_todos = this.todos.filter(todo => todo.completed == false);
    Promise.all(completed_todos.map(todo => this.todoService.PreDeleteTodoById(todo.id)))
      .then(() => this.todos = [...active_todos]);
  }

}
