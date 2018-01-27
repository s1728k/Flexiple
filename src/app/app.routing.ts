import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared/auth-guard.service';

export const routes: Routes = [
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '', loadChildren: './login/login.module#LoginModule'},
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRouting {
}
