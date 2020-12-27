import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../_models/User';
import { UserService } from '../_services/user.service';
import { NumberModel } from '../_models/numberModel';
import { ChangeroleComponent } from '../changerole/changerole.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
@Component({
  selector: 'app-adminuserslist',
  templateUrl: './adminuserslist.component.html',
  styleUrls: ['./adminuserslist.component.scss']
})
export class AdminuserslistComponent{
  index: NumberModel;
  users: User[];
  displayedColumns: string[] = ['name', 'surname', 'username', 'role','functions'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource = new MatTableDataSource<User>();
  constructor(private dialog : MatDialog,private userService: UserService, private cdr: ChangeDetectorRef) { 
    this.loadData();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  loadData() {
    this.userService.getUsers().subscribe((users: User[]) => {
          this.dataSource.data=users;
    }, error => {
      console.log(error);
    }) 
  }

  changeRole(number: number){
    
    this.dialog.open(ChangeroleComponent,{
      disableClose : true,
      width: '250px',
      height: '250px',
      data: number
    });
    this.dialog.afterAllClosed.subscribe(result => {
      this.loadData();
    }
    );
  }

  removeUser(number: number){
    this.index={
      id: number
    };
    this.userService.deleteUser(this.index).subscribe(() => {
    }, error => {
      console.log(error);
      return;
    });
    let Deleted :User= this.dataSource.data.find(x=>x.id==number);
    this.dataSource.data.splice(this.dataSource.data.indexOf(Deleted), 1);
    this.dataSource._updateChangeSubscription();
  }

}
