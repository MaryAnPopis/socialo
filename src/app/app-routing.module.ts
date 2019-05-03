import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './views/login/login.component'
import {SignupComponent} from './views/signup/signup.component'
import {FeedComponent} from './views/feed/feed.component'
import {NewpostComponent} from './views/newpost/newpost.component'
import {SinglepostComponent} from './views/singlepost/singlepost.component'

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'login', component:LoginComponent},
  {path:'signup', component: SignupComponent},
  {path:'feed', component: FeedComponent},
  {path:'newpost', component: NewpostComponent},
  {path: 'post/:id',      component: SinglepostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [LoginComponent,SignupComponent,FeedComponent, NewpostComponent,SinglepostComponent]