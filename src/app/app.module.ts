import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { AppRoutingModule } from './app.routing';
import { IndexModule } from './index/index.module';
import { firebaseConfig } from './config/firebase-config';
import { UsersService } from './services/users.service';
import { AppComponent } from './app.component';
import { DostModule } from './+dost/dost.module';
import { HomeModule } from './+home/home.module';
import { ForgetModule } from './+forget/forget.module';
import { DostListModule } from './+dost_list/dost_list.module';
import { ProfileModule } from './+profile/profile.module';
import { BildirimModule } from './+bildirim/bildirim.module';

// app main bootstrap
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AppRoutingModule,
    IndexModule,
    DostModule,
    HomeModule,
    ForgetModule,
    ProfileModule,
    DostListModule,
    BildirimModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
