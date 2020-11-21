import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};
  constructor(public authService : AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  loggedIn(){
    return this.authService.loggedIn();
  }
  
  logout(){
     localStorage.removeItem('token');
     this.router.navigate(["register"]);
     console.log('You are log out');
  }
  login(){
      this.authService.login(this.model).subscribe(next => {
        console.log('You are logged in');
      }, error => {
        console.log('error of login');
      });
}
}
