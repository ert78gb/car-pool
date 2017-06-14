import {Injectable} from '@angular/core';
import {User} from '../models/user';
import {JwtHelper} from 'angular2-jwt';

@Injectable()
export class AuthService {
  private _token_key = 'id_token';

  constructor() {

  }

  public login(token: string): void {
    let jwtHelper = new JwtHelper();
    try {
      jwtHelper.decodeToken(token);
      localStorage.setItem(this._token_key, token);
    }
    catch (error) {
      localStorage.removeItem(this._token_key);
    }
  }

  public getToken() {
    return localStorage.getItem(this._token_key);

  }

  public isLoggedIn(): boolean {
    let token = this.getToken();

    if (!token)
      return false;

    let jwtHelper = new JwtHelper();

    return !jwtHelper.isTokenExpired(token);
  }

  public logout(): void {
    localStorage.removeItem(this._token_key)
  }

  public getUser(): User {
    let token = this.getToken();

    if (!token)
      return {name: '', roles: []};

    let jwtHelper = new JwtHelper();
    let tokenData = jwtHelper.decodeToken(token);

    return tokenData;
  }

  public hasRole(role: string | Array<string>) {
    if (!this.getUser())
      return false;

    if (typeof role === 'string')
      return this.hasRoleString(role);

    if (role instanceof Array) {
      return role.some(r => this.hasRoleString(r))
    }

    return false;
  }

  private hasRoleString(role: string): boolean {
    const user = this.getUser();

    if(!user.roles)
      return false;

    return user.roles.some(x => x === role);
  }
}
