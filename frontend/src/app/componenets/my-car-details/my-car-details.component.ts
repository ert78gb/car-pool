import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Car} from '../../models/car';
import {KmData} from '../../models/km';
import {CarService} from '../../services/car.service';

@Component({
  selector: 'app-my-car-details',
  templateUrl: './my-car-details.component.html',
  styleUrls: ['./my-car-details.component.scss']
})
export class MyCarDetailsComponent implements OnInit, OnChanges {

  kms: KmData[] = [];

  @Input() car: Car;

  constructor(private carService: CarService) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['car']) {
      this.loadKms();
    }
  }

  kmAdded($event){
    this.kms.unshift($event);
  }

  private loadKms() {
    if(!this.car || !this.car.plateNr){
      this.kms = [];
      return;
    }

    this.carService.loadKms(this.car)
      .subscribe((kms)=> this.kms = kms)
  }

}
