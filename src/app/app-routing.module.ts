import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/auth/login/login.component';
import { RegisterComponent } from './component/auth/register/register.component';
import { HomeComponent } from './component/main/home/home.component';


const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" }, 
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "home", component: HomeComponent },
  // routes that are not defined will be directed to the login route 
  { path: "**", redirectTo: "/login"}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
