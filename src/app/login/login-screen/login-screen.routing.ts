import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { LoginScreenComponent } from './login-screen.component';

export const routes: Routes = [
  { path: '', component: LoginScreenComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class LoginScreenRouting {
}
