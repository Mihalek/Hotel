import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';
import { ReservationService } from '../_services/reservation.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  message : string;
  model: any = {};
  constructor(public authService : AuthService, private router: Router, private alertify: AlertifyService) { 
  }

  ngOnInit(): void {
  }
  loggedIn(){
    return this.authService.loggedIn();
  }
  
  logout(){
     localStorage.removeItem('token');
     this.router.navigate(["register"]);
     this.alertify.success('You are logout!');
  }
  login(){
      this.authService.login(this.model).subscribe(next => {
        this.alertify.success('You are logged in');
        this.router.navigate(["register"]);
      }, error => {
        this.alertify.error('Sorry, error of login!');
      });
}

}
