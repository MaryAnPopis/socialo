import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import {API_URL, USER_KEY} from './constants';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthoService {

  constructor(private http:HttpClient) { }

  get user() {
    return JSON.parse(localStorage.getItem(USER_KEY));
  }

  userById(id:any):Observable<any>{
    return this.http.get(`${API_URL}user/${id}`)
  }

  login(nickname: string):Observable<any>{
    return this.http.post(`${API_URL}user/login`,{nickname})
  }

  signup(newUser: object):Observable<any>{
    return this.http.post(`${API_URL}user/signup`,newUser)
  }

  getTags():Observable<any>{
    return this.http.get(`${API_URL}tag`)
  }
}
