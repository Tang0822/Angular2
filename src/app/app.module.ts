import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {TodoModule} from './todo/todo.module';
import {CoreModule} from './core/core.module';
import {AppRoutingModule} from './app-routing.module';
import {MdlModule} from 'angular2-mdl'
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HttpModule,
    AppRoutingModule,
    TodoModule,
    CoreModule,
    MdlModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule {
}
