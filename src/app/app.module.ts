import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {AuthService, UserService} from './login/loginService';
import {routing} from './routes'
import {TodoComponent} from './todo/todo.component';

import {InMemoryWebApiModule} from 'angular-in-memory-web-api'
import {InMemoryTodoDbService} from './todo/todo.data'
import {TodoFooterComponent} from './todo/todo-footer/todo-footer.component';
import {TodoHeaderComponent} from './todo/todo-header/todo-header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TodoComponent,
    TodoFooterComponent,
    TodoHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryTodoDbService),
    routing
  ],

  // 方法三： 不需要在login.component中单独import
  providers: [
    {provide: 'auth', useClass: AuthService},
    {provide: 'user', useClass: UserService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

// 课程代码

/*import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryTodoDbService } from './todo/todo.data';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './login/loginService';
import { routing } from './routes';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryTodoDbService),
    routing
  ],
  providers: [
    {provide: 'auth',  useClass: AuthService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }*/
