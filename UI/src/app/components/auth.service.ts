import { Injectable }      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Router }          from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

declare var Auth0Lock: any;

@Injectable()
export class Auth { 
    lock = new Auth0Lock('jbPbKA9mxTky90y9qK02CKNg6czBs6xk', 'letsgetreal.auth0.com', {
         additionalSignUpFields: [{
            name: "address",                              
            placeholder: "enter your address"
        }],
        theme: {
            primaryColor:"#b3b3b3",
        },
         languageDictionary: {
            title: "Lets Get Real"
        }
    });

    userProfile: any;

    constructor(private router: Router) {
        this.userProfile = JSON.parse(localStorage.getItem('profile'));

        this.lock.on("authenticated", (authResult) => {
            localStorage.setItem('id_token', authResult.idToken);

            this.lock.getProfile(authResult.idToken, (error, profile) => {
                if (error) {
                    
                    alert(error);
                    return;
                }

                profile.user_metadata = profile.user_metadata || {};
                localStorage.setItem('profile', JSON.stringify(profile));
                this.userProfile = profile;
            });
            this.router.navigate(['/dashboard']);
        });
    }

    public login(){
        this.lock.show();
    };

    public authenticated() {
        return tokenNotExpired();
    };

    public logout() {
        localStorage.removeItem('id_token');
        localStorage.removeItem('profile');
        this.router.navigate(['/logout']);
    };
}