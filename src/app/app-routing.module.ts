import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path:"about",component:AboutComponent},
  { path:"home",component:HomeComponent},
  { path:"",redirectTo:"home",pathMatch:"full"},
  { path:"contact",component:ContactComponent},
  { path:"home/about",component:AboutComponent},
  { path:"login",component:LoginComponent},
  { path:'**',component:PageNotFoundComponent}//wildcard route have to set in the last line
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
