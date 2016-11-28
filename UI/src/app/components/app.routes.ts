import { Routes, RouterModule } from '@angular/router';
import { HomePageContentComponent } from './homepagecontent.component';
import {ProfileComponent } from './profile.component';
import { LogoutComponent } from './logout.component';
import { EditProfileComponent } from './editprofile.component';
import { DashboardComponent } from './dashboard.component';
import { ExploreComponent } from './explore.component';

const routes: Routes = [

    { path: '', component: HomePageContentComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'profile/edit', component: EditProfileComponent },
    { path: 'logout', component: LogoutComponent },
    { path: 'dashboard', component: DashboardComponent},
    { path: 'explore', component: ExploreComponent },
    { path: '**', redirectTo: '' },
    
];

export const Routing = RouterModule.forRoot(routes);