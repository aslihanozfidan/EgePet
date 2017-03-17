import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgetComponent } from './forget/forget.component';

const routes: Routes = [
  { path: 'sifremiunuttum', component: ForgetComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgetRoutingModule { }
