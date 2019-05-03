import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs'
import {API_URL} from './constants';
import { AuthoService } from './autho.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient, private authService: AuthoService) { }

  getAllPosts():Observable<any>{
    return this.http.get(`${API_URL}post/get-by-date`)
  }

  createPost(post:any){
    return this.http.post(`${API_URL}post/`, post);
  }

  like(postId: number) {
    return this.http.post(`${API_URL}post/like`, {
      postId,
      userNickname: this.authService.user.nickname
    });
  }

  unlike(likeId: number) {
    return this.http.delete(`${API_URL}post/like/${likeId}`);
  }

  uploadFile(file:any){
    const formData = new FormData();
    formData.append('file', file);

    const headers = new HttpHeaders({ 'enctype': 'multipart/form-data' });
    return this.http.post(`${API_URL}post/upload-file`, formData, { headers: headers });
  }
}
