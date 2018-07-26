import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { UserComponent } from './Components/Profiles/user/user.component';
import { RestaurantComponent } from './Components/Profiles/restaurant/restaurant.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {path:'user',component:UserComponent},
  {path:'restaurant' , component:RestaurantComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
    
  ],
  declarations: []
  ,
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
