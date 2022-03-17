import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from '../post.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'post', component: PostComponent },
  { path: 'edit', component: EditComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
