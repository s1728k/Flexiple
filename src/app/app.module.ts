import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';

import { AuthGuard } from './shared/auth-guard.service';
import { RestApiService } from './shared/rest-api.service';
import { MessageService } from './shared/message.service';
import { AppStore } from './app.store'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HttpClientModule,
    AppRouting
  ],
  providers: [AuthGuard, AppStore, RestApiService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
