import { Component } from '@angular/core';
import { Auth } from './auth.service';




@Component({
    templateUrl: 'html/explore.html',
})
export class ExploreComponent {
    constructor(private auth: Auth) { }
}