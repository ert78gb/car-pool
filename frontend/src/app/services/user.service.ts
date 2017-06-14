import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AuthHttp} from 'angular2-jwt';

import {environment} from '../../environments/environment';
import {Login} from '../models/login';
import {BaseService} from './BaseService';

@Injectable()
export class UserService extends BaseService{

  constructor(private authHttp: AuthHttp) {
    super();
  }

  public login(data:Login):Observable<any>{
    return this.authHttp.post(environment.backendUrl + 'authentication/login', JSON.stringify(data))
      .map(this.extractData)
      .catch(this.handleError);
  }

}
