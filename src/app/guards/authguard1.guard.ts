import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Service1Service } from '../services/service1.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Authguard1Guard implements CanActivate {
  constructor(private authguardservice: Service1Service, private router:Router){}
  canActivate():boolean{
    if(!this.authguardservice.gettoken()){
      this.router.navigateByUrl("/login");
    }
  
 return this.authguardservice.gettoken();
}
  
}
