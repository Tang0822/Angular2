import {Component, Inject, OnInit} from '@angular/core';
import {Auth} from '../domain/entities';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['../app.component.css']
})

export class LoginComponent implements OnInit {

  username = '';
  password = '';
  auth: Auth;

  constructor(@Inject('auth') private authService, private router: Router) {

  }

  ngOnInit() {
  }

  onSubmit(formValue) {
    this.authService
      .loginWithCredentials(formValue.login.username, formValue.login.password)
      .then(auth => {
        let redirectUrl = (auth.redirectUrl === null) ? '/' : auth.redirectUrl;
        if (!auth.hasError) {
          this.router.navigate([redirectUrl]);
          localStorage.removeItem('redirectUrl');
        }else {
          this.auth = Object.assign({}, auth);
        }
      });
  }
}
