import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DostComponent } from './dost/dost.component';
import { DostMainComponent } from './dost_main/dost_main.component';
import { DurumComponent } from './durum/durum.component';
export const routes: Routes = [
  { path: 'dost/:dostName', component: DostComponent, children: [
    { path: 'bilgi', component: DostMainComponent},
    { path: 'durum', component: DurumComponent }
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DostRoutingModule { }
