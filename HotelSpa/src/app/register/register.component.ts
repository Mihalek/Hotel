import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerMode = false;
  model:any ={};
  constructor(private authService: AuthService) { }


  ngOnInit(): void {
  }

  registerToggle(){
    this.registerMode = !this.registerMode;
  }
  register(){
    console.log(this.model);
    this.authService.register(this.model).subscribe(() =>{
      console.log('congratulation, you are new user');
    }, error =>{
      console.log(error);
    });
  }

}
