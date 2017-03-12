import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, Params } from '@angular/router';

// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';

import { SharedComponent } from './../../shared/shared.component';
import { UsersService } from './../../services/users.service';
import { user } from './../../model/user';

import { DostModule } from '../dost.module';

@Component({
    selector: 'durum',
    templateUrl: './durum.component.html',
    styleUrls: ['./durum.component.scss'],
    providers: [UsersService]
})

export class DurumComponent implements OnInit, OnDestroy {
    durumName="tobby";
   
    private commentsUrl = 'api';
    private users: user[];
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        public _userService: UsersService) {
    }
    ngOnDestroy() {

    }

    ngOnInit() {
        this.route.params.subscribe(key => this.durumName = key["durumName"]);
    }


}