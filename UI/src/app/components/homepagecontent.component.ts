import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from './auth.service';

@Component({
    templateUrl: 'html/homepagecontent.html',
    styleUrls:['css/homepagecontent.css'],
})

export class HomePageContentComponent {
    constructor(private auth: Auth) {}
}