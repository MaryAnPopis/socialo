import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthoService } from '../../services/autho.service'
import { USER_KEY } from '../../services/constants'
import {Router} from "@angular/router"


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  nickname:string = ""
  isInvalid: boolean = false
  userInvalid:string = ""
  loginForm = new FormControl('', [Validators.required]);
  constructor(private http:AuthoService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    if(this.nickname === ''){
      this.getErrorMessage();
    }else{
      this.http.login(this.nickname).subscribe(data =>{
        if('status' in data){
          localStorage.setItem(USER_KEY, JSON.stringify(data));
          this.router.navigate(['/feed'])
          this.nickname = ""
        }else{
          this.isInvalid = true
          this.userInvalid = data.message
        }
      });
    }
  }

  getErrorMessage() {
    return this.loginForm.hasError('required') ? 'You must enter a value' :
   '';
  }
}
