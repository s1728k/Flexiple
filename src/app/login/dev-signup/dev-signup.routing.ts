import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { DevSignupComponent } from './dev-signup.component';

export const routes: Routes = [
  { path: '', component: DevSignupComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class DevSignupRouting {
}
