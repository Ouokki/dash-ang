import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { updateProfile } from '../../store/actions/profile.actions';
import { getProfile } from '../../store/selectors/profile.selectors';
import { UserProfile } from 'src/app/store/reducers/profile.reducer';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})

export class PaymentComponent implements OnInit {

  profile$ = this.store.select(getProfile);
  dashboard = false;
  payment = false;
  fullname= "";
  cardnumber ="";
  expiration="";
  selectedCardType: string = 'Visa'; 

  ngOnInit(){if(this.router.url === "/dashboard"){
    this.dashboard = true;
  }
  else if(this.router.url === "/payment"){
    this.payment = true;
  }}
  constructor(private router: Router, private store: Store ){

}




  
  submit() {
    this.router.navigateByUrl('/dashboard');
    const profileUpdate: Partial<UserProfile> = {
      card:{fullname:this.fullname, cardnumber:this.cardnumber, expiration:this.expiration}
    };
    this.store.dispatch(updateProfile({ profileUpdate })); 
    
  }
}
