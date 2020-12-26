import { Message } from '../_models/message';
import { Component, OnInit } from '@angular/core';
import { MessageService } from '../_services/message.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formtocontact',
  templateUrl: './formtocontact.component.html',
  styleUrls: ['./formtocontact.component.css']
})
export class FormtocontactComponent implements OnInit {

  message : Message ={};
  constructor(private messageService : MessageService, private router : Router) { }

  ngOnInit(): void {
  }

  sendMessage(){
    this.message.dateOfSend = new Date(),
    this.messageService.sendMessage(this.message).subscribe(() =>{
      console.log('congratulation, you send the message');
      this.router.navigate(['']);
    }, error =>{
      console.log(error);
    });;

  }

}
