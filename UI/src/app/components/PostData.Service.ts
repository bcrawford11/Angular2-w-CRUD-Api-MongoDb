import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { PostViewModel } from './models/Post';
import { Constants } from './app.const.service';

@Injectable()
export class PostDataService{

    private actionUrl: string;
    private headers: Headers;

    constructor( private _http: Http, private _constants: Constants ){

        this.actionUrl = _constants.ServerWithApi;

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept','application/json');
    }

    public GetAll = (): Observable<PostViewModel[]> => {
        return this._http.get(this.actionUrl)
        .map((response: Response) => <PostViewModel[]>response.json())
        .catch(this.handleError);
    }

     public Add(post: PostViewModel): Observable<PostViewModel> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        console.log(this.actionUrl);
         return this._http.post(this.actionUrl, JSON.stringify(post))
            .map((res: Response) => {
                return res.json();
            })
            .catch(this.handleError);
    }
 
    public Update = (id: number, itemToUpdate: PostViewModel): Observable<PostViewModel> => {
        return this._http.put(this.actionUrl + id, JSON.stringify(itemToUpdate), { headers: this.headers })
            .map((response: Response) => <PostViewModel>response.json())
            .catch(this.handleError);
    }
 
    public Delete = (_id: number): Observable<Response> => {
        return this._http.delete(this.actionUrl + _id)
            .catch(this.handleError);
    }    

     private handleError(error: any) {
        var applicationError = error.headers.get('Application-Error');
        var serverError = error.json();
        var modelStateErrors: string = '';
 
        if (!serverError.type) {
            console.log(serverError);
            for (var key in serverError) {
                if (serverError[key])
                    modelStateErrors += serverError[key] + '\n';
            }
        }
 
        modelStateErrors = modelStateErrors = '' ? null : modelStateErrors;
 
        return Observable.throw(applicationError || modelStateErrors || 'Server error');
    }

}