import { Component, OnInit } from '@angular/core';
import { ReservationToAdd } from '../_models/reservationToAdd';
import { Room } from '../_models/room';
import { ReservationService } from '../_services/reservation.service';
import { RoomService } from '../_services/room.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  rooms: Room[];
  reservationToAdd: ReservationToAdd;
  constructor(private roomService: RoomService, private reservationService : ReservationService) { }

  ngOnInit(): void {
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

  reserveRoom() {
    
  }

}
