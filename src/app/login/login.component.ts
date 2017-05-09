import {Component, Inject, OnInit} from '@angular/core';
import {Auth, Image} from '../domain/entities';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {MdlDialogReference, MdlDialogService} from 'angular2-mdl';
import {RegisterDialogComponent} from './register-dialog/register-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['../app.component.css']
})

export class LoginComponent implements OnInit {

  username = '';
  password = '';
  slides: Image[] = [];
  photo = '/assets/login_default_bg.jpg';
  subscription: Subscription;
  auth: Auth;

  constructor(@Inject('auth') private authService,
              @Inject('bing') private bingService,
              private dialogService: MdlDialogService,
              private router: Router) {
    this.bingService.getImageUrl()
      .subscribe((images: Image[]) => {
        this.slides = [...images];
        this.rotateImages(this.slides);
      });
  }

  ngOnDestroy() {
    if (this.subscription !== undefined)
      this.subscription.unsubscribe();
  }

  rotateImages(arr: Image[]) {
    const length = arr.length
    let i = 0;
    setInterval(() => {
      i = (i + 1) % length;
      this.photo = this.slides[i].contentUrl;
    }, 4000);
  }

  ngOnInit() {
  }

  onSubmit() {
    this.authService
      .loginWithCredentials(this.username, this.password)
      .subscribe(auth => {
        this.auth = Object.assign({}, auth);
        if (!auth.hasError) {
          this.router.navigate(['todo'])
        }
      })
  }

  register($event: MouseEvent) {
    let pDialog = this.dialogService.showCustomDialog({
      component: RegisterDialogComponent,
      isModal: true,
      styles: {'width': '350px'},
      clickOutsideToClose: true,
      enterTransitionDuration: 400,
      leaveTransitionDuration: 400
    });
    pDialog.map((dialogReference: MdlDialogReference) => {
      console.log('dialog visible', dialogReference);
    });
  }
}
