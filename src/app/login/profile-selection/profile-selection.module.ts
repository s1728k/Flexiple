import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ProfileSelectionComponent } from './profile-selection.component';
import { ProfileSelectionRouting } from './profile-selection.routing';

@NgModule({
  imports: [
    SharedModule,
    ProfileSelectionRouting
  ],
  declarations: [ProfileSelectionComponent]
})
export class ProfileSelectionModule { }
