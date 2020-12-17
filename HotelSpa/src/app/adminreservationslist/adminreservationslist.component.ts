import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ReservationToGet } from '../_models/reservationToGet';
import { Room } from '../_models/room';
import { NumberModel } from '../_models/numberModel';
import { ReservationService } from '../_services/reservation.service';
import { AuthService } from '../_services/auth.service';
import { RoomService } from '../_services/room.service';
@Component({
  selector: 'app-Adminreservationslist',
  templateUrl: './Adminreservationslist.component.html',
  styleUrls: ['./Adminreservationslist.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class AdminreservationslistComponent implements OnInit {
  number: NumberModel;
  reservations: ReservationToGet[];
  rooms: Room[];
  constructor(private reservationService : ReservationService, private roomService : RoomService) {
    this.loadResrvations();
    this.loadRooms();
   }
  loadResrvations() {
    this.reservationService.getReservations().subscribe((reservations: ReservationToGet[]) => {
      this.reservations = reservations;
    }, error => {
      console.log(error);
    })
  }

  getRoom(id: number): Room {
    return this.rooms.find(obj => obj.id === id);
  }

  acceptReservation(idOfReservation: number) {
    console.log(idOfReservation);
    this.number = {
      id: idOfReservation
    };
    this.reservationService.acceptReservation(this.number).subscribe(() => {
      console.log('You accepted the reservation');
    }, error => {
      console.log(error);
      return;
    });;

    this.reservations.find(obj =>
      obj.id === idOfReservation
    ).isAccepted = true;
  }

  cancelReservation(idOfReservation: number) {
    console.log(idOfReservation);
    this.number = {
      id: idOfReservation
    };
    this.reservationService.cancelReservation(this.number).subscribe(() => {
      console.log('You canceled the reservation');
    }, error => {
      console.log(error);
      return;
    });;

    this.reservations.find(obj =>
      obj.id === idOfReservation
    ).isCanceled = true;
  }
  loadRooms() {
    this.roomService.getRooms().subscribe((rooms: Room[]) => {
      this.rooms = rooms;
    }, error => {
      console.log(error);
    })
  }
  ngOnInit() {
  }
  columnsToDisplay = ['Date of reservation', 'Start reservation', 'End reservation', 'Price','Accepted','Canceled'];
  columnsToData = ['dateOfReservation', 'startReservation', 'endReservation', 'Price','isAccepted','isCanceled'];
  expandedElement: ReservationToGet | null;

}

