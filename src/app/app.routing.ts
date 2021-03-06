import { NgModule } from '@angular/core';
import { Routes, RouterModule,PreloadAllModules  } from '@angular/router';

// all route and high level routes with lazy loading
// + denotes lazy loading for those modules
export const routes: Routes = [
 { path: '', redirectTo: '/index', pathMatch: 'full' },
 { path: 'home', loadChildren: './+home/home.module#HomeModule' },
 { path: 'forget', loadChildren: './+forget/forget.module#ForgetModule' },
 { path: 'uye', loadChildren: './+profile/profile.module#ProfileModule' },
 { path: 'hayvanlar', loadChildren: './+dost_list/dost_list.module#DostListModule' }, 
 { path: 'infopage', loadChildren: './+bildirim/bildirim.module#BildirimModule' },  
  { path: 'dost', loadChildren: './+dost/dost.module#DostModule' },
  { path: 'help', loadChildren: './+help/help.module#HelpModule' },
  { path: 'list/:id', loadChildren: './+list/list.module#ListModule' },
  { path: 'manage', loadChildren: './+manage/manage.module#ManageModule' },
  { path: 'lists', loadChildren: './+lists/lists.module#ListsModule' },
  { path: 'editlist', loadChildren: './+edit/edit.module#EditModule' },
  { path: 'clearlist', loadChildren: './+clear/clear.module#ClearModule' },
  { path: 'deletelist', loadChildren: './+delete/delete.module#DeleteModule' },
  { path: 'finishlist', loadChildren: './+finish/finish.module#FinishModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
})
export class AppRoutingModule { }
