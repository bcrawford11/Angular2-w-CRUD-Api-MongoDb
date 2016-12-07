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
      this._dataservice.Add(this.newPost)
      .subscribe((res) => {
        this.myPosts.unshift(this.newPost);
        this.newPost.title = '';
        this.newPost.description = '';
      });
      
    }
    
    delete(id){
      console.log(id);
       this._dataservice.Delete(id)
        .subscribe((res) => {
          this.myPosts = res;
        });
          var index = this.myPosts.findIndex(x => x.id == id);
          this.myPosts.splice(index, 1);
   }
}
