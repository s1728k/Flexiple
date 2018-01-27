import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { LoginScreenComponent } from './login-screen.component';
import { LoginScreenRouting } from './login-screen.routing';

@NgModule({
  imports: [
    SharedModule,
    LoginScreenRouting
  ],
  declarations: [LoginScreenComponent]
})
export class LoginScreenModule { }
