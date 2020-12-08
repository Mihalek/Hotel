import { Component, OnInit } from '@angular/core';
import { ReservationToAdd } from '../_models/reservationToAdd';
import { Room } from '../_models/room';
import { ReservationService } from '../_services/reservation.service';
import { RoomService } from '../_services/room.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AcceptreserveComponent } from '../acceptreserve/acceptreserve.component';
import { Subscription } from 'rxjs';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  rooms: Room[];
  roomToReserve: Room;
  startDate :any;
  endDate: any
  reservationToAdd : ReservationToAdd;
  constructor(private dialog: MatDialog , private authService : AuthService,private roomService: RoomService, private reservationService : ReservationService) {
    this.reservationService.receiveStartDate().subscribe((sub)=>{
      this.startDate=sub;
    });
    this.reservationService.receiveEndDate().subscribe((sub2)=>{
      this.endDate=sub2;
    });
  }

  ngOnInit(){
    this.loadRooms();
  }
  loadRooms(){
    this.roomService.getRooms().subscribe((rooms: Room[]) =>
     {
       this.rooms=rooms;
      }, error => {
        console.log(error);
      })
  }

  reserveRoom(room: Room) {
    this.reservationToAdd = {
      idOfRoom : room.id,
      idOfUser : this.authService.decodedToken.nameid,
      dateOfReservation : new Date(),
      startReservation : this.startDate,
      endReservation : this.endDate
    };
    //console.log(this.reservationToAdd);
    this.dialog.open(AcceptreserveComponent,{
      width: '80%',
      height: '80%',
      data: this.reservationToAdd
    });
  }

}
