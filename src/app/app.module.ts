import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {TodoModule} from './todo/todo.module';
import {CoreModule} from './core/core.module';
import {AppRoutingModule} from './app-routing.module';
import {MdlModule} from 'angular2-mdl'
import { RegisterDialogComponent } from './login/register-dialog/register-dialog.component';
import {LoginModule} from './login/login.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MdlModule,
    CoreModule,
    AppRoutingModule,
    LoginModule,
    TodoModule,
  ],

  bootstrap: [AppComponent]
})
export class AppModule {
}
