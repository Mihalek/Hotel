import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ReservationToGet } from '../_models/reservationToGet';
import { Room } from '../_models/room';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  startDateOfReserve = new Subject<any>();
  endDateOfReserve = new Subject<any>();
  clickChange = new Subject<any>();
  baseUrl = environment.apiUrl + 'reservations';
  constructor(private http : HttpClient) { 

 }

 getReservationsOfUser(id: number) : Observable<ReservationToGet[]> {
  return this.http.get<ReservationToGet[]>(this.baseUrl +'/'+id);
}

reserve(model: any){
  return this.http.post(this.baseUrl+'/reserve', model);
}

sendStartDate(startdate: any){
  this.startDateOfReserve.next(startdate);
}
sendEndDate(enddate: any){
  this.endDateOfReserve.next(enddate);
}

receiveStartDate(): Observable<any> {
  return this.startDateOfReserve.asObservable();
}
receiveEndDate(): Observable<any> {
  return this.endDateOfReserve.asObservable();
}

sendClickSearch(){
 return this.clickChange.next();
}

receiveClickSearch(): Observable<any> {
  return this.clickChange.asObservable();
}





}
