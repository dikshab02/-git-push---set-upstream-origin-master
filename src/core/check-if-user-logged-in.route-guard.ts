import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { CrudHttpService } from './crud-http.service';

@Injectable({
  providedIn: 'root',
})
export class CheckIfUserLoggedIn implements CanActivate {
  constructor(
    private crudHttpService: CrudHttpService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    if (!this.crudHttpService.isLoggedin()) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }

}
