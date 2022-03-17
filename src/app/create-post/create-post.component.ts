import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllPost } from '../service/all-post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent  {

  constructor(private postServ : AllPost ,private router:Router) {}

  onCreatePost(title:string , info :string){
    this.postServ.addPost(title,info);
    // this.router.navigate(["post"]);

  }

}
