import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { getProfile } from '../../store/selectors/profile.selectors';
import {updateProfile } from '../../store/actions/profile.actions';
import { Store } from '@ngrx/store';
import { UserProfile } from 'src/app/store/reducers/profile.reducer';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  profile$ = this.store.select(getProfile);
  selected = new Date();
  dashboard = false;
  calendar = false;
  


  constructor(private router: Router,private store: Store) { 
    if(this.router.url==="/dashboard"){
      this.dashboard=true;
    }else if(this.router.url==="/calendar"){
      this.calendar=true;
    }
  }

  
  btnClickCalendar=  () => {
    this.router.navigateByUrl('/calendar');
  };

  btnClickCalendarSave=  () => {
    this.router.navigateByUrl('/payment');
    console.log(typeof this.selected);
    console.log(this.selected.toLocaleString().split(',')[0]);
    const profileUpdate: Partial<UserProfile> = {
      appointementDate: this.selected.toLocaleString().split(',')[0],
    };
    this.store.dispatch(updateProfile({ profileUpdate })); 
  };

}
