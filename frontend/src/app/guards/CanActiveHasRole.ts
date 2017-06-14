import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Injectable()
export class CanActivateRole implements CanActivate {
  constructor(private authService: AuthService,
              private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {

    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['login']);
      return false;
    }

    if (!route.data || !route.data.roles)
      return true;

    if (!(route.data.roles instanceof Array))
      throw new Error('Router roles invalid type');

    let roles = <Array<string>>route.data.roles;

    let hasRight = roles.some(requiredRole => this.authService.hasRole(requiredRole));

    if (hasRight) {
      return true
    }
    else {
      this.router.navigate(['no-right']);
      return false;
    }

  }
}
