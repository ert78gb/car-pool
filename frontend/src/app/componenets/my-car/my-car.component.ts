import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {CarService} from '../../services/car.service';
import {Car} from "../../models/car";

@Component({
  selector: 'app-my-car',
  templateUrl: './my-car.component.html',
  styleUrls: ['./my-car.component.scss']
})
export class MyCarComponent implements OnInit {

  car:Car = <any>{};

  constructor(private carService: CarService,
              private router:Router) { }

  ngOnInit() {
    this.carService.getMyCar().subscribe((car: Car) => {
      this.car = car;
    })
  }

  release(){
    this.carService.release(this.car)
      .subscribe(()=>{
      this.router.navigate(['list-cars'])
      })
  }
}
