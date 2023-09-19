import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  dashboard ="/dashboard";
  profile ="/profile";
  calendar="/calendar";
  payment="/payment";
  geolocation="/geolocation";
  signOut="/signup";
}
