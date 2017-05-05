import {Component, Inject, OnInit} from '@angular/core';
// 方法二 和 方法一
import {AuthService, UserService} from './loginService';

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['../app.component.css']
  /*
   // 方法二： 使用DI（依赖注入)
   providers: [AuthService, UserService]
   */
})

export class LoginComponent implements OnInit {

  username = '';
  password = '';
  strings = '';
  /*
   // 方法一： 不使用DI、通过定义全局变量service，new一个新的AuthService
   service: AuthService;

   constructor() {
   this.service = new AuthService();
   }
   */

  /*
   // 方法二： 在构造函数中将AuthService注入到定义形参service
   constructor(private service: AuthService) {

   }
   */

  // 方法三 通过在app.module中的providers[]
  constructor(@Inject('auth') private authService, @Inject('user') private userService) {

  }

  ngOnInit() {
  }

  onClick() {
    console.log('hello ' + this.username + ' your password is ' + this.password);
    console.log('auth result is: ' + this.authService.loginWithCreadentials(this.username, this.password));
    console.log(this.userService.addUser({user: this.username, pwd: this.password}));
    this.strings = 'hello ' + this.username + ' your password is ' + this.password;
  }

  onClick2(username, password) {
    console.log('hello ' + username + ' your password is ' + password);
    console.log('auth result is: ' + this.authService.loginWithCreadentials(username, password));
    console.log(this.userService.addUser({user: username, pwd: password}));
  }

  onSubmit(formValue) {
    console.log(formValue);
  }
}
