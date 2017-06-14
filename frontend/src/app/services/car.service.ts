import {Injectable} from '@angular/core';
import {AuthHttp} from 'angular2-jwt';
import {Observable} from 'rxjs/Observable';

import {environment} from '../../environments/environment';
import {Car} from '../models/car';
import {BaseService} from './BaseService';
import {KmData} from '../models/km';

@Injectable()
export class CarService extends BaseService {

  constructor(private authHttp: AuthHttp) {
    super();
  }

  addNewCar(car: Car): Observable<Car> {
    return this.authHttp.post(environment.backendUrl + '/api/car', JSON.stringify(car))
      .map(this.extractData)
      .catch(this.handleError);
  }

  list(): Observable<Car[]> {
    return this.authHttp.get(environment.backendUrl + '/api/cars')
      .map(this.extractData)
      .catch(this.handleError);
  }

  hold(car): Observable<any> {
    return this.authHttp.post(environment.backendUrl + `/api/car/${car.plateNr}/hold`, {})
      .map(this.extractData)
      .catch(this.handleError);
  }

  getMyCar(): Observable<Car> {
    return this.authHttp.get(environment.backendUrl + '/api/user/my-car')
      .map(this.extractData)
      .catch(this.handleError);
  }

  release(car: Car): Observable<boolean> {
    return this.authHttp.post(environment.backendUrl + `/api/car/${car.plateNr}/release`, {})
      .map(this.extractData)
      .catch(this.handleError);
  }

  loadKms(car: Car): Observable<KmData[]> {
    return this.authHttp.get(environment.backendUrl + `/api/car/${car.plateNr}/kms`)
      .map(this.extractData)
      .catch(this.handleError);
  }

  addKms(car: Car, km: KmData) {
    return this.authHttp.post(environment.backendUrl + `/api/car/${car.plateNr}/km`, km)
      .map(this.extractData)
      .catch(this.handleError);
  }
}
