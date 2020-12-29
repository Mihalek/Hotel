import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, NgForm } from '@angular/forms';
import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerMode = false;
  model:any ={};
  constructor(public authService: AuthService, public alertify : AlertifyService) { }
  @ViewChild('registerForm') registerForm : NgForm;

  ngOnInit(): void {
  }

  registerToggle(){
    this.registerMode = !this.registerMode;
  }
  register(){
    this.authService.register(this.model).subscribe(() =>{
      this.alertify.success('Congratulation, you are registered in!');
      this.registerForm.reset();
      this.registerToggle();
    }, error =>{
      this.alertify.error('Sorry, error of register!');
    });
  }
  loggedIn(){
    return this.authService.loggedIn();
  }

}
