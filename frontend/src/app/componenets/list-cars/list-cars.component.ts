import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {CarService} from '../../services/car.service';
import {Car} from '../../models/car';
import {ErrorHandler} from '../../services/ErrorHandler';

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.scss']
})
export class ListCarsComponent implements OnInit {

  cars: Car[];
  error: string;
  processing = false;

  constructor(private carService: CarService,
              private router: Router) {
  }

  ngOnInit() {
    this.carService.list().subscribe((cars: Car[]) => {
      this.cars = cars;
    })
  }

  hold(car: Car) {
    this.processing = false;
    this.error = null;

    this.carService.hold(car)
      .subscribe((result) => {
          this.router.navigate(['my-car'])
        },
        (error) => {
          this.error = ErrorHandler.handle(error);
          this.processing = false;
        })
  }
}
