import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-bs-input',
  templateUrl: './bs-input.component.html',
  styleUrls: ['./bs-input.component.scss']
})
export class BsInputComponent {

  @Input() type = 'text';
  @Input() group: FormGroup;
  @Input() id: string;
  @Input() label = '';
  @Input() controlName: string;
  @Input() errors: any = {};

  constructor() {
  }

  showErrors() {
    const control = this.getControl();

    if (!control)
      return false;

    return !control.valid && (control.dirty || control.touched)
  }

  errorTexts(){
    const texts = [];
    if(!this.errors || !this.showErrors())
      return texts;

    const control = this.getControl();

    if(!control || !control.errors)
      return texts;

    for(let key in control.errors){
      const text = this.errors[key];

      if(key)
        texts.push(text);
    }

    return texts;
  }

  private getControl(){
    return this.group.controls[this.controlName];
  }
}
