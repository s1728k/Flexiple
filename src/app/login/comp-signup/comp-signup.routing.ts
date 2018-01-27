import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CompSignupComponent } from './comp-signup.component';

export const routes: Routes = [
  { path: '', component: CompSignupComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class CompSignupRouting {
}
