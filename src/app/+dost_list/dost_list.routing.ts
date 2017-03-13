import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DostListComponent } from './dost_list/dost_list.component';

export const routes: Routes = [
  { path: 'lolo', component: DostListComponent}  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DostListRoutingModule { }
