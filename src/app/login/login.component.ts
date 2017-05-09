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

  onSubmit() {
    this.authService
      .loginWithCredentials(this.username, this.password)
      .subscribe(auth => {
        this.auth = Object.assign({}, auth);
        if (!auth.hasError){
          this.router.navigate(['todo'])
        }
      })
  }
}
