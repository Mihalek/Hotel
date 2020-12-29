import { Component, OnInit } from '@angular/core';
import { User } from '../_models/User';
import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  user: User ={};
  constructor(private authService: AuthService, private userService: UserService, private alertify : AlertifyService) {

  }

  loadUser() {
    this.userService.getUser(+this.authService.decodedToken.nameid).subscribe((response: User) => {
      this.user = response;
    }, error => {
      console.log(error);
    })
  }

  saveChanges(){
    this.userService.updateUser(+this.authService.decodedToken.nameid,this.user).subscribe(() => {
      this.alertify.success('Your data have been updated!')
    }, error => {
      console.log('Error of update!');
    })
  }

  ngOnInit() {
    this.loadUser();
    console.log(this.user);
  }

}
