import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import {ErrorHandler} from '../../services/ErrorHandler';
import {CarService} from '../../services/car.service';

@Component({
  selector: 'app-add-new-car',
  templateUrl: './add-new-car.component.html',
  styleUrls: ['./add-new-car.component.scss']
})
export class AddNewCarComponent {

  public errors = {
    plateNr: {
      required: 'Rendszám megadása kötelező'
    },
    year: {
      required: 'Évjárat megadása kötelező'
    },
    engineSize: {
      required: 'Köbcenti megadása kötelező'
    },
    petrol: {
      required: 'Üzemanyag megadása kötelező'
    },
  };
  public error;
  public showSuccess = false;
  public form: FormGroup;
  public processing = false;

  constructor(private fb: FormBuilder,
              private carService: CarService) {
    this.form = this.fb.group({
      plateNr: new FormControl('', [Validators.required]),
      year: new FormControl('', [Validators.required]),
      engineSize: new FormControl('', [Validators.required]),
      petrol: new FormControl('', [Validators.required])
    })
  }

  onSubmit() {
    this.processing = true;
    this.showSuccess = false;
    this.error = null;
    this.carService.addNewCar(this.form.value)
      .subscribe((entity) => {
          this.processing = false;
          this.showSuccess = true;
        },
        (error) => {
          this.error = ErrorHandler.handle(error);
          this.processing = false;
        })
  }
}
