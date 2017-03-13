import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { DostListRoutingModule } from './dost_list.routing';
import { SharedModule } from './../shared/shared.module';
import { DostListComponent } from './dost_list/dost_list.component';
import { UsersService } from './../services/users.service';

// dost module bootstrap
@NgModule({
  imports: [
    DostListRoutingModule,SharedModule,
    MaterialModule.forRoot(),
    CommonModule
  ],
  exports: [],
  declarations: [DostListComponent],
  providers: [UsersService],
})
export class DostListModule { }
