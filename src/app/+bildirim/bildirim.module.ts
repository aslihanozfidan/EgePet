import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { BildirimRoutingModule } from './bildirim.routing';
import { SharedModule } from './../shared/shared.module';
import { BildirimComponent } from './bildirim/bildirim.component';
import { UsersService } from './../services/users.service';

// dost module bootstrap
@NgModule({
  imports: [
    BildirimRoutingModule,SharedModule,
    MaterialModule.forRoot(),
    CommonModule
  ],
  exports: [],
  declarations: [BildirimComponent],
  providers: [UsersService],
})
export class BildirimModule { }
