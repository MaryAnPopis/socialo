import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthoService } from 'src/app/services/autho.service';
import { PostService } from 'src/app/services/post.service';
import {Router} from "@angular/router"
@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.scss']
})
export class NewpostComponent implements OnInit {

  constructor(private http:AuthoService, private postService : PostService, private router: Router) { }
  titleForm = new FormControl('', [Validators.required]);
  preferences = new FormControl('', [Validators.required]);
  textForm = new FormControl('', [Validators.required]);
  preferencesList: any[]
  valueSelected:string;
  title:string;
  text:string;
  selectedFile: File = null;
  loading:boolean = false;


  ngOnInit() {
    this.http.getTags().subscribe(tags => {
      this.preferencesList = tags
    })
  }

  onSubmit() {
    this.loading = true

    if (this.selectedFile == null){
      const newPost = {
        title:this.title,
        text: this.text,
        image: "",
        user:{nickaname: this.http.user.nickname },
        tagsString:this.valueSelected
       }
       this.postService.createPost(newPost).subscribe(postData=>{
        this.router.navigate(['/feed'])
       })
       this.loading = false
    }

    if(this.title === '' || this.selectedFile === null || this.text === ''){
      this.getErrorMessage();
      this.loading = false
    }else{
      this.postService.uploadFile(this.selectedFile).subscribe(data => {
        const newPost = {
          title:this.title,
          text: this.text,
          image: (data as any).url,
          user:{nickaname: this.http.user.nickname },
          tagsString:this.valueSelected
         }
         console.log(newPost)
         this.postService.createPost(newPost).subscribe(postData=>{
          this.router.navigate(['/feed'])
         })
         this.loading = false
      })

     }
    }


    onFileChanged(event) {
      this.selectedFile = event.target.files[0]
    }


  getPreferences(event){
    this.valueSelected = this.preferences.value && this.preferences.value.toString();
  }


  getErrorMessage() {
    return this.titleForm.hasError('required') ? 'You must enter a value' :
            '';
  }
}
