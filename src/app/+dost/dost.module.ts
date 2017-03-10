import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { DostRoutingModule } from './dost.routing';
import { SharedModule } from './../shared/shared.module';
import { DostComponent } from './dost/dost.component';
import { UsersService } from './../services/users.service';

// dost module bootstrap
@NgModule({
  imports: [
    DostRoutingModule,SharedModule,
    MaterialModule.forRoot(),
    CommonModule
  ],
  exports: [],
  declarations: [DostComponent],
  providers: [UsersService],
})
export class dostModule { }
