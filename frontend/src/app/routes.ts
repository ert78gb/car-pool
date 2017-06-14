import {Routes} from '@angular/router';

import {LoginComponent} from './componenets/login/login.component';
import {AddNewCarComponent} from './componenets/add-new-car/add-new-car.component';
import {HoldCarComponent} from './componenets/hold-car/hold-car.component';
import {SetHoldCarDataComponent} from './componenets/set-hold-car-data/set-hold-car-data.component';
import {PageNotFoundComponent} from './componenets/page-not-found/page-not-found.component';
import {ListCarsComponent} from './componenets/list-cars/list-cars.component';
import {NoRightComponent} from './componenets/no-right/no-right.component';
import {CanActivateRole} from './guards/CanActiveHasRole';
import {LoginCallbackComponent} from './componenets/login-callback/login-callback.component';
import {MyCarComponent} from './componenets/my-car/my-car.component';


export const routes: Routes = [
  {path: '', redirectTo: 'list-cars', pathMatch: 'full'},

  {path: 'login', component: LoginComponent},
  {path: 'logincallback/:token', component: LoginCallbackComponent},
  {path: 'no-right', component: NoRightComponent},

  {path: 'add-new-car', component: AddNewCarComponent, canActivate: [CanActivateRole], data: {roles: ['admin']}},
  {path: 'list-cars', component: ListCarsComponent, canActivate: [CanActivateRole]},
  {path: 'my-car', component: MyCarComponent, canActivate: [CanActivateRole]},
  {path: 'hold-car', component: HoldCarComponent, canActivate: [CanActivateRole]},
  {path: 'set-hold-car-data', component: SetHoldCarDataComponent, canActivate: [CanActivateRole]},

  {path: '**', component: PageNotFoundComponent}
];
