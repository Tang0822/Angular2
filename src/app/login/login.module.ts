import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { BingImageService } from './bing-image.service';
import { LoginComponent } from './login.component';
import {RegisterDialogComponent} from './register-dialog/register-dialog.component';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [
    LoginComponent,
    RegisterDialogComponent
  ],
  entryComponents: [RegisterDialogComponent],
  providers: [
    { provide: 'bing', useClass: BingImageService }
  ]
})
export class LoginModule { }
