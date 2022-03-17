import { EventEmitter, Injectable } from "@angular/core";
  @Injectable(
   { providedIn : 'root'}
  )

export class AllPost {
  posts =[
    {
       title: 'good day ',
        info: 'the day is good day '
    },
    {
      title: 'good day2 ',
       info: 'the day is good day '
   },
   {
    title: 'good day3 ',
     info: 'the day is good day '
 },

  ];
  statusUpdated = new EventEmitter<string>();


  addPost(title: string, info: string) {
    this.posts.push({ title:title , info:info })
    console.log(this.posts);

  }

  updatePost(id: number, title: string, info: string) {
    this.posts[id].title=title ;
    this.posts[id].info=info ;
  }
  getPost(i:number){
    return this.posts[i];
}
}
