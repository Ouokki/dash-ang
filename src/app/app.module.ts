import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { MaterialModulesModule } from './shared/material-modules/material-modules.module';
import { MapsComponent } from './pages/maps/maps.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { profileReducer } from './store/reducers/profile.reducer';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProfileComponent,
    CalendarComponent,
    PaymentComponent,
    MapsComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModulesModule,
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ profile: profileReducer }),
    StoreDevtoolsModule.instrument(),


    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
