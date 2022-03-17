import { PostComponent } from './post.component';
import { PostRoutingModule } from './post/create-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './post/edit/edit.component';
import { cardStyleDirective } from '../cardStyle.directive';

@NgModule({
  declarations: [EditComponent, PostComponent , cardStyleDirective,],
  imports: [CommonModule, PostRoutingModule],
})
export class PostModule {}
