import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { ForgetRoutingModule } from './forget.routing';
import { SharedModule } from './../shared/shared.module';
import { ForgetComponent } from './forget/forget.component';
import { UsersService } from './../services/users.service';

// forget module bootstrap
@NgModule({
  imports: [
    ForgetRoutingModule,SharedModule,
    MaterialModule.forRoot(),
    CommonModule
  ],
  exports: [],
  declarations: [ForgetComponent],
  providers: [UsersService],
})
export class ForgetModule { }
