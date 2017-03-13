import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DostComponent } from '../+dost/dost/dost.component';
import { DostMainComponent } from '../+dost/dost_main/dost_main.component';
import { DurumComponent } from '../+dost/durum/durum.component';
import { DostListComponent } from '../+dost_list/dost_list/dost_list.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
  { path: 'profil', component: ProfileComponent}  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule { }
