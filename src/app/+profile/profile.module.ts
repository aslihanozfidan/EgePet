import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { ProfileRoutingModule } from './profile.routing';
import { SharedModule } from './../shared/shared.module';
import { UsersService } from './../services/users.service';

import { ProfileComponent } from './profile/profile.component';

// dost module bootstrap
@NgModule({
  imports: [
    ProfileRoutingModule,SharedModule,
    MaterialModule.forRoot(),
    CommonModule
  ],
  exports: [],
  declarations: [ ProfileComponent],
  providers: [UsersService],
})
export class ProfileModule { }
