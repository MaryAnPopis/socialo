import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthoService } from '../../services/autho.service'
import { USER_KEY } from '../../services/constants'
import {Router} from "@angular/router"


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  nickname:string = "";
  isInvalid: boolean = false;
  userInvalid:string = "";
  valueSelected: string;

  loginForm = new FormControl('', [Validators.required]);
  preferences = new FormControl('', [Validators.required]);
  preferencesList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  constructor(private http:AuthoService, private router: Router) { }

  ngOnInit() {
    this.http.getTags().subscribe(tags => {
      this.preferencesList = tags
    })
  }

  onSubmit() {
    if(this.nickname === ''){
      this.getErrorMessage();
    }else{
     const newUser = {
      nickname:this.nickname,
      tags:this.valueSelected
     }

     this.http.signup(newUser).subscribe(data=> {
      if('status' in data){
        this.router.navigate(['/login'])
        this.nickname = ""
      }else{
        this.isInvalid = true
        this.userInvalid = data.message
      }
     })
    }
  }

  getPreferences(event){
    this.valueSelected = this.preferences.value && this.preferences.value.toString();
  }


  getErrorMessage() {
    return this.loginForm.hasError('required') ? 'You must enter a value' :
   '';
  }

}
