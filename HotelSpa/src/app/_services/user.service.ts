import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../_models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

baseUrl = environment.apiUrl;
constructor(private http: HttpClient) { }


getUsers() : Observable<User[]> {
  return this.http.get<User[]>(this.baseUrl +'users');
}
getUser(id : number) : Observable<User> {
  return this.http.get<User>(this.baseUrl +'users/'+id);
}
deleteUser(model: any){
  return this.http.post(this.baseUrl+'users/removeuser', model);
}

updateUser(id: number, model: any){
  return this.http.put(this.baseUrl+'users/updateuser/'+id, model);
}

changeRole(model: any){
  return this.http.post(this.baseUrl+'users/changerole', model);
}


}
