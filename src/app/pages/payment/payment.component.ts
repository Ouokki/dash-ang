import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { updateProfile } from '../../store/actions/profile.actions';
import { getProfile } from '../../store/selectors/profile.selectors';
import { UserProfile } from 'src/app/store/reducers/profile.reducer';
import { Store } from '@ngrx/store';
import { cvvValidator, emailValidator, cardIdValidator, bankCardNumberValidator, cardExpirationDateValidator } from '../../validators/customValidators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})

export class PaymentComponent implements OnInit {
  form: FormGroup;
  profile$ = this.store.select(getProfile);
  dashboard = false;
  payment = false;
  
  selectedCardType: string = 'Visa'; 

  ngOnInit(){if(this.router.url === "/dashboard"){
    this.dashboard = true;
  }
  else if(this.router.url === "/payment"){
    this.payment = true;
  }}
  constructor(private router: Router, private store: Store,private fb: FormBuilder ){
    this.form = this.fb.group({
      cvv: ['', [Validators.required, cvvValidator()]],
      fullname: [''],
      cardnumber: ['', [Validators.required, bankCardNumberValidator()]],
      expiration: ['', [Validators.required, cardExpirationDateValidator()]]
    });
  }




  
  submit() {
    this.router.navigateByUrl('/dashboard');
    const cvv = this.form.get('cvv')?.value;
    const cardnumber = this.form.get('cardnumber')?.value;
    const expiration = this.form.get('expiration')?.value;
    const fullname = this.form.get('fullname')?.value;
    console.log(cvv ,cardnumber ,expiration,fullname);
    const profileUpdate: Partial<UserProfile> = {
      card:{fullname:fullname, cardnumber:cardnumber, expiration:expiration}
    };
    this.store.dispatch(updateProfile({ profileUpdate })); 
    
  }
}
