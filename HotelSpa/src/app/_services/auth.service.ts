import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = environment.apiUrl + 'auth';
constructor(private http: HttpClient) { }

login(model: any){
  return this.http.post(this.baseUrl+ '/login', model).pipe(
    map( (response: any) => {
      const user = response;
      if(user){
        localStorage.setItem('token', user.token);
      }
    }
  ));
}

register(model: any){
  console.log(model);
  return this.http.post(this.baseUrl+ '/register',model);
}


}
