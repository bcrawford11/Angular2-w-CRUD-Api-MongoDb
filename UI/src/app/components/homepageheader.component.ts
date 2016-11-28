import { Component } from '@angular/core';
import { Auth } from './auth.service';
@Component({
    selector: 'header',
    templateUrl: 'html/homepageheader.html',
    styleUrls: ['css/homepageheader.css'],
})

export class HomePageHeaderComponent {
    constructor(private auth: Auth) {}
     
}
