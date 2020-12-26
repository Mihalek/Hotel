import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  baseUrl = environment.apiUrl + 'messages';
  constructor(private http : HttpClient) { }
  sendMessage(model: any){
  return this.http.post(this.baseUrl+'/sendmessage', model);
  }

  GetMessages(){
    return this.http.get(this.baseUrl);
    }

  ReadMessage(model: any){
   return this.http.post(this.baseUrl+'/readmessage',model); }
  
}
