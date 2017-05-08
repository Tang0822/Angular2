// app-list是app-item的父级。
// 父级
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Todo} from '../todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  _todos: Todo[] = [];

  // 使用@Input获取传递过来的数据
  @Input()
  //todos的写方法
  set todos(todos: Todo[]) {
    this._todos = [...todos];
  }
  //todos的读方法
  get todos() {
    return this._todos;
  }

  @Output() onRemoveTodo = new EventEmitter<Todo>();
  @Output() onToggleTodo = new EventEmitter<Todo>();
  @Output() onToggleAll = new EventEmitter<boolean>();

  onToggleTriggered(todo: Todo) {
    this.onToggleTodo.emit(todo);
  }

  onRemoveTriggered(todo: Todo) {
    this.onRemoveTodo.emit(todo);
  }

  onToggleAllTriggered(){
    this.onToggleAll.emit(true);
  }

  constructor() { }

  ngOnInit() {
  }

}
