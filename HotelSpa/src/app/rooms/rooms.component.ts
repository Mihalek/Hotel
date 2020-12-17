import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ReservationToAdd } from '../_models/reservationToAdd';
import { Room } from '../_models/room';
import { ReservationService } from '../_services/reservation.service';
import { RoomService } from '../_services/room.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AcceptreserveComponent } from '../acceptreserve/acceptreserve.component';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  rooms: Room[];
  flagToRefresh: boolean;
  roomToReserve: Room;
  startDate :any;
  endDate: any
  reservationToAdd : ReservationToAdd;
  blockReserve: boolean;
  constructor(private dialog: MatDialog , private authService : AuthService,private roomService: RoomService, private reservationService : ReservationService) {
    this.reservationService.receiveStartDate().subscribe((sub)=>{
      this.startDate=sub;
      if(this.endDate > this.startDate){
      this.loadFreeRooms();
      }
    });
    this.reservationService.receiveEndDate().subscribe((sub2)=>{
      this.endDate=sub2;
      this.loadFreeRooms();
    });

  }

  ngOnInit(){
    this.blockReserve=true;
    //this.loadRooms();
  }
  loadRooms(){
    this.roomService.getRooms().subscribe((rooms: Room[]) =>
     {
       this.rooms=rooms;
      }, error => {
        console.log(error);
      })
  }

  loadFreeRooms(){
    this.roomService.getFreeRooms(this.startDate, this.endDate ).subscribe((rooms: Room[]) =>
     {
      this.blockReserve=false;
       this.rooms=rooms;
      }, error => {
        console.log(error);
      })
  }


  reserveRoom(room: Room) {
    this.reservationToAdd = {
      idOfRoom : room.id,
      idOfUser : +this.authService.decodedToken.nameid,
      dateOfReservation : new Date(),
      startReservation : this.startDate,
      endReservation : this.endDate,
      price: Math.ceil((this.endDate.getTime()-this.startDate.getTime())/(1000 * 3600 * 24)) * room.dayPrice
    };


    this.dialog.open(AcceptreserveComponent,{
      disableClose : true,
      width: '900px',
      height: '500px',
      data: this.reservationToAdd
    });

    

  }

}
