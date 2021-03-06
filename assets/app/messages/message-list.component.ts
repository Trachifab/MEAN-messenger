import {Component, OnInit, Input, trigger, state, style, transition, animate} from '@angular/core';
import {Message} from './message.model';
import {MessageService} from './message.service';



@Component({
    selector :'app-message-list',
    template : `
        <div class="col-md8 col-md-offset-2">
            <app-message 
                [message]="message"
                *ngFor="let message of messages">
            </app-message>
        </div>
    `
})
export class MessageListComponent implements OnInit{

    messages : Message[];

    constructor(private messageService: MessageService){}

    ngOnInit(){
        this.messageService.getMessages()
            .subscribe(
                (message: Message[]) => {
                    this.messages = message;
                }
            );
    }

}