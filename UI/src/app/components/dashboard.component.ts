import { Component } from '@angular/core';
import { PostRantComponent } from './postRant.component';
import { Auth } from './auth.service';
import { PostDataService } from './PostData.Service';
import { Constants } from './app.const.service';


@Component({
    templateUrl: 'html/dashboard.html'
    
})
export class DashboardComponent {
    constructor(private auth: Auth, private _dataservice: PostDataService) { }
}