import { Component, OnInit } from '@angular/core';
import { Room } from '../_models/room';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { ReservationToAdd } from '../_models/reservationToAdd';
import { RoomService } from '../_services/room.service';
import { ReservationService } from '../_services/reservation.service';

@Component({
  selector: 'app-acceptreserve',
  templateUrl: './acceptreserve.component.html',
  styleUrls: ['./acceptreserve.component.scss']
})
export class AcceptreserveComponent implements OnInit {
  room: Room;
  reservation: ReservationToAdd;
  constructor(private reservationService: ReservationService,
   @Inject(MAT_DIALOG_DATA) public data: any, private roomService : RoomService, private dialogRef: MatDialogRef<AcceptreserveComponent>) {
    this.reservation = data;
    this.roomService.getRoom(this.reservation.idOfRoom).subscribe(
     (sub) => {
      this.room = sub;
     }
    );
  }
  
  calculatePrice() : number {
    return Math.ceil((this.reservation.endReservation.getTime()-this.reservation.startReservation.getTime())/(1000 * 3600 * 24)) * this.room?.dayPrice;
  }

  ngOnInit() {
   }

   Accept(){
     console.log(this.reservation);
    this.reservationService.reserve(this.reservation).subscribe(() =>{
      console.log('congratulation, you reserved the room');
    }, error =>{
      console.log(error);
    });
    this.dialogRef.close();
   }
   Cancel(){
    this.dialogRef.close();
   }

}
