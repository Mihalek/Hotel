import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable, of } from 'rxjs';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ReservationToAdd } from '../_models/reservationToAdd';
import { ReservationToGet } from '../_models/reservationToGet';
import { ReservationService } from '../_services/reservation.service';
import { AuthService } from '../_services/auth.service';
import { RoomService } from '../_services/room.service';
import { Room } from '../_models/room';
import { Router } from '@angular/router';
import { NumberModel } from '../_models/numberModel';

@Component({
  selector: 'app-reservationslist',
  templateUrl: './reservationslist.component.html',
  styleUrls: ['./reservationslist.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class ReservationslistComponent implements OnInit{
  number : NumberModel;
  reservations: ReservationToGet[];
  rooms: Room[];
  constructor(private router: Router,private reservationService: ReservationService, private roomService:RoomService, private authService : AuthService) {
    this.loadResrvations()
    this.loadRooms();
  }
  loadResrvations(){

    this.reservationService.getReservationsOfUser(+this.authService.decodedToken.nameid).subscribe((reservations: ReservationToGet[]) =>
     {
       this.reservations=reservations;
      }, error => {
        console.log(error);
      })
  }


  getRoom(id: number) : Room {
      return this.rooms.find( obj => obj.id===id);    
  }

  cancelReservation(idOfReservation: number){

    this.number = {
      id: idOfReservation
    };
    this.reservations.find(obj => 
      obj.id=== idOfReservation
    ).isCanceled=true;   
    this.reservationService.cancelReservation(this.number).subscribe(() =>{
      console.log('You canceled the reservation');
    }, error =>{
      console.log(error);
    });;
  }

  loadRooms(){

    this.roomService.getRooms().subscribe((rooms: Room[]) =>
     {
       this.rooms=rooms;
      }, error => {
        console.log(error);
      })
  }

  ngOnInit(){
    
  } 
  columnsToDisplay = ['Date of reservation', 'Start reservation', 'End reservation', 'Price'];
  columnsToData = ['dateOfReservation', 'startReservation', 'endReservation', 'Price'];
  expandedElement: ReservationToGet | null;

}