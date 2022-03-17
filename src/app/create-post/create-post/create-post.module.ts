import { CreateRoutingModule } from './create-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePostComponent } from '../create-post.component';



@NgModule({
  declarations: [
    CreatePostComponent
  ],
  imports: [
    CommonModule,
    CreateRoutingModule
  ]
})
export class CreatePostModule { }
