import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { DevSignupComponent } from './dev-signup.component';
import { DevSignupRouting } from './dev-signup.routing';

@NgModule({
  imports: [
    SharedModule,
    DevSignupRouting
  ],
  declarations: [DevSignupComponent]
})
export class DevSignupModule { }
