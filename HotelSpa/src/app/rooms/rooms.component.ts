import { Component, OnInit } from '@angular/core';
import { Room } from '../_models/room';
import { RoomService } from '../_services/room.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  rooms: Room[];
  constructor(private roomService: RoomService) { }

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

}
