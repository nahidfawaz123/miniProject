import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AllPost } from '../service/all-post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  posts: { title: string; info: string }[] = [];

  constructor(
    private postService: AllPost,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.posts = this.postService.posts;
    console.log(this.posts);
  }
  edit(i: number) {
    this.router.navigate(['edit'], { queryParams: { id: i } });
  }
}
