import {Component, Input, OnChanges,SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-user-img',
  templateUrl: './user-img.component.html',
  styleUrls: ['./user-img.component.scss']
})
export class UserImgComponent implements OnChanges{

  @Input() userId: string | number;

  constructor() {
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if(changes['userId']){

    }
  }

  showImage(){
    return this.userId !== '5629499534213120' && this.userId !== '-';
  }
}
