import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Userforchangerole } from '../_models/userforchangerole';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-changerole',
  templateUrl: './changerole.component.html',
  styleUrls: ['./changerole.component.scss']
})
export class ChangeroleComponent implements OnInit {
  userforchangerole : Userforchangerole;
  selected : string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private router: Router, private dialogRef: MatDialogRef<ChangeroleComponent>,private userService: UserService) { }

  ngOnInit() {
  }

  Accept(){
    this.userforchangerole = {
        id: this.data,
        role: this.selected
    }
    this.userService.changeRole(this.userforchangerole).subscribe(
      () => {
        console.log('role has been changed');
        this.dialogRef.close();
        this.router.navigate(['allusers']);
      },error => {
        console.log(error);
      }
    )
  }
  Cancel(){
    this.dialogRef.close();
   }
}
