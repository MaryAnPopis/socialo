import { Component, OnInit } from '@angular/core';
import { USER_KEY } from 'src/app/services/constants';
import {Router} from "@angular/router"
@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.scss']
})
export class AppbarComponent implements OnInit {

  username:string = "";
  constructor(private router: Router) { }

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem(USER_KEY))
    this.username = user.nickname
  }

  logout(){
    localStorage.clear()
    this.router.navigate(['/login'])
  }
}
