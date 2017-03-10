import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { ForgotRoutingModule } from './forgot.routing';
import { SharedModule } from './../shared/shared.module';
import { ForgotComponent } from './forgot/forgot.component';
import { UsersService } from './../services/users.service';

// forgot module bootstrap
@NgModule({
  imports: [
    ForgotRoutingModule,SharedModule,
    MaterialModule.forRoot(),
    CommonModule
  ],
  exports: [],
  declarations: [ForgotComponent],
  providers: [UsersService],
})
export class ForgotModule { }
