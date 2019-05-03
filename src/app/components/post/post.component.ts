import { Component, OnInit, Input } from '@angular/core';
import { AuthoService } from 'src/app/services/autho.service';
import { PostService } from 'src/app/services/post.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: any;
  liked: boolean;


  constructor(private http:AuthoService, private postService : PostService) { }

  ngOnInit() {
    const userId = this.http.user.id;
    this.liked = Boolean(this.post.likes.map(like => like.user).find(u => u === userId));
  }

  toggleLike() {
    const user = this.http.user;
    const index = this.post.likes.map(l => l.user).indexOf(user.id);

    if (index !== -1) {
      this.postService.unlike(this.post.likes[index].id).subscribe(v => {
        this.post.likes.splice(index, 1);
        this.liked = false;
        this.postService.getAllPosts();
      });
    } else {
      this.postService.like(this.post.id).subscribe(v => {
        this.post.likes.push(v);
        this.liked = true;
        this.postService.getAllPosts();
      });
    }
  }


}
