import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ProfileComponent } from './profile/profile.component';
import { ProfileInfoComponent } from './profile_info/profile_info.component';
import { MessageComponent } from './message/message.component';
import { ChangePasswordComponent } from './change_password/change_password.component';

export const routes: Routes = [
  { path: 'profil', component: ProfileComponent, children: [
    { path: 'bilgi', component: ProfileInfoComponent},
    { path: 'mesajlar', component: MessageComponent},
    { path: 'sifredegistir', component: ChangePasswordComponent }
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule { }
