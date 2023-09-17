import { Component, OnInit,Input  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input() email = "younes.drissi@gmail.com";
  profileUrl = false;
  dashboard = false;
  ngOnInit() {
    if(this.router.url==="/dashboard"){
      this.dashboard=true;
    }else if(this.router.url==="/profile"){
      this.profileUrl=true;
    }
  }
  constructor(private router: Router) { }

  btnClickDashboard=  () => {
        this.router.navigateByUrl('/dashboard');
        console.log(this.email);

  };

  btnClickProfile=  () => {
    this.router.navigateByUrl('/profile');
};
  
}
