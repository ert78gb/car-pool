import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'business'
})
export class BusinessPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value ? 'Üzleti' : 'Magán';
  }

}
