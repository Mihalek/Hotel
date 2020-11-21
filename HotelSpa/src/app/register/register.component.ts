import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, NgForm } from '@angular/forms';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerMode = false;
  model:any ={};
  constructor(public authService: AuthService) { }
  @ViewChild('registerForm') registerForm : NgForm;

  ngOnInit(): void {
  }

  registerToggle(){
    this.registerMode = !this.registerMode;
  }
  register(){
    this.authService.register(this.model).subscribe(() =>{
      console.log('congratulation, you are new user');
      this.registerForm.reset();
      this.registerToggle();
    }, error =>{
      console.log(error);
    });
  }
  loggedIn(){
    return this.authService.loggedIn();
  }

}
