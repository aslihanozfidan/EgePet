import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BildirimComponent } from './bildirim/bildirim.component';

export const routes: Routes = [
  { path: 'bildirimler', component: BildirimComponent}  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BildirimRoutingModule { }
