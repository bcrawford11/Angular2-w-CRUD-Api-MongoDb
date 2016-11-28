import { Injectable } from '@angular/core';

@Injectable()
export class Constants{
    public Server: string = "http://localhost:5000/";
    public ApiUrl: string = "api/Post";
    public ServerWithApi = this.Server + this.ApiUrl;
}