import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login-callback',
  templateUrl: './login-callback.component.html',
  styleUrls: ['./login-callback.component.scss']
})
export class LoginCallbackComponent implements OnInit, OnDestroy {

  private routeChangeSubscription: Subscription;
  public error;

  constructor(private route: ActivatedRoute,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
    this.routeChangeSubscription = this.route.params.subscribe((params: Params) => {
      if (!params)
        return;

      let token = params['token'];
      if (!token) {
        this.error = 'token hiányzik';
        return;
      }

      this.authService.login(token);
      this.router.navigate(['/']);
    });
  }

  ngOnDestroy(): void {
    this.routeChangeSubscription.unsubscribe();
  }
}
