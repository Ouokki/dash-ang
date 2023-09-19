import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MapsComponent } from './pages/maps/maps.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  {path: '', redirectTo:'/signup' , pathMatch: 'full'},
  {path:'signup', component: SignupComponent },
  {path:'dashboard' , component:DashboardComponent},
  {path:'profile' , component:ProfileComponent},
  {path:'calendar' , component:CalendarComponent},
  {path:'payment' , component:PaymentComponent},
  {path:'map' , component:MapsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
