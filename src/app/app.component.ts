///<reference path="../../node_modules/@angular/router/src/router.d.ts"/>
import {Component, Inject, OnInit} from '@angular/core';
import {Auth} from './domain/entities';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  auth: Auth;
  title = 'app works!';

  constructor(@Inject('auth') private authService, private router: Router) {
  }

  ngOnInit(): void {
    this.authService
      .getAuth()
      .subscribe(auth => this.auth = Object.assign({}, auth));
  }

  login() {
    this.router.navigate(['login']);
  }

  logout() {
    this.authService.unAuth();
    this.auth = null;
    this.router.navigate(['login']);
  }
}
