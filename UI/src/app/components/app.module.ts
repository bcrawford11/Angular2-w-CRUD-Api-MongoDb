import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule }     from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { Auth } from './auth.service';

import { AppComponent }  from './app.component';
import { HomePageContentComponent } from './homepagecontent.component';
import { HomePageHeaderComponent } from './homepageheader.component';
import { ProfileComponent } from './profile.component';
import { EditProfileComponent } from './editprofile.component';
import { LogoutComponent } from './logout.component';
import { DashboardComponent } from './dashboard.component';
import { ExploreComponent } from './explore.component';
import { PostRantComponent } from './postRant.component';
import { RedirectComponent } from './redirect.component';
import { PostDataService } from './PostData.Service';
import { Constants } from './app.const.service';


import { Routing } from './app.routes';
import { FormsModule }   from '@angular/forms';


@NgModule({
    imports: [BrowserModule, Routing, FormsModule, HttpModule, JsonpModule],
    declarations: [AppComponent, HomePageContentComponent, HomePageHeaderComponent, ProfileComponent,
                   LogoutComponent, EditProfileComponent, DashboardComponent, ExploreComponent, PostRantComponent,
                   RedirectComponent],
    providers: [AuthHttp, Auth, PostDataService, Constants],
    bootstrap: [AppComponent]
})
export class AppModule { }
