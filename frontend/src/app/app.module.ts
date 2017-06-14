import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {Http, HttpModule, RequestOptions} from '@angular/http';
import {AuthHttp} from 'angular2-jwt/angular2-jwt';

import {routes} from 'app/routes';
import {AppComponent} from './app.component';
import {LoginComponent} from './componenets/login/login.component';
import {AddNewCarComponent} from './componenets/add-new-car/add-new-car.component';
import {HoldCarComponent} from './componenets/hold-car/hold-car.component';
import {SetHoldCarDataComponent} from './componenets/set-hold-car-data/set-hold-car-data.component';
import {PageNotFoundComponent} from './componenets/page-not-found/page-not-found.component';
import {AuthService} from './services/auth.service';
import {UserService} from './services/user.service';
import {CarService} from './services/car.service';
import {authHttpServiceFactory} from './services/auth-service-factory';
import { BsInputComponent } from './componenets/bs-input/bs-input.component';
import { ListCarsComponent } from './componenets/list-cars/list-cars.component';
import { NoRightComponent } from './componenets/no-right/no-right.component';
import {CanActivateRole} from './guards/CanActiveHasRole';
import { LoginCallbackComponent } from './componenets/login-callback/login-callback.component';
import { MyCarComponent } from './componenets/my-car/my-car.component';
import { MyCarDetailsComponent } from './componenets/my-car-details/my-car-details.component';
import { MyCarAddKmComponent } from './componenets/my-car-add-km/my-car-add-km.component';
import { BusinessPipe } from './pipes/business.pipe';
import { FbImagePipe } from './pipes/fb-image.pipe';
import { UserImgComponent } from './componenets/user-img/user-img.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddNewCarComponent,
    HoldCarComponent,
    SetHoldCarDataComponent,
    PageNotFoundComponent,
    BsInputComponent,
    ListCarsComponent,
    NoRightComponent,
    LoginCallbackComponent,
    MyCarComponent,
    MyCarDetailsComponent,
    MyCarAddKmComponent,
    BusinessPipe,
    FbImagePipe,
    UserImgComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    },
    AuthService,
    UserService,
    CarService,
    CanActivateRole
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
