import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login.component';

export const routes: Routes = [
  { path: '', 
    component: LoginComponent, 
    children:[
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', loadChildren: './login-screen/login-screen.module#LoginScreenModule'},
      { path: 'profile-selection', loadChildren: './profile-selection/profile-selection.module#ProfileSelectionModule'},
      { path: 'dev-signup', loadChildren: './dev-signup/dev-signup.module#DevSignupModule'},
      { path: 'comp-signup', loadChildren: './comp-signup/comp-signup.module#CompSignupModule'},
      { path: 'reset-password', loadChildren: './reset-password/reset-password.module#ResetPasswordModule'},
    ] 
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class LoginRouting {
}
