import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable, of } from 'rxjs';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ReservationToAdd } from '../_models/reservationToAdd';
import { ReservationToGet } from '../_models/reservationToGet';
import { ReservationService } from '../_services/reservation.service';
import { AuthService } from '../_services/auth.service';

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

  reservations: ReservationToGet[];
  constructor(private reservationService: ReservationService, private authService : AuthService) {

  }
  loadResrvations(){

    this.reservationService.getReservationsOfUser(this.authService.decodedToken.nameid).subscribe((reservations: ReservationToGet[]) =>
     {
       this.reservations=reservations;
      }, error => {
        console.log(error);
      })
  }

  ngOnInit(){
    this.loadResrvations()
  } 
  columnsToDisplay = ['Date of reservation', 'Start reservation', 'End reservation', 'Price'];
  columnsToData = ['dateOfReservation', 'startReservation', 'endReservation', 'Price'];
  expandedElement: ReservationToGet | null;

}