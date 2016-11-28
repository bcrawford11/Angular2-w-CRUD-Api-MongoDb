import { Component } from '@angular/core';
import { Auth } from './auth.service';
@Component({
    templateUrl: `html/profile.html`,
    styleUrls: ['css/profile.css'],
})

export class ProfileComponent {
    constructor(private auth: Auth) { }

}
