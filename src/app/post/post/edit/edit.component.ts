import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AllPost } from 'src/app/service/all-post.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @Input() post!: { title: string; info: string; };
  @Input() id: any
  constructor(private postService : AllPost,
    private activatedRoute :ActivatedRoute , private router:Router) {}
ngOnInit(): void {
  this.activatedRoute.queryParams.subscribe((parms:Params) =>{
    this.id=parms['id'];
  })
  this.post =this.postService.getPost(this.id)
}
  onSetTo(titleRef:string , infoRef :string){
    this.postService.updatePost(this.id , titleRef ,infoRef)
    this.postService.statusUpdated.emit(titleRef);
    this.postService.statusUpdated.emit(infoRef);

    }
      back(): void {
        this.router.navigate(['..']);
      }
}
