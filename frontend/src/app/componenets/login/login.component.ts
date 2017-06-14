import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {ErrorHandler} from '../../services/ErrorHandler';
import {UserService} from '../../services/user.service';
import {AuthService} from 'app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public errors = {
    username: {
      required: 'Felhasználónév megadása kötelező'
    },
    password: {
      required: 'Jelszó megadása kötelező'
    },
  };
  public error;
  public form: FormGroup;
  public processing = false;

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private authService: AuthService,
              private router: Router) {
    this.form = this.fb.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  onSubmit() {
    this.processing = true;
    this.error = null;
    this.userService.login(this.form.value)
      .subscribe((data) => {
          this.authService.login(data.token);
          this.processing = false;
          this.router.navigate(['/']);
        },
        (error) => {
          this.error = ErrorHandler.handle(error);
          this.processing = false;
        })
  }

}
