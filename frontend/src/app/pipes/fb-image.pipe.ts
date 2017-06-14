import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'fbImage'
})
export class FbImagePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return `https://graph.facebook.com/${value}/picture`;
  }

}
