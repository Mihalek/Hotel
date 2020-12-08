import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Room } from '../_models/room';
import { ReservationService } from '../_services/reservation.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Optional } from '@angular/core';
import { Inject } from '@angular/core';
import { ReservationToAdd } from '../_models/reservationToAdd';
import { RoomService } from '../_services/room.service';

@Component({
  selector: 'app-acceptreserve',
  templateUrl: './acceptreserve.component.html',
  styleUrls: ['./acceptreserve.component.scss']
})
export class AcceptreserveComponent implements OnInit {
  room: Room;
  reservation: ReservationToAdd;
  constructor(
   @Inject(MAT_DIALOG_DATA) public data: any, private roomService : RoomService
  ) {
    this.reservation = data;
    this.roomService.getRoom(this.reservation.idOfRoom).subscribe(
     (sub) => {
      this.room = sub;
     }
    );
  }
  calculatePrice() : number {
    return Math.ceil((this.reservation.endReservation.getTime()-this.reservation.startReservation.getTime())/(1000 * 3600 * 24)) * this.room.dayPrice;
  }

  ngOnInit() {
   }

  
  ngOnDestroy(): void {
    
  }

}
