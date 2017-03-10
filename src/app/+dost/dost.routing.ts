import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DostComponent } from './dost/dost.component';

const routes: Routes = [
  { path: 'dost/:dostName', component: DostComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DostRoutingModule { }
