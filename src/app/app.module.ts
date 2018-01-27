import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';

import { AuthGuard } from './shared/auth-guard.service';
import { AppStore } from './app.store'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRouting
  ],
  providers: [AuthGuard, AppStore],
  bootstrap: [AppComponent]
})
export class AppModule { }
