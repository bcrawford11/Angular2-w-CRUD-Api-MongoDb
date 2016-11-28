import { Component, Attribute, OnInit,ViewChild } from '@angular/core';
import { Auth } from './auth.service';
import { PostViewModel } from './models/Post';
import { PostDataService } from './PostData.Service';
import { Constants } from './app.const.service';

@Component({
    selector: 'postRant',
    templateUrl: 'html/postRant.html',
    styleUrls:['css/postRant.css'],
})
export class PostRantComponent implements OnInit {
    txtTitle: string;
    txtDescription: string;

    public myPosts : Array<PostViewModel>;
    public newPost : PostViewModel = new PostViewModel();
    constructor(private auth:Auth, private _dataservice: PostDataService){ 
      this.myPosts = []
    }

    ngOnInit(){
      this.getAllItems();
    }

    private getAllItems():void {
      this._dataservice
        .GetAll()
        .subscribe((Post: Array<PostViewModel>) => this.myPosts = Post,
          error => console.log(error),
            () => console.log('get all items complete'))
    }

    addPost(){
      this.newPost = new PostViewModel();
      this.newPost.title = this.txtTitle;
      this.newPost.description = this.txtDescription;
      JSON.stringify(this.newPost);
      this._dataservice.Add(this.newPost);
    }

    //addPost(post){
    //    if(this.newPost != null && 
    //        post &&
     //       this.newPost.title.length>=1 &&
      //      this.newPost.description.length>=1 &&
       //     this.newPost.title.length<=50){
        //        this.posts.unshift(this.newPost);
        //        this.newPost = new Post();
        //        return false;
     //   }
//    }   
    delete(Post){
        this._dataservice.Delete;
   }
}