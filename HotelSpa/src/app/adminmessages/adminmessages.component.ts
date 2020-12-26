import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Message } from '../_models/message';
import { NumberModel } from '../_models/numberModel';
import { MessageService } from '../_services/message.service';

@Component({
  selector: 'app-adminmessages',
  templateUrl: './adminmessages.component.html',
  styleUrls: ['./adminmessages.component.scss'],
  animations: [ trigger('detailExpand', [
    state('collapsed', style({ height: '0px', minHeight: '0' })),
    state('expanded', style({ height: '*' })),
    transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
  ]),]
})
export class AdminmessagesComponent implements OnInit {
  number: NumberModel;
  messages : Message[];
  constructor(private messageService :MessageService) {
    this.loadMessages();
   }

  ngOnInit() {
  }

  loadMessages() {
    this.messageService.GetMessages().subscribe((messages: Message[]) => {
      this.messages = messages;
    }, error => {
      console.log(error);
    })
  }

  readMessage(idofMessage: number) {
    let message : Message = this.messages.find(obj =>
      obj.id === idofMessage
    );
    if (message.isRead){
      return;
    }

    this.number = {
      id: idofMessage
    };
    this.messageService.ReadMessage(this.number).subscribe(() => {
    }, error => {
      console.log(error);
      return;
    });

    this.messages.find(obj =>
      obj.id === idofMessage
    ).isRead = true;
  }

  columnsToDisplay = ['Date of send', "Email", 'Name', 'Surname','Title'];
  columnsToData = ['dateOfSend', 'email', 'name', 'surname','title'];
  expandedElement: Message | null;

}
