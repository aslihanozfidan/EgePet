import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';

import { SharedComponent } from './../../shared/shared.component';
import { UsersService } from './../../services/users.service';
import { user } from './../../model/user';

@Component({
    selector: 'forget',
    templateUrl: './forget.component.html',
    styleUrls: ['./forget.component.scss'],
    providers:[UsersService]
})

export class ForgetComponent implements OnInit,OnDestroy  {
    private commentsUrl = 'api';
    private users:user[];
    constructor(
        public _userService: UsersService) {
    }
    ngOnDestroy () {
        
    }

    ngOnInit() {
        
    }
     

}