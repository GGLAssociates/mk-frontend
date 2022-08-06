import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { Role } from "./auth.model";
import { AuthService } from "./auth.service";

@Injectable()
class CanActivateTeam implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
    const requiredRoles: Role[] = route.data['roles'];
    const role = this.authService.loggedInUser?.role;
    if(!requiredRoles){
        return true;
    }
    if(!role){
        return false;
    }
    return requiredRoles.includes(role);
  }
}