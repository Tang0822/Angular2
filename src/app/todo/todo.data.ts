import {InMemoryDbService} from 'angular-in-memory-web-api'
import {Todo} from './todo.model'

export class InMemoryTodoDbService implements InMemoryDbService{
  createDb() {
    let todos: Todo[] = [
      {id: "25110cf5-dfex-12ca-d5c4-050830f7591d", desc: 'this is our test', completed: true},
      {id: "86548s54-fabb-12ca-d5c4-050830f7591d", desc: 'getting up', completed: false},
      {id: "25110cf5-fabb-12ca-d5c4-0246830f7591d", desc: 'you are SB', completed: false}
    ];
    return {todos}
  }

}
