import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate } from '@angular/router';
import { AuthUsertypeService } from './auth-usertype.service';

@Injectable({
  providedIn: 'root'
})
export class AuthadminService implements CanActivate {

  constructor(private router: Router,
    private authusertypeservice: AuthUsertypeService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authusertypeservice.isAdminLoggedIn())
    return true;

    this.router.navigate(['/loginpage']);
      return false;
}
}
