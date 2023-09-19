import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { setProfile, updateProfile } from '../../store/actions/profile.actions';
import { UserProfile } from 'src/app/store/reducers/profile.reducer';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  fullname = "";
  email = "";
  dateOfBirth='';
  licenseType ="";
  id="";

  constructor(private router: Router,private store: Store ) { }


  signup = () => {
    this.router.navigateByUrl('/calendar');
    const profile: UserProfile = {
      name: this.fullname,
      email: this.email,
      dateOfBirth: this.dateOfBirth.toLocaleString().split(',')[0],
      licenseType: this.licenseType,
      id: this.id,
      appointementDate:"",
      card:{fullname:'', cardnumber:'', expiration:''}
    };
    this.store.dispatch(setProfile({ profile })); 
  };

  public onDate(event: any): void {
    console.log(event);
    this.dateOfBirth = event.toLocaleString().split(',')[0];
   
  }

}
