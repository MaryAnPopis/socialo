import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {


  postList:any=[]
  filteredPosts:any = [];
  constructor(private http:PostService, private router: Router) { }

  ngOnInit() {
    this.http.getAllPosts().subscribe(data => {
      this.postList = data
    })
  }

  onFilter(newFilteredPosts) {
    this.filteredPosts = newFilteredPosts;
  }

  createPost(){
    this.router.navigate(['/newpost'])
  }

}
