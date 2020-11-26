import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  baseUrl = environment.apiUrl + 'reservations';
 constructor(private http : HttpClient) { 

 }

reserve(model: any){
  console.log(model);
  return this.http.post(this.baseUrl+'/reserve',model);
}

}
