import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Room } from '../_models/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getRooms() : Observable<Room[]> {
    return this.http.get<Room[]>(this.baseUrl +'rooms');
  }
  getRoom(id: number) : Observable<Room> {
    return this.http.get<Room>(this.baseUrl+ 'rooms/'+id);
  }

}
