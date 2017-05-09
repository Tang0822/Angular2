import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {TodoComponent} from './todo.component';
import {TodoFooterComponent} from './todo-footer/todo-footer.component';
import {TodoHeaderComponent} from './todo-header/todo-header.component';
import {TodoService} from './todo.service';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import {TodoRoutingModule} from './todo-routing.moudle';
import {SharedModule} from '../shared/shared.module';

@NgModule ({
  imports: [
    SharedModule,
    HttpModule,
    TodoRoutingModule
  ],

  declarations: [
    TodoComponent,
    TodoHeaderComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoFooterComponent,
  ],

  providers: [
    {provide: 'todoService', useClass: TodoService}
  ]
})

export class TodoModule {}
