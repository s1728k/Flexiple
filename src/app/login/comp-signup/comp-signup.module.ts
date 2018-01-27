import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CompSignupComponent } from './comp-signup.component';
import { CompSignupRouting } from './comp-signup.routing';

@NgModule({
  imports: [
    SharedModule,
    CompSignupRouting
  ],
  declarations: [CompSignupComponent]
})
export class CompSignupModule { }
