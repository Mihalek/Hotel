import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReservationService } from '../_services/reservation.service';

@Component({
  selector: 'app-searchroom',
  templateUrl: './searchroom.component.html',
  styleUrls: ['./searchroom.component.css']
})
export class SearchroomComponent implements OnInit {
  startDate : any;
  endDate : any;
  constructor(private reservationService : ReservationService) { }

  ngOnInit(): void {
    
  }

  changeStartDate(){
    this.reservationService.sendStartDate(this.startDate);
  }

  changeEndDate(){
    this.reservationService.sendEndDate(this.endDate);
  }

  Search(){

  }
}
