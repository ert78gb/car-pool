import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import {Car} from '../../models/car';
import {CarService} from '../../services/car.service';
import {ErrorHandler} from '../../services/ErrorHandler';
import {KmData} from '../../models/km';

@Component({
  selector: 'app-my-car-add-km',
  templateUrl: './my-car-add-km.component.html',
  styleUrls: ['./my-car-add-km.component.scss']
})
export class MyCarAddKmComponent implements OnInit {

  public error;
  public form: FormGroup;
  public processing = false;


  @Input() car: Car;
  @Output() kmAdded = new EventEmitter<KmData>();

  constructor(private fb: FormBuilder,
              private carService: CarService) {
    this.form = fb.group({
      km: new FormControl('', [Validators.required]),
      business: new FormControl(false)
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    this.processing = true;
    this.error = null;
    this.carService.addKms(this.car, this.form.value)
      .subscribe((data) => {
          this.processing = false;
          this.form.reset();
          this.kmAdded.emit(data);
        },
        (error) => {
          this.error = ErrorHandler.handle(error);
          this.processing = false;
        })
  }
}
