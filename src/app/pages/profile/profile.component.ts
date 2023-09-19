import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { setProfile, updateProfile } from '../../store/actions/profile.actions';
import { getProfile } from '../../store/selectors/profile.selectors';
import { UserProfile } from 'src/app/store/reducers/profile.reducer';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile$ = this.store.select(getProfile);
  profileUrl = false;
  dashboard = false;
  email = "";

  ngOnInit() {
    if(this.router.url==="/dashboard"){
      this.dashboard=true;
    }else if(this.router.url==="/profile"){
      this.profileUrl=true;
    }
  }
  constructor(private router: Router,private store: Store) { }

  btnClickDashboard=  () => {
        this.router.navigateByUrl('/dashboard');
        const profileUpdate: Partial<UserProfile> = {
          email: this.email,
        };
        this.store.dispatch(updateProfile({ profileUpdate })); 

  };

  
  
}
