import {Response} from '@angular/http';
import * as Rx from 'rxjs/Rx';

export class BaseService {

  protected extractData(res: Response) {
// console.info('BS response: ', res.text());
    if(res.text().toLowerCase() === "ok")
      return {status:200, message:'ok'};

    let body = res.json();
    // console.log(JSON.stringify(body)); // log to console instead
    return body || [];
  }

  protected handleError(error: any) {
    // console.error('BS error', error);
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    let err;

    if (error.status == 400)
      err = JSON.parse(error._body);
    else
      err = new Error(errMsg);

    err.status = error.status;

    return Rx.Observable.throw(err);
  }
}

