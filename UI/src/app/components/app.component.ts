import { Component } from '@angular/core';
import { HomePageHeaderComponent } from './homepageheader.component';
import { Auth } from './auth.service';




@Component({
    selector: 'app-root',
    template: `<header></header>    
               <router-outlet></router-outlet>`,
})
export class AppComponent {
    constructor(private auth: Auth) { }
}
