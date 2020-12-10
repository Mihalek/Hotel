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
  minDate1 : Date;
  minDate2 : Date;
  constructor(private reservationService : ReservationService) { 
    this.minDate1 = new Date();
    this.minDate2 = new Date(this.minDate1.getTime() + (1000 * 60 * 60 * 24));
  }

  ngOnInit(): void {
    
  }
  

  isFirstDayNotEmpty() : boolean {
    if(this.startDate > 0){
    return false;
  }
    return true;
}

  changeStartDate(){
    this.reservationService.sendStartDate(this.startDate);
    this.minDate2 = new Date(this.startDate.getTime() + (1000 * 60 * 60 * 24));
  }

  changeEndDate(){
    this.reservationService.sendEndDate(this.endDate);
  }

  Search(){
    this.reservationService.sendClickSearch();
  }
}
